import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import {
  EmailOptions,
  EmailConfig,
  SendEmailResult,
  EmailStatus,
} from '../interfaces/email.interface';
import { DatabaseService } from '../../../database/database.service';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: Transporter;
  private emailConfig: EmailConfig;
  private templateCache: Map<string, HandlebarsTemplateDelegate> = new Map();

  constructor(
    private readonly configService: ConfigService,
    private readonly databaseService: DatabaseService,
  ) {
    this.initializeEmailConfig();
    this.initializeTransporter();
    this.registerHandlebarsHelpers();
  }

  private initializeEmailConfig(): void {
    this.emailConfig = {
      host: this.configService.get<string>('SMTP_HOST', 'smtp.gmail.com'),
      port: this.configService.get<number>('SMTP_PORT', 587),
      secure: this.configService.get<boolean>('SMTP_SECURE', false),
      auth: {
        user: this.configService.get<string>('SMTP_USER', ''),
        pass: this.configService.get<string>('SMTP_PASSWORD', ''),
      },
      from: this.configService.get<string>(
        'SMTP_FROM',
        'Tempra <noreply@tempra.app>',
      ),
    };
  }

  private initializeTransporter(): void {
    this.transporter = nodemailer.createTransport({
      host: this.emailConfig.host,
      port: this.emailConfig.port,
      secure: this.emailConfig.secure,
      auth: this.emailConfig.auth,
    });

    this.transporter.verify((error, success) => {
      if (error) {
        this.logger.error('Email transporter verification failed:', error);
      } else {
        this.logger.log('Email server is ready to send messages');
      }
    });
  }

  private registerHandlebarsHelpers(): void {
    Handlebars.registerHelper('formatDate', (date: Date) => {
      if (!date) return '';
      return new Date(date).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    });

    Handlebars.registerHelper('year', () => {
      return new Date().getFullYear();
    });

    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
      return arg1 === arg2 ? options.fn(this) : options.inverse(this);
    });
  }

  private async loadTemplate(templateName: string): Promise<HandlebarsTemplateDelegate> {
    if (this.templateCache.has(templateName)) {
      return this.templateCache.get(templateName)!;
    }

    const templatePath = path.join(
      __dirname,
      '..',
      'templates',
      `${templateName}.hbs`,
    );

    try {
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const template = Handlebars.compile(templateSource);
      
      this.templateCache.set(templateName, template);
      
      return template;
    } catch (error) {
      this.logger.error(`Failed to load template ${templateName}:`, error);
      throw new Error(`Template ${templateName} not found`);
    }
  }

  private async renderTemplate(
    templateName: string,
    context: Record<string, any>,
  ): Promise<string> {
    const template = await this.loadTemplate(templateName);
    
    const fullContext = {
      ...context,
      year: new Date().getFullYear(),
      dashboardUrl: this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000') + '/dashboard',
      docsUrl: this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000') + '/docs',
      calendarUrl: this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000') + '/calendar',
    };

    return template(fullContext);
  }

  async sendEmail(
    options: EmailOptions,
    userId?: string,
  ): Promise<SendEmailResult> {
    try {
      let html = options.html;
      let text = options.text;

      if (options.template && options.context) {
        html = await this.renderTemplate(options.template, options.context);
      }

      const mailOptions = {
        from: options.from || this.emailConfig.from,
        to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
        subject: options.subject,
        html,
        text,
        cc: options.cc ? (Array.isArray(options.cc) ? options.cc.join(', ') : options.cc) : undefined,
        bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc.join(', ') : options.bcc) : undefined,
        attachments: options.attachments,
      };

      let logId: string | undefined;
      if (userId) {
        logId = await this.createEmailLog(
          userId,
          Array.isArray(options.to) ? options.to[0] : options.to,
          options.subject,
          options.template,
          EmailStatus.PENDING,
        );
      }

      const info = await this.transporter.sendMail(mailOptions);

      this.logger.log(`Email sent successfully: ${info.messageId}`);

      if (logId) {
        await this.updateEmailLog(logId, EmailStatus.SENT, undefined, new Date());
      }

      return {
        success: true,
        messageId: info.messageId,
        logId,
      };
    } catch (error) {
      this.logger.error('Failed to send email:', error);

      if (userId) {
        const logId = await this.createEmailLog(
          userId,
          Array.isArray(options.to) ? options.to[0] : options.to,
          options.subject,
          options.template,
          EmailStatus.FAILED,
          error.message,
        );

        return {
          success: false,
          error: error.message,
          logId,
        };
      }

      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendWelcomeEmail(
    userId: string,
    email: string,
    userName: string,
  ): Promise<SendEmailResult> {
    return this.sendEmail(
      {
        to: email,
        subject: 'Welcome to Tempra!',
        template: 'welcome',
        context: { userName },
      },
      userId,
    );
  }

  async sendEventReminderEmail(
    userId: string,
    email: string,
    eventDetails: {
      title: string;
      startTime: Date;
      location?: string;
      description?: string;
    },
  ): Promise<SendEmailResult> {
    return this.sendEmail(
      {
        to: email,
        subject: `Reminder: ${eventDetails.title}`,
        template: 'event-reminder',
        context: {
          ...eventDetails,
          eventUrl: `${this.configService.get<string>('FRONTEND_URL')}/events/${eventDetails.title}`,
        },
      },
      userId,
    );
  }

  async sendPasswordResetEmail(
    userId: string,
    email: string,
    userName: string,
    identifier: string,
    secret: string,
  ): Promise<SendEmailResult> {
    const resetUrl = `${this.configService.get<string>('FRONTEND_URL')}/reset-password?identifier=${identifier}&secret=${secret}`;

    return this.sendEmail(
      {
        to: email,
        subject: 'Password Reset Request',
        template: 'password-reset',
        context: {
          userName,
          resetUrl,
          expiresIn: 24,
        },
      },
      userId,
    );
  }

  private async createEmailLog(
    userId: string,
    to: string,
    subject: string,
    template: string | undefined,
    status: EmailStatus,
    errorMessage?: string,
  ): Promise<string> {
    const query = `
      INSERT INTO email_logs (user_id, "to", subject, template, status, error_message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;

    const result = await this.databaseService.query(query, [
      userId,
      to,
      subject,
      template || null,
      status,
      errorMessage || null,
    ]);

    return result.rows[0].id;
  }

  private async updateEmailLog(
    logId: string,
    status: EmailStatus,
    errorMessage?: string,
    sentAt?: Date,
  ): Promise<void> {
    const query = `
      UPDATE email_logs
      SET status = $2, error_message = $3, sent_at = $4, updated_at = NOW()
      WHERE id = $1
    `;

    await this.databaseService.query(query, [
      logId,
      status,
      errorMessage || null,
      sentAt || null,
    ]);
  }

  async getEmailLogs(userId: string, limit = 50, offset = 0) {
    const query = `
      SELECT id, user_id, "to", subject, template, status, error_message, sent_at, created_at
      FROM email_logs
      WHERE user_id = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `;

    const result = await this.databaseService.query(query, [userId, limit, offset]);
    return result.rows;
  }

  async getEmailLogById(logId: string, userId: string) {
    const query = `
      SELECT id, user_id, "to", subject, template, status, error_message, sent_at, created_at
      FROM email_logs
      WHERE id = $1 AND user_id = $2
    `;

    const result = await this.databaseService.query(query, [logId, userId]);
    return result.rows[0] || null;
  }
}
