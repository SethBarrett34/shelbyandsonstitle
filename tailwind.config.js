/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Dark blue - professional
          light: '#0055a4',
          dark: '#001f3f',
        },
        secondary: {
          DEFAULT: '#8b0000', // Dark red - traditional for legal services
          light: '#b22222',
          dark: '#660000',
        },
        accent: {
          DEFAULT: '#f8f9fa', // Light gray background
          dark: '#e9ecef',
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
