// src/utils/emailService.ts
import { EmailProviderA, EmailProviderB } from '../providers'; // Import from index.ts

export class EmailService {
  private providerA: EmailProviderA;
  private providerB: EmailProviderB;

  constructor() {
    this.providerA = new EmailProviderA();
    this.providerB = new EmailProviderB();
  }

  async sendEmail(id: string, to: string, subject: string, body: string): Promise<void> {
    try {
      await this.providerA.sendEmail(to, subject, body);
    } catch (error) {
      console.log('Provider A failed: ${(error as Error).message}'); // Corrected template literal syntax and type assertion
      try {
        await this.providerB.sendEmail(to, subject, body);
      } catch (error) {
        console.log('Provider B failed: ${(error as Error).message}'); // Corrected template literal syntax and type assertion
        throw new Error('Both providers failed to send the email');
      }
    }
  }
}
