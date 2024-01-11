import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["sans"],
      },
    },
    colors: {
      Black: "#000000",
      Light_Black: "#222831",
      Grey: "#EEEEEE",
      White: "#FFFFFF",
      Amber_500: "#FFC107",
      Yellow_500: "#FFEB3B",
      Orange_600: "#FB8C00",
      Grey_700: "#616161",
      transparent: "transparent",
      Purple_600: "#8E24AA",
      Pink_600: "#D81B60",
      Blue: "#4ca5ff",
      Violet: "#b573f8",
    },
  },
  plugins: [],
};
export default config;
