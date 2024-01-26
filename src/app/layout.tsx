import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/css/tailwind.css";
import "@/css/prism.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ou.dev",
  description: "OU9999's blog",
  icons: {
    icon: "/favicon.ico",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
