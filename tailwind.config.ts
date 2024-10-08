import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    extend: {
      colors: {
        primary: {
          purple: "#8E24AA",
          pink: "#D81B60",
        },
        grey: {
          DEFAULT: "#EEEEEE",
          100: "#969BA5",
          200: "#55616D",
          700: "#616161",
        },
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        amber: {
          500: "#FFC107",
        },
        yellow: {
          500: "#FFEB3B",
        },
        orange: {
          600: "#FB8C00",
        },
        transparent: "transparent",
      },
      backgroundImage: {
        "project-bg": "url('/assets/images/project-bg.png')",
        profile: "url('/assets/images/profile.jpg')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
