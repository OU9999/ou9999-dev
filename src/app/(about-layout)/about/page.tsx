import { AboutMe } from "@/components/main-section/about-me";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABOUT | ou9999.dev",
};

const PortfolioLink = () => {
  return (
    <div className="w-full flex justify-center mt-14">
      <Link href={"/portfolio"}>
        <div className="rotated_gradient_box font-semibold rounded-md p-[1px] cursor-pointer hover:group group">
          <div className="flex justify-center items-center w-full bg-content-header-black rounded-md px-3 py-1">
            <p className="inline-block bg-gradient-to-r from-white to-white text-transparent bg-clip-text group-hover:from-gradient-start group-hover:to-gradient-end">
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
