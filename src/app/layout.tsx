import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/css/tailwind.css";
import "@/css/prism.css";
import { defaultOpenGraph, defaultTwitter } from "@/constant/metaData";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import { myDomain } from "@/constant/domain";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(myDomain), // 도메인 사면 바꾸셈
  title: "ou.dev",
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
      <body
        className={`bg-white-bg dark:bg-dark-bg text-slate-900 dark:text-slate-50 ${notoSans.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
