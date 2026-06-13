import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@kfonts/line-seed-sans-kr/index.css";
import "@/css/tailwind.css";
import "@/css/prettyCode.css";
import { defaultOpenGraph, defaultTwitter } from "@/constant/meta-data";
import { Footer } from "@/components/nav/site-footer";
import { myDomain } from "@/constant/domain";
import { Header } from "@/components/nav/site-header";

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
  verification: {
    google: "c08fG67rRWvc_6yY5wNMLhl__pmClidB0MxV4N-GLIw",
    other: {
      "naver-site-verification": "064760e130b51b3bf3bd7c0f24aa0d3892199f1f",
    },
  },
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-slate-50 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
