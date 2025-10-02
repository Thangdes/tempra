import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Worker, Job } from 'bullmq';
import { EmailJobData, JobResult } from '../interfaces/queue-job.interface';
import { QueueName } from '../types/queue.types';
import { getDefaultWorkerConfig } from '../config/queue.config';

/**
 * Email job processor
 * This worker processes email sending jobs from the queue
 */
@Injectable()
export class EmailProcessor implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(EmailProcessor.name);
    private worker: Worker;

    constructor(
        private readonly configService: ConfigService,
        // Inject email service when available
        // private readonly emailService: EmailService,
    ) {}

    async onModuleInit() {
        const workerConfig = getDefaultWorkerConfig(this.configService);

        this.worker = new Worker(
            QueueName.EMAIL,
            async (job: Job<EmailJobData>) => {
                return await this.processJob(job);
            },
            {
                ...workerConfig,
                concurrency: parseInt(this.configService.get('EMAIL_WORKER_CONCURRENCY', '5')) || 5,
            }
        );

        // Event listeners
        this.worker.on('completed', (job) => {
            this.logger.log(`Email job ${job.id} sent successfully to ${job.data.to}`);
        });

        this.worker.on('failed', (job, err) => {
            this.logger.error(
                `Email job ${job?.id} failed for ${job?.data.to}: ${err.message}`,
                err.stack
            );
        });

        this.logger.log(`Email worker started with concurrency: ${workerConfig.concurrency}`);
    }

    /**
     * Process email job
     */
    private async processJob(job: Job<EmailJobData>): Promise<JobResult> {
        const { to, subject, template, context, userId } = job.data;

        this.logger.log(
            `Sending email to ${to} with template "${template}" (user: ${userId})`
        );

        try {
            await job.updateProgress(25);

            // TODO: Inject and use EmailService
            // await this.emailService.sendEmail({
            //     to,
            //     subject,
            //     template,
            //     context,
            // });

            // Placeholder - simulate email sending
            await this.simulateSendEmail(to, subject);
            
            await job.updateProgress(100);

            return {
                success: true,
                message: `Email sent successfully to ${to}`,
            };
        } catch (error) {
            this.logger.error(
                `Failed to send email to ${to}: ${error.message}`,
                error.stack
            );
            throw error; // Let BullMQ handle retry
        }
    }

    /**
     * Simulate email sending (for development)
     */
    private async simulateSendEmail(to: string, subject: string): Promise<void> {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        this.logger.debug(`[SIMULATED] Email sent to ${to} with subject: ${subject}`);
        
        // Simulate occasional failures for testing retry logic
        if (Math.random() < 0.05) { // 5% failure rate
            throw new Error('Simulated email service error');
        }
    }

    async onModuleDestroy() {
        if (this.worker) {
            await this.worker.close();
            this.logger.log('Email worker stopped');
        }
    }
}
