import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

const maruBuri = localFont({
  src: [
    {
      path: "../fonts/maru-buri/MaruBuri-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/maru-buri/MaruBuri-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/maru-buri/MaruBuri-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/maru-buri/MaruBuri-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/maru-buri/MaruBuri-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["serif"],
  variable: "--font-maru-buri",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
  variable: "--font-cormorant-garamond",
});

export { cormorantGaramond, maruBuri };
