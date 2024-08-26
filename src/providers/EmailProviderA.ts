// src/providers/emailProviderA.ts

import { IEmailProvider } from './interfaces'; // Updated path

export class EmailProviderA implements IEmailProvider {
  private static RATE_LIMIT_MS = 1000; // 1 second rate limit
  private lastSendTimestamp: number | null = null;

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const now = Date.now();
    
    // Check rate limit
    if (this.lastSendTimestamp && now - this.lastSendTimestamp < EmailProviderA.RATE_LIMIT_MS) {
      throw new Error('Rate limit exceeded');
    }
    
    this.lastSendTimestamp = now;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate email parameters
        if (!to || !subject || !body) {
          reject(new Error('Invalid email parameters'));
        } else {
          console.log(`EmailProviderA sending email to ${to} with subject "${subject}"`);
          resolve();
        }
      }, 500); // Simulated delay
    });
  }
}
