import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blur-black": "rgba(15, 15, 15, 0.4)",
        "content-header": "#1B1A1E",
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
    },
  },
  plugins: [],
};
export default config;
