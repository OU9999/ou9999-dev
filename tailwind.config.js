/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-bg": "rgb(15, 15, 15)",
        "blur-black": "rgba(15, 15, 15, 0.4)",
        "content-header-black": "#1B1A1E",
      },
      width: {
        "276": "68rem",
      },
      height: {
        "2vh": "120dvh",
      },
      colors: {
        "gradient-start": "#93A1F7",
        "gradient-end": "#52C7C6",
      },
      borderWidth: {
        "1": "1px",
      },
      maxWidth: {
        "138": "38rem",
        "186": "50rem",
        "276": "68rem",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "p code::before": { content: "none" },
            "p code::after": { content: "none" },
          },
        },
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
