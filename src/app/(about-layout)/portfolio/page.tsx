import AboutMe from "@/components/mainSection/about-me";
import PortfolioCard from "@/components/ui/card";
import { redirect } from "next/navigation";

const PortfolioPage = () => {
  const arr = new Array(4).fill(1);

  return (
    <>
      <AboutMe />

      <div className="w-full flex flex-col">
        <p className="text-xl">경험</p>
        <p>FactorLabs</p>
        <p>Front-End Developer</p>
        <p>2023.05 ~ 2023.10</p>
        <p>
          개발팀 내 유일한 프론트엔드 개발자로 주도적으로 문제를 발견하고 스스로
          해결해 나가는 경험과 서비스에 대한 오너십 형성
        </p>
        <p>서비스를 무에서 유까지, 초기단계에서 개발</p>
        <p>
          블록체인 네트워크에서 발생하는 정보를 시각적으로 검색하고 볼 수 있게
          해주는 탐색기 개발
        </p>
        <p>탈중앙화 형태 블록체인 지갑 크롬 익스텐션 앱 개발</p>
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
