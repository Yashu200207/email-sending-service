import { EmailProviderA, EmailProviderB } from '../src/providers';
import { EmailService } from '../src/utils/emailService';

describe('EmailService', () => {
  let emailService: EmailService;
  let providerA: EmailProviderA;
  let providerB: EmailProviderB;

  beforeEach(() => {
    providerA = new EmailProviderA();
    providerB = new EmailProviderB();
    emailService = new EmailService();
  });

  it('should send email successfully using provider A', async () => {
    jest.spyOn(providerA, 'sendEmail').mockResolvedValue(undefined); // Provide a value
    await emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body');
    // Add assertions to verify behavior
  });

  it('should fall back to provider B if provider A fails', async () => {
    jest.spyOn(providerA, 'sendEmail').mockRejectedValue(new Error('Provider A failed'));
    jest.spyOn(providerB, 'sendEmail').mockResolvedValue(undefined); // Provide a value
    await emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body');
    // Add assertions to verify behavior
  });

  it('should throw an error if both providers fail', async () => {
    jest.spyOn(providerA, 'sendEmail').mockRejectedValue(new Error('Provider A failed'));
    jest.spyOn(providerB, 'sendEmail').mockRejectedValue(new Error('Provider B failed'));
    await expect(emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body')).rejects.toThrow('Both providers failed to send the email');
  });
});
