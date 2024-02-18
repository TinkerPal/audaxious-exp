/* Example if you're using plain CSS */

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Bricolage_Grotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#EBEDED",
        },
        activeBorder: "rgba(165, 215, 242, 0.45)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1740px",
      },
      backgroundImage: {
        custom: 'url("/src/assets/svg/hero.svg")',
        heroCustom: 'url("/src/assets/svg/hero-imgBg.svg")',
        boxGrid: 'url("/src/assets/svg/boxGrid.svg")',
        blur: 'url("/src/assets/svg/blur.svg")',
        blur1: 'url("/src/assets/svg/blur1.svg")',
        blur2: 'url("/src/assets/svg/blur2.svg")',
        buttonCustom: 'url("/src/assets/svg/buttondivBg.svg")',
        split_screen: 'url("/src/assets/svg/new-split-img.svg")',
        homeScreen: 'url("/src/assets/svg/homeScreen.svg")',
        bgLanding: 'url("/src/assets/svg/bgLanding.svg")',
        dashboardHeroBg: 'url("/src/assets/svg/dashboardSvg/heroBg.svg")',
        selectedBg: 'url("/src/assets/svg/dashboardSvg/selected.svg")',
      },
      backgroundColor: {
        backdrop: "rgba(5, 22, 31, 0.75)",
        wallet: "rgba(86, 139, 168, 0.20)",
      },
      boxShadow: {
        customShadow: "0px 1.334px 6.672px 0px rgba(25, 92, 121, 0.08)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".h-app": {
          height: "100vh",
          // height: "100dvh",
        },
        ".min-h-app": {
          "min-height": "100vh",
          // "min-height": "100dvh",
        },
      });
    }),
  ],
};
