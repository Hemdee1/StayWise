/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        fullscreen: "1920px",
      },
      fontFamily: {
        Grotesk: "'Familjen Grotesk', sans-serif",
        Manrope: "'Manrope', sans-serif",
      },
      colors: {
        primary: "#FEB737",
        secondary: "#FFEBD9",
      },
      backgroundImage: {
        hero: "url('/images/bg.png')",
      },
      keyframes: {
        move: {
          from: {
            translate: "0 0",
          },
          to: {
            translate: "-100% 0",
          },
        },
      },
      animation: {
        move: "move 7s linear infinite",
        fadeIn: "fadeIn 0.6s",
        fadeOut: "fadeOut 0.6s",
        scaleIn: "scaleIn 0.3s",
        scaleOut: "scaleOut 0.3s",
      },
    },
  },
  plugins: [],
};
