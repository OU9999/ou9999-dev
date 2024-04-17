import AboutMe from "@/components/mainSection/about-me";
import { redirect } from "next/navigation";

const PortfolioPage = () => {
  redirect("/about");

  return (
    <>
      <AboutMe />
      <p>FactorLabs</p>
      <p>2023.05 ~ 2023.10</p>
      <p>ou9999-dev.com</p>
      <p>2024.01 ~</p>
      <p>ou-playground.com</p>
      <p>2024.04 ~</p>
    </>
  );
};

export default PortfolioPage;
