/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single Primary Accent Color
        primary: {
          DEFAULT: '#C1121F',
          hover: '#A00E1A',
        },

        // Light Theme Colors
        light: {
          bg: '#F3f3f3',          // Warm cream background
          card: '#FFFFFF',        // Pure white containers
          heading: '#003049',     // Deep navy titles
          paragraph: '#1D3557',   // Slate navy body copy
          muted: '#669BBC',       // Steel blue secondary text
          border: 'rgba(0, 48, 73, 0.1)',
        },

        // Gemini-Inspired Dark Theme Colors
        dark: {
          bg: '#131314',          // Gemini dark core background (near black)
          card: '#1E1F20',        // Gemini elevated card surface
          heading: '#F0F4F9',     // High-contrast bright grey heading text
          paragraph: '#E3E3E3',   // Soft, readable off-white body text
          muted: '#C4C7C5',       // Subtle grey secondary copy
          border: '#2E2F31',      // Gemini-style subtle border divider
        },
      },
    },
  },
  plugins: [],
}