import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SECURITY_CONSTANTS } from '../constants';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger(PasswordService.name);
  private readonly saltRounds = SECURITY_CONSTANTS.BCRYPT_SALT_ROUNDS;


  async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, this.saltRounds);
    } catch (error) {
      this.logger.error('Failed to hash password:', error);
      throw new Error('Password hashing failed');
    }
  }


  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      this.logger.error('Failed to compare password:', error);
      throw new Error('Password comparison failed');
    }
  }

  async generateSalt(rounds: number = this.saltRounds): Promise<string> {
    try {
      return await bcrypt.genSalt(rounds);
    } catch (error) {
      this.logger.error('Failed to generate salt:', error);
      throw new Error('Salt generation failed');
    }
  }

  validatePasswordStrength(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }

    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
