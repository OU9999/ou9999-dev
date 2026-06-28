import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import "@/css/tailwind.css";
import "@/css/prettyCode.css";
import { createSiteMetadata } from "@/constant/meta-data";
import { SiteShell } from "@/components/layout/site-shell";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = createSiteMetadata(defaultLocale);

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  setRequestLocale(defaultLocale);

  return <SiteShell locale={defaultLocale}>{children}</SiteShell>;
};

export default RootLayout;
