import { AboutMe } from "@/components/main-section/about-me";
import { defaultLocale } from "@/i18n/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | ou9999.dev",
};

const AboutPage = () => {
  return <AboutMe locale={defaultLocale} />;
};

export default AboutPage;
