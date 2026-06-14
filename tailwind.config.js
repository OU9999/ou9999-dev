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
        "dark-bg": "#070707",
        "blur-black": "rgba(7, 7, 7, 0.58)",
        "content-header-black": "#101211",
      },
      width: {
        "276": "68rem",
      },
      height: {
        "2vh": "120dvh",
      },
      colors: {
        "google-ink": "#070707",
        "google-paper": "#E8ECEC",
        "google-blue": "#A2ADB3",
        "google-muted": "#8B9290",
        "google-yellow": "#8D8173",
        "gradient-start": "#E8ECEC",
        "gradient-end": "#C8D1D2",
        "mineral-ink": "#070707",
        "mineral-soot": "#020303",
        "mineral-graphite": "#101211",
        "mineral-teal": "#1F2A28",
        "mineral-indigo": "#202632",
        "mineral-blue": "#A2ADB3",
        "mineral-bone": "#E8ECEC",
        "mineral-muted": "#8B9290",
        "mineral-oxide": "#3A3030",
        "mineral-clay": "#5B5148",
      },
      backgroundImage: {
        "nacre-moonlit":
          "linear-gradient(112deg, #FFFDF7 0%, #FFEAF4 8%, #F7CFE3 15%, #DCD6FF 24%, #C8DFFF 32%, #F7FFFF 41%, #FFF5EC 49%, #F4C8DC 58%, #DFD4FF 68%, #D7F3FF 77%, #FFF1E4 86%, #E8E9FF 94%, #FFFDF8 100%)",
        "mineral-wash":
          "linear-gradient(112deg, #0A0B0A 0%, #101211 48%, #080909 100%)",
        "mineral-lettering":
          "linear-gradient(112deg, #E8ECEC 0%, #DDE2E2 52%, #EEF1F0 100%)",
        "mineral-canvas":
          "radial-gradient(circle at 78% 12%, rgb(31 42 40 / 0.12), transparent 28%), radial-gradient(circle at 12% 84%, rgb(32 38 50 / 0.1), transparent 30%), linear-gradient(145deg, #070707 0%, #030404 48%, #0C0D0C 100%)",
        "mineral-brush":
          "radial-gradient(ellipse at 24% 72%, rgb(31 42 40 / 0.42), transparent 38%), radial-gradient(ellipse at 74% 32%, rgb(32 38 50 / 0.34), transparent 36%), linear-gradient(104deg, transparent 0 18%, rgb(162 173 179 / 0.07) 27%, transparent 43% 100%)",
        "mineral-brush-soft":
          "radial-gradient(ellipse at 20% 68%, rgb(58 48 48 / 0.1), transparent 38%), radial-gradient(ellipse at 58% 44%, rgb(31 42 40 / 0.22), transparent 42%), radial-gradient(ellipse at 84% 30%, rgb(162 173 179 / 0.1), transparent 34%), linear-gradient(118deg, transparent 0 24%, rgb(232 236 236 / 0.04) 32%, transparent 48% 100%)",
        "mineral-grain":
          "radial-gradient(circle at 18% 42%, rgb(232 236 236 / 0.035) 0 1px, transparent 1px 5px), radial-gradient(circle at 78% 18%, rgb(162 173 179 / 0.03) 0 1px, transparent 1px 6px)",
        "mineral-frame":
          "linear-gradient(145deg, rgb(232 236 236 / 0.055), rgb(162 173 179 / 0.05) 44%, rgb(31 42 40 / 0.16))",
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
            "--tw-prose-body": "#E8ECEC",
            "--tw-prose-headings": "#E8ECEC",
            "--tw-prose-lead": "#E8ECEC",
            "--tw-prose-links": "#A2ADB3",
            "--tw-prose-bold": "#E8ECEC",
            "--tw-prose-counters": "#8B9290",
            "--tw-prose-bullets": "#8B9290",
            "--tw-prose-hr": "rgba(162, 173, 179, 0.2)",
            "--tw-prose-quotes": "#E8ECEC",
            "--tw-prose-quote-borders": "#1F2A28",
            "--tw-prose-captions": "#8B9290",
            "--tw-prose-code": "#D0D7D7",
            "--tw-prose-pre-code": "#E8ECEC",
            "--tw-prose-pre-bg": "rgba(31, 42, 40, 0.18)",
            "--tw-prose-th-borders": "rgba(162, 173, 179, 0.2)",
            "--tw-prose-td-borders": "rgba(162, 173, 179, 0.16)",
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
