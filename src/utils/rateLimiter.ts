export class RateLimiter {
    private lastSent: Map<string, number> = new Map();
    private limit: number = 60000; // Rate limit period in milliseconds (1 minute)
  
    /**
     * Check if an email can be sent based on rate limiting.
     * @param emailId - Unique identifier for the email.
     * @returns boolean - Returns true if the email can be sent, false otherwise.
     */
    canSend(emailId: string): boolean {
      const now = Date.now();
      const lastSent = this.lastSent.get(emailId);
  
      // If emailId was sent before and within the rate limit period
      if (lastSent && now - lastSent < this.limit) {
        return false; // Rate limit exceeded
      }
  
      // Update the timestamp for the emailId
      this.lastSent.set(emailId, now);
      return true; // Email can be sent
    }
  }
  