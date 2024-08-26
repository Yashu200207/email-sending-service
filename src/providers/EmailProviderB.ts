// src/providers/emailProviderB.ts

import { IEmailProvider } from './interfaces'; // Updated path

export class EmailProviderB implements IEmailProvider {
  // Simulate a rate limiter
  private static RATE_LIMIT_MS = 2000; // 2 seconds rate limit

  private lastSendTimestamp: number | null = null;

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const now = Date.now();
    if (this.lastSendTimestamp && now - this.lastSendTimestamp < EmailProviderB.RATE_LIMIT_MS) {
      throw new Error('Rate limit exceeded');
    }
    this.lastSendTimestamp = now;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!to || !subject || !body) {
          reject(new Error('Invalid email parameters'));
        } else {
          console.log('EmailProviderB sending email to ${to} with subject "${subject}"');
          resolve();
        }
      }, 1000); // Simulated delay
    });
  }
}
