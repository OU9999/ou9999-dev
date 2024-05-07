import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/css/tailwind.css";
import "@/css/prettyCode.css";
import { defaultOpenGraph, defaultTwitter } from "@/constant/meta-data";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/nav/Footer";
import { myDomain } from "@/constant/domain";
import Header from "@/components/nav/Header";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(myDomain),
  title: "ou9999.dev",
  description: "OU9999's blog",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    ...defaultOpenGraph,
  },
  twitter: {
    ...defaultTwitter,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="c08fG67rRWvc_6yY5wNMLhl__pmClidB0MxV4N-GLIw"
      />
      <meta
        name="naver-site-verification"
        content="064760e130b51b3bf3bd7c0f24aa0d3892199f1f"
      />
      <body
        className={`bg-white-bg dark:bg-dark-bg text-slate-900 dark:text-slate-50 ${notoSans.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
