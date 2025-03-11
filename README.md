# Shelby and Sons Title Company

A professional website for Shelby and Sons Title Company built with Remix and deployed on Netlify.

## Project Overview

This website provides information about Shelby and Sons Title Company's services, team, and contact information. It is designed to be professional, user-friendly, and easily navigable.

## Technology Stack

- **Frontend Framework**: [Remix](https://remix.run/)
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Styling**: Tailwind CSS
- **Version Control**: Git/GitHub

## Features

- Modern, professional design
- Responsive layout for all devices
- Easy navigation
- Services information
- Team profiles
- Contact form
- Request a quote functionality

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

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── components/       # Reusable components
│   ├── routes/           # Route components
│   ├── styles/           # CSS files
│   └── root.tsx          # Root component
├── public/               # Static assets
├── netlify/              # Netlify configuration
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

### Setup Netlify

1. Create a new site in Netlify
2. Connect to your GitHub repository
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
   - Functions directory: `netlify/functions`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Contact

For questions or support regarding this website, please contact [Your Contact Information].
