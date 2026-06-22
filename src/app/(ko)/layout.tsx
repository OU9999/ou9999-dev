import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import "@kfonts/line-seed-sans-kr/index.css";
import "@/css/tailwind.css";
import "@/css/prettyCode.css";
import { siteMetadata } from "@/constant/meta-data";
import { SiteShell } from "@/components/layout/site-shell";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = siteMetadata;

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  setRequestLocale(defaultLocale);

  return <SiteShell locale={defaultLocale}>{children}</SiteShell>;
};

export default RootLayout;
