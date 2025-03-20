# Shelby and Sons Title Company

A professional website for Shelby and Sons Title Company specializing in LLC registration services, built with Remix, styled with Tailwind CSS, and deployed on Netlify with Stripe payment processing integration.

## Project Overview

Shelby and Sons Title Company offers comprehensive LLC registration and title services. Our website provides a streamlined platform for clients to register new LLCs, pay for services securely, access educational resources about business formation, and connect with our expert team for personalized assistance.

## Technology Stack

- **Frontend Framework**: [Remix](https://remix.run/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Payment Processing**: [Stripe API](https://stripe.com/)
- **Deployment**: [Netlify](https://www.netlify.com/) with serverless functions
- **Version Control**: Git/GitHub

## Core Features

- **LLC Registration Services**: Complete online LLC formation process
- **Secure Payment Processing**: Integrated Stripe payment system
- **User Dashboard**: Track application status and manage services
- **Educational Resources**: Information about business formation and requirements
- **Service Selection**: Multiple tiers of LLC formation packages
- **Responsive Design**: Professional interface accessible on all devices
- **Contact & Support**: Direct communication channels with our title experts

## User Workflows

1. **LLC Registration**:
   - Business information collection
   - State selection and fee calculation
   - Document preparation
   - Secure payment processing
   - Application tracking

2. **Client Services**:
   - View service history
   - Download filed documents
   - Request additional services
   - Schedule consultations

## Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SethBarrett34/shelbyandsonstitle.git
   cd shelbyandsonstitle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file with the following variables:
   ```
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── components/       # Reusable UI components
│   ├── routes/           # Route components for pages
│   │   ├── index.tsx     # Homepage
│   │   ├── register.tsx  # LLC registration flow
│   │   ├── payment.tsx   # Payment processing
│   │   ├── dashboard/    # User dashboard routes
│   ├── models/           # Data models and types
│   ├── utils/            # Utility functions
│   ├── styles/           # CSS and Tailwind utilities
│   └── root.tsx          # Root component
├── public/               # Static assets
├── netlify/              # Netlify configuration and functions
│   ├── functions/        # Serverless functions
└── package.json          # Project dependencies
```

## Building and Deployment

This project is set up for continuous deployment with Netlify.

### Manual Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   ```bash
   npx netlify deploy --prod
   ```

### Netlify Configuration

1. Create a new site in Netlify
2. Connect to your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
4. Set up environment variables in Netlify dashboard:
   - STRIPE_PUBLIC_KEY
   - STRIPE_SECRET_KEY
   - Other configuration variables

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Contact

For questions about our LLC registration services or website support:

- **Phone**: (123) 456-7890
- **Email**: contact@shelbyandsonstitle.com
- **Address**: 123 Business Ave, Suite 100, Cityville, ST 12345
- **Hours**: Monday-Friday 9:00 AM - 5:00 PM EST
