// src/sendTestEmail.ts

import { EmailService } from './utils/emailService';

// Create an instance of EmailService
const emailService = new EmailService();

// Example function to send an email
const sendTestEmail = async () => {
  try {
    // Unique email ID to ensure idempotency
    const emailId = 'unique-email-id-1';
    
    // Send email using EmailService
    await emailService.sendEmail('emailId', 'recipient@example.com', 'Subject', 'Email body');
    
    console.log('Email sent successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to send email:', error.message);
    } else {
      console.error('Failed to send email: Unknown error');
    }
  }
};

// Invoke the sendTestEmail function
sendTestEmail();
