// src/services/emailServiceImplementation.ts

import { EmailProviderA } from '../providers/EmailProviderA'; // Correct relative path
import { EmailProviderB } from '../providers/EmailProviderB'; // Correct relative path

export class EmailService {
  private providerA: EmailProviderA;
  private providerB: EmailProviderB;

  constructor() {
    this.providerA = new EmailProviderA();
    this.providerB = new EmailProviderB();
  }

  async sendEmail(id: string, to: string, subject: string, body: string): Promise<void> {
    try {
      // Try sending email with provider A
      await this.providerA.sendEmail(to, subject, body);
    } catch (error) {
      console.log('Provider A failed: ${error.message}');
      // Fallback to provider B
      try {
        await this.providerB.sendEmail(to, subject, body);
      } catch (error) {
        console.log('Provider B failed: ${error.message}');
        throw new Error('Both providers failed to send the email');
      }
    }
  }
}
