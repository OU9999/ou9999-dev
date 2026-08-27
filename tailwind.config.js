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
        "content-header-black": "#111111",
      },
      width: {
        "276": "68rem",
      },
      height: {
        "2vh": "120dvh",
      },
      colors: {
        "google-ink": "#070707",
        "google-paper": "#E8E8E8",
        "google-muted": "#909090",
        "mineral-ink": "#070707",
        "mineral-soot": "#030303",
        "mineral-graphite": "#111111",
        "mineral-bone": "#E8E8E8",
        "mineral-muted": "#909090",
      },
      backgroundImage: {
        "nacre-moonlit":
          "linear-gradient(112deg, #FFFDF7 0%, #FFEAF4 8%, #F7CFE3 15%, #DCD6FF 24%, #C8DFFF 32%, #F7FFFF 41%, #FFF5EC 49%, #F4C8DC 58%, #DFD4FF 68%, #D7F3FF 77%, #FFF1E4 86%, #E8E9FF 94%, #FFFDF8 100%)",
        "mineral-wash":
          "linear-gradient(112deg, #0A0A0A 0%, #111111 48%, #080808 100%)",
        "mineral-lettering":
          "linear-gradient(112deg, #F8FBFB 0%, #D4E5EC 24%, #A2ADB3 48%, #E5EEF1 72%, #FFFFFF 100%)",
        "mineral-canvas":
          "radial-gradient(circle at 78% 12%, rgb(40 40 40 / 0.12), transparent 28%), radial-gradient(circle at 12% 84%, rgb(40 40 40 / 0.1), transparent 30%), linear-gradient(145deg, #070707 0%, #030303 48%, #0C0C0C 100%)",
        "mineral-brush":
          "radial-gradient(ellipse at 24% 72%, rgb(40 40 40 / 0.42), transparent 38%), radial-gradient(ellipse at 74% 32%, rgb(40 40 40 / 0.34), transparent 36%), linear-gradient(104deg, transparent 0 18%, rgb(172 172 172 / 0.07) 27%, transparent 43% 100%)",
        "mineral-brush-soft":
          "radial-gradient(ellipse at 20% 68%, rgb(52 52 52 / 0.1), transparent 38%), radial-gradient(ellipse at 58% 44%, rgb(40 40 40 / 0.22), transparent 42%), radial-gradient(ellipse at 84% 30%, rgb(172 172 172 / 0.1), transparent 34%), linear-gradient(118deg, transparent 0 24%, rgb(232 232 232 / 0.04) 32%, transparent 48% 100%)",
        "mineral-grain":
          "radial-gradient(circle at 18% 42%, rgb(232 232 232 / 0.035) 0 1px, transparent 1px 5px), radial-gradient(circle at 78% 18%, rgb(172 172 172 / 0.03) 0 1px, transparent 1px 6px)",
        "mineral-frame":
          "linear-gradient(145deg, rgb(255 255 255 / 0.05), rgb(232 232 232 / 0.035) 44%, rgb(255 255 255 / 0.018))",
      },
      fontFamily: {
        sans: ["var(--font-maru-buri)", "serif"],
        serif: ["var(--font-maru-buri)", "serif"],
        mono: [
          "var(--font-cormorant-garamond)",
          "var(--font-maru-buri)",
          "serif",
        ],
        brand: [
          "var(--font-cormorant-garamond)",
          "var(--font-maru-buri)",
          "serif",
        ],
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
            "--tw-prose-body": "#E8E8E8",
            "--tw-prose-headings": "#E8E8E8",
            "--tw-prose-lead": "#E8E8E8",
            "--tw-prose-links": "#E8E8E8",
            "--tw-prose-bold": "#E8E8E8",
            "--tw-prose-counters": "#909090",
            "--tw-prose-bullets": "#909090",
            "--tw-prose-hr": "rgba(232, 232, 232, 0.18)",
            "--tw-prose-quotes": "#E8E8E8",
            "--tw-prose-quote-borders": "rgba(232, 232, 232, 0.28)",
            "--tw-prose-captions": "#909090",
            "--tw-prose-code": "#D0D0D0",
            "--tw-prose-pre-code": "#E8E8E8",
            "--tw-prose-pre-bg": "rgba(232, 232, 232, 0.035)",
            "--tw-prose-th-borders": "rgba(232, 232, 232, 0.18)",
            "--tw-prose-td-borders": "rgba(232, 232, 232, 0.14)",
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
