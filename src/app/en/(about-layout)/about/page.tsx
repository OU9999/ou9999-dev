import { AboutMe } from "@/components/main-section/about-me";
import { createPageMetadata, siteTitle } from "@/constant/meta-data";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `ABOUT | ${siteTitle}`,
  locale: "en",
  pathname: "/about",
});

const AboutPage = () => {
  return <AboutMe locale="en" />;
};

export default AboutPage;
