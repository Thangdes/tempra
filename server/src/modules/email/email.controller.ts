import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { EmailService } from './services/email.service';
import { SendEmailDto, EmailLogResponseDto } from './dto/send-email.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Email')
@ApiBearerAuth()
@Controller('email')
@UseGuards(JwtAuthGuard)
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Send email',
    description: 'Send email using Nodemailer with optional template support',
  })
  @ApiResponse({
    status: 200,
    description: 'Email sent successfully',
    schema: {
      example: {
        success: true,
        message: 'Email sent successfully',
        data: {
          messageId: '<message-id@smtp.example.com>',
          logId: 'uuid-here',
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid email data' })
  @ApiResponse({ status: 500, description: 'Failed to send email' })
  async sendEmail(
    @Body() sendEmailDto: SendEmailDto,
    @CurrentUser('id') userId: string,
  ) {
    const result = await this.emailService.sendEmail(
      {
        to: sendEmailDto.to,
        subject: sendEmailDto.subject,
        html: sendEmailDto.html,
        text: sendEmailDto.text,
        template: sendEmailDto.template,
        context: sendEmailDto.context,
        cc: sendEmailDto.cc,
        bcc: sendEmailDto.bcc,
      },
      userId,
    );

    if (result.success) {
      return {
        success: true,
        message: 'Email sent successfully',
        data: {
          messageId: result.messageId,
          logId: result.logId,
        },
      };
    } else {
      return {
        success: false,
        message: 'Failed to send email',
        error: result.error,
      };
    }
  }

  @Get('logs')
  @ApiOperation({ 
    summary: 'Get email logs',
    description: 'Retrieve email sending history for current user',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 50 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @ApiResponse({
    status: 200,
    description: 'Email logs retrieved successfully',
    type: [EmailLogResponseDto],
  })
  async getEmailLogs(
    @CurrentUser('id') userId: string,
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
  ) {
    const logs = await this.emailService.getEmailLogs(
      userId,
      Number(limit),
      Number(offset),
    );

    return {
      success: true,
      message: 'Email logs retrieved successfully',
      data: logs,
      meta: {
        limit: Number(limit),
        offset: Number(offset),
        total: logs.length,
      },
    };
  }

  @Get('logs/:id')
  @ApiOperation({ 
    summary: 'Get email log by ID',
    description: 'Retrieve specific email log details',
  })
  @ApiResponse({
    status: 200,
    description: 'Email log retrieved successfully',
    type: EmailLogResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Email log not found' })
  async getEmailLogById(
    @Param('id') logId: string,
    @CurrentUser('id') userId: string,
  ) {
    const log = await this.emailService.getEmailLogById(logId, userId);

    if (!log) {
      return {
        success: false,
        message: 'Email log not found',
      };
    }

    return {
      success: true,
      message: 'Email log retrieved successfully',
      data: log,
    };
  }

  @Post('test/welcome')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Send test welcome email',
    description: 'Send a test welcome email to verify configuration',
  })
  @ApiResponse({ status: 200, description: 'Test email sent successfully' })
  async sendTestWelcomeEmail(
    @CurrentUser('id') userId: string,
    @CurrentUser('email') email: string,
    @CurrentUser('username') username: string,
  ) {
    const result = await this.emailService.sendWelcomeEmail(
      userId,
      email,
      username || 'User',
    );

    return {
      success: result.success,
      message: result.success 
        ? 'Test welcome email sent successfully' 
        : 'Failed to send test email',
      data: result,
    };
  }

  @Post('test/reminder')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Send test event reminder email',
    description: 'Send a test event reminder email to verify configuration',
  })
  @ApiResponse({ status: 200, description: 'Test email sent successfully' })
  async sendTestReminderEmail(
    @CurrentUser('id') userId: string,
    @CurrentUser('email') email: string,
  ) {
    const result = await this.emailService.sendEventReminderEmail(
      userId,
      email,
      {
        title: 'Test Event - Team Meeting',
        startTime: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        location: 'Conference Room A',
        description: 'This is a test event reminder',
      },
    );

    return {
      success: result.success,
      message: result.success 
        ? 'Test reminder email sent successfully' 
        : 'Failed to send test email',
      data: result,
    };
  }
}
