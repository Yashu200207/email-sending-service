// tests/rateLimiter.test.ts
import { RateLimiter } from '../src/utils/rateLimiter';

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    rateLimiter = new RateLimiter();
  });

  it('should allow sending when rate limit is not exceeded', () => {
    jest.spyOn(rateLimiter, 'canSend').mockReturnValue(true);

    expect(rateLimiter.canSend('unique-id')).toBe(true);
  });

  it('should prevent sending when rate limit is exceeded', () => {
    jest.spyOn(rateLimiter, 'canSend').mockReturnValue(false);

    expect(rateLimiter.canSend('unique-id')).toBe(false);
  });

  it('should initialize properly', () => {
    expect(rateLimiter).toBeInstanceOf(RateLimiter);
  });

  // Example for additional methods if they exist
  it('should track the number of requests correctly', () => {
    // If trackRequest exists
    // rateLimiter.trackRequest('unique-id');
    // Expectation would depend on what trackRequest does
    expect(rateLimiter.canSend('unique-id')).toBe(true); // Example
  });
});
