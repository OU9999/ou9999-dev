import { AboutMe } from "@/components/main-section/about-me";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | ou9999.dev",
};

const AboutPage = () => {
  return <AboutMe />;
};

export default AboutPage;
