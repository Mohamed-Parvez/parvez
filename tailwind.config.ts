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
      Teal: "00ADB5",
      White: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
