export class Idempotency {
    private sentEmails: Set<string> = new Set();
  
    /**
     * Check if the email ID is idempotent (i.e., has been sent before).
     * @param emailId - Unique identifier for the email.
     * @returns boolean - Returns true if the email ID has been sent before, false otherwise.
     */
    isIdempotent(emailId: string): boolean {
      if (this.sentEmails.has(emailId)) {
        return true; // Email has been sent before
      } else {
        this.sentEmails.add(emailId); // Add email ID to the set
        return false; // Email has not been sent before
      }
    }
  }
  