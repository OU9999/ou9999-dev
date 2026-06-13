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
        "google-ink": "#12110C",
        "google-paper": "#FFFFFF",
        "google-blue": "#1A73E8",
        "google-muted": "#BDC1C6",
        "google-yellow": "#FAE366",
        "gradient-start": "#93A1F7",
        "gradient-end": "#52C7C6",
      },
      backgroundImage: {
        "nacre-moonlit":
          "linear-gradient(135deg, #EDF7F3 0%, #9DF4E6 24%, #B7B9FF 52%, #F4B9DE 76%, #FFF4CA 100%)",
      },
      fontFamily: {
        sans: ["LINE Seed Sans KR", "system-ui", "sans-serif"],
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
        google: {
          css: {
            "--tw-prose-body": "#FFFFFF",
            "--tw-prose-headings": "#FFFFFF",
            "--tw-prose-lead": "#FFFFFF",
            "--tw-prose-links": "#1A73E8",
            "--tw-prose-bold": "#FFFFFF",
            "--tw-prose-counters": "#FFFFFF",
            "--tw-prose-bullets": "#FFFFFF",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.2)",
            "--tw-prose-quotes": "#FFFFFF",
            "--tw-prose-quote-borders": "#1A73E8",
            "--tw-prose-captions": "#FFFFFF",
            "--tw-prose-code": "#FAE366",
            "--tw-prose-pre-code": "#FFFFFF",
            "--tw-prose-pre-bg": "rgba(255, 255, 255, 0.08)",
            "--tw-prose-th-borders": "rgba(255, 255, 255, 0.2)",
            "--tw-prose-td-borders": "rgba(255, 255, 255, 0.2)",
          },
        },
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
