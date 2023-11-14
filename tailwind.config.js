const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Bricolage_Grotesque: ['Bricolage Grotesque', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      screens: {
        '2xl': '1740px',
      },
      backgroundImage: {
        custom: 'url("/src/assets/svg/hero.svg")',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '.h-app': {
          height: '100vh',
          height: '100dvh',
        },
        '.min-h-app': {
          'min-height': '100vh',
          'min-height': '100dvh',
        },
      });
    }),
  ],
};
