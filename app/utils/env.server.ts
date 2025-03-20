/**
 * Utility functions for working with environment variables in a type-safe way
 */

/**
 * Gets an environment variable and throws an error if it's not defined
 * @param key The environment variable key
 * @returns The environment variable value
 */
export function getRequiredServerEnvVar(key: string): string {
  const value = process.env[key];
  
  if (value === undefined) {
    throw new Error(`Required environment variable "${key}" is not defined`);
  }
  
  return value;
}

/**
 * Gets an environment variable or returns a default value if it's not defined
 * @param key The environment variable key
 * @param defaultValue The default value to return if the environment variable is not defined
 * @returns The environment variable value or the default value
 */
export function getOptionalServerEnvVar(key: string, defaultValue: string): string {
  const value = process.env[key];
  return value === undefined ? defaultValue : value;
}

/**
 * Checks if the app is running in development mode
 * @returns True if the app is running in development mode
 */
export function isDevelopment(): boolean {
  return getOptionalServerEnvVar('APP_ENV', 'development') === 'development';
}

/**
 * Gets the Stripe secret key
 * @returns The Stripe secret key
 */
export function getStripeSecretKey(): string {
  return getRequiredServerEnvVar('STRIPE_SECRET_KEY');
}

/**
 * Gets the Stripe publishable key
 * @returns The Stripe publishable key
 */
export function getStripePublishableKey(): string {
  return getRequiredServerEnvVar('STRIPE_PUBLISHABLE_KEY');
}

/**
 * Gets the application URL
 * @returns The application URL
 */
export function getAppUrl(): string {
  return getOptionalServerEnvVar('APP_URL', 'http://localhost:3000');
}

/**
 * Gets the application secret
 * @returns The application secret
 */
export function getAppSecret(): string {
  return getRequiredServerEnvVar('APP_SECRET');
} 