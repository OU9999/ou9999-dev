import { AboutMe } from "@/components/main-section/about-me";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABOUT | ou9999.dev",
};

const PortfolioLink = () => {
  return (
    <div className="mt-14 flex w-full justify-center">
      <Link href={"/portfolio"}>
        <div className="group cursor-pointer rounded-md bg-mineral-lettering p-[1px] font-semibold shadow-[0_18px_60px_rgb(4_8_8/0.22)]">
          <div className="flex w-full items-center justify-center rounded-md bg-content-header-black px-3 py-1">
            <p className="inline-block bg-gradient-to-r from-google-paper to-google-paper bg-clip-text text-transparent group-hover:from-gradient-start group-hover:to-gradient-end">
              Portfolio
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <AboutMe />
      <PortfolioLink />
    </>
  );
};

export default AboutPage;
