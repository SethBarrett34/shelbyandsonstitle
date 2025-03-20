# Environment Variables Setup

This document explains how to set up environment variables for the Shelby and Sons Title Company website.

## Local Development

1. Copy the `.env.example` file to a new file named `.env`:
   ```
   cp .env.example .env
   ```

2. Replace the placeholder values in the `.env` file with your actual API keys and configuration values:
   - Stripe API keys (for payment processing)
   - Application configuration
   - Any other third-party API keys you're using

3. **IMPORTANT**: Never commit your `.env` file to version control. It contains sensitive API keys and should remain private.

## Production Deployment

For production deployment on Netlify:

1. Set up environment variables in the Netlify dashboard:
   - Go to your site settings
   - Navigate to "Build & deploy" > "Environment variables"
   - Add each variable from your `.env` file

2. For local testing of Netlify functions, you can use the Netlify CLI:
   ```
   npm install -g netlify-cli
   netlify login
   netlify dev
   ```

## Required Environment Variables

| Variable Name | Description | Required |
|---------------|-------------|----------|
| STRIPE_SECRET_KEY | Stripe secret API key | Yes |
| STRIPE_PUBLISHABLE_KEY | Stripe publishable API key | Yes |
| APP_ENV | Application environment (development/production) | Yes |
| APP_URL | Application URL | Yes |
| APP_SECRET | Secret for session/cookie encryption | Yes |
| NETLIFY_SITE_ID | Netlify site ID | For deployment |
| NETLIFY_AUTH_TOKEN | Netlify authentication token | For deployment | 