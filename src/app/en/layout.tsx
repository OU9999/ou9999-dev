import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import "@/css/tailwind.css";
import "@/css/prettyCode.css";
import { createSiteMetadata } from "@/constant/meta-data";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = createSiteMetadata("en");

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  setRequestLocale("en");

  return <SiteShell locale="en">{children}</SiteShell>;
};

export default RootLayout;
