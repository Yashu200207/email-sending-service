import { EmailProviderA, EmailProviderB } from '../src/providers';
import { EmailService } from '@utils/emailService';

export { EmailProviderA } from './EmailProviderA';
export { EmailProviderB } from './EmailProviderB';

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
    jest.spyOn(providerA, 'sendEmail').mockResolvedValue(undefined); // or provide an actual value
    await expect(emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body')).resolves.toBeUndefined();
    // Additional assertions to verify behavior, e.g., if the method was called
  });

  it('should fall back to provider B if provider A fails', async () => {
    const providerBSpy = jest.spyOn(providerB, 'sendEmail').mockResolvedValue(undefined); // or provide an actual value
    jest.spyOn(providerA, 'sendEmail').mockRejectedValue(new Error('Provider A failed'));
    await expect(emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body')).resolves.toBeUndefined();
    expect(providerBSpy).toHaveBeenCalled(); // Verify that providerB's sendEmail was called
  });

  it('should throw an error if both providers fail', async () => {
    jest.spyOn(providerA, 'sendEmail').mockRejectedValue(new Error('Provider A failed'));
    jest.spyOn(providerB, 'sendEmail').mockRejectedValue(new Error('Provider B failed'));
    await expect(emailService.sendEmail('1', 'test@example.com', 'Subject', 'Body')).rejects.toThrow('Both providers failed to send the email');
  });
});
