/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-pink': '#FF1493',
        'lightning': '#ffffff',  // Add custom color for lightning effect
      },
      keyframes: {
        lightning: {
          '0%': {
            backgroundColor: 'rgba(0, 0, 0, 1)',  // Black background initially
          },
          '10%': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Flash of light
          },
          '50%': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',  // More intense light during the flash
          },
          '100%': {
            backgroundColor: 'rgba(0, 0, 0, 1)',  // Reset back to black
          },
        },
      },
      animation: {
        lightning: 'lightning 5s infinite', // Lightning effect will run every 5 seconds
      },
    },
  },
  plugins: [],
};
