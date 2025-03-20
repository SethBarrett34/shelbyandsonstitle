/**
 * Utility functions for working with environment variables on the client
 * 
 * IMPORTANT: This file should only expose environment variables that are safe to be public.
 * Never expose secrets like API keys here.
 */

/**
 * Gets an environment variable from the window object
 * @param key The environment variable key
 * @returns The environment variable value
 */
export function getClientEnvVar(key: string): string | undefined {
  if (typeof window === 'undefined') {
    throw new Error('getClientEnvVar should only be called on the client');
  }
  
  // @ts-ignore - ENV is a custom property we add to the window object
  return window.ENV?.[key];
}

/**
 * Gets a required client-side environment variable
 * @param key The environment variable key
 * @returns The environment variable value
 */
export function getRequiredClientEnvVar(key: string): string {
  const value = getClientEnvVar(key);
  
  if (value === undefined) {
    throw new Error(`Required client environment variable "${key}" is not defined`);
  }
  
  return value;
}

/**
 * Gets the Stripe publishable key
 * @returns The Stripe publishable key
 */
export function getStripePublishableKey(): string {
  return getRequiredClientEnvVar('STRIPE_PUBLISHABLE_KEY');
}

/**
 * Checks if the app is running in development mode
 * @returns True if the app is running in development mode
 */
export function isDevelopment(): boolean {
  return getClientEnvVar('APP_ENV') === 'development';
} 