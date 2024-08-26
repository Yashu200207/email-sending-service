export async function retryWithExponentialBackoff(operation: () => Promise<void>, attempt: number): Promise<void> {
    const delay = 1000 * Math.pow(2, attempt); // Exponential backoff
    try {
      await operation();
    } catch (error) {
      if (attempt >= 4) { // Limit attempts
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      await retryWithExponentialBackoff(operation, attempt + 1);
    }
  }
  