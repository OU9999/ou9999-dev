import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

interface TestLayoutProps {
  children: ReactNode;
}

const TestLayout = ({ children }: TestLayoutProps) => {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <>{children}</>;
};

export default TestLayout;
