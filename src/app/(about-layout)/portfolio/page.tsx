import AboutMe from "@/components/mainSection/about-me";
import PortfolioCard from "@/components/ui/card";
import { redirect } from "next/navigation";

const PortfolioPage = () => {
  redirect("/about");
  const arr = new Array(4).fill(1);

  return (
    <>
      <AboutMe />

      <div className="w-full flex flex-col">
        <p className="text-xl">Contact</p>
        <p>omh232323@gmail.com</p>
        <p>blog</p>
        <p>github</p>
        <p className="text-xl">경험</p>
        <p>FactorLabs</p>
        <p>Front-End Developer</p>
        <p>2023.05 ~ 2023.10</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1">
        {arr.map((_, idx) => (
          <PortfolioCard
            key={"cardd" + idx}
            className="w-auto h-auto flex flex-col"
          >
            <p>ou9999-dev.com</p>
          </PortfolioCard>
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
