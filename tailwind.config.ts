import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundColor: {
        "white-bg": "rgb(254,255,254)",
        "dark-bg": "rgb(15, 15, 15)",
        "blur-black": "rgba(15, 15, 15, 0.4)",
        "blur-white": "rgba(255, 255, 255, 0.4)",
        "content-header-black": "#1B1A1E",
        "content-header-white": "#F2F6FF",
      },
      width: {
        "276": "68rem",
      },
      height: {
        "2vh": "200vh",
      },
      colors: {
        "gradient-start": "#93A1F7",
        "gradient-end": "#52C7C6",
      },
      borderWidth: {
        "1": "1px",
      },
      maxWidth: {
        "276": "68rem",
      },
    },
  },
  plugins: [],
};
export default config;
