# Shelby and Sons Title Company

A professional website for Shelby and Sons Title Company, providing LLC registration, vehicle registration, and title services in Montana.

## Overview

This website is built with:
- [Remix](https://remix.run) - A full-stack web framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Stripe](https://stripe.com) - For payment processing
- [Netlify](https://www.netlify.com/) - For hosting and serverless functions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/SethBarrett34/shelbyandsonstitle.git
   cd shelbyandsonstitle
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   ```
   cp .env.example .env
   ```
   
   Update the `.env` file with your actual API keys and configuration values.

4. Start the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Project Structure

- `/app` - Main application code
  - `/components` - Reusable UI components
  - `/routes` - Remix routes for pages
  - `/utils` - Utility functions
- `/public` - Static assets
  - `/images` - Image assets
  - `/styles` - CSS files
- `/netlify` - Netlify functions

## Deployment

The site is deployed on Netlify. Any push to the main branch will trigger a deployment.

### Environment Variables

Make sure to set up environment variables in the Netlify dashboard:
- Go to your site settings
- Navigate to "Build & deploy" > "Environment variables"
- Add each variable from your `.env` file

For more information, see [ENV_SETUP.md](docs/ENV_SETUP.md).

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server (after build)

## License

All rights reserved. This code is proprietary and confidential.
