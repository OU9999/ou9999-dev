import { AboutMe } from "@/components/main-section/about-me";
import { createPageMetadata, siteTitle } from "@/constant/meta-data";
import { defaultLocale } from "@/i18n/config";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `ABOUT | ${siteTitle}`,
  locale: defaultLocale,
  pathname: "/about",
});

const AboutPage = () => {
  return <AboutMe locale={defaultLocale} />;
};

export default AboutPage;
