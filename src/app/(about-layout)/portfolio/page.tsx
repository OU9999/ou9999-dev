import AboutMe from "@/components/mainSection/about-me";
import Accordion from "@/components/portfolio/accordion-ui";
import ContactLink from "@/components/portfolio/contact-link";
import LinkText from "@/components/portfolio/link-text";
import {
  PortfolioContent,
  PortfolioTitle,
  ProjectLayout,
} from "@/components/portfolio/portfolio-ui";
import XIcon from "@/components/svg/x-icon";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div>
      <PortfolioTitle text="Contact" />
      <PortfolioContent>
        <ContactLink title="Blog" linkText="ou9999-dev.com" link="/" />
        <ContactLink
          title="PG"
          linkText="ou-playground.com"
          link="https://ou-playground.com"
        />
        <ContactLink
          title="Github"
          linkText="github.com/OU9999"
          link="https://github.com/OU9999"
        />
        <ContactLink
          title="Email"
          linkText="omh232323@gmail.com"
          link="mailto:omh232323@gmail.com"
        />
        <ContactLink
          title="Age"
          linkText="25 (1999.03.12)"
          link="https://superkts.com/cal/age/ymd/19990312"
        />
      </PortfolioContent>
    </div>
  );
};

const CareerSection = () => {
  return (
    <div>
      <PortfolioTitle text="Career" />
      <PortfolioContent>
        <ProjectLayout
          dateFrom="2023.05"
          dateTo="2023.10"
          projectTitle="FactorLabs"
          projectType="Front-End Developer"
          link="https://factorlabs.net/"
        >
          <div className="flex flex-col mt-5">
            <ul className="list-disc pl-4">
              <li>
                <p>외주로 개발된 탐색기를 새롭게 개발하여 사용자 경험을 향상</p>
              </li>
              <li>
                <p>Docker와 GitLab CI를 활용한 자동화 환경 구성</p>
              </li>
              <li>
                <p>
                  프론트엔드에서 보안을 챙긴 탈중앙화 형태 블록체인 지갑 구현
                </p>
              </li>
            </ul>
          </div>
        </ProjectLayout>
      </PortfolioContent>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div>
      <PortfolioTitle text="Project" />
      <PortfolioContent className="space-y-14">
        <ProjectLayout
          dateFrom="2024.04"
          dateTo="Now"
          projectTitle="ou-playground.com"
          projectType="Side Project"
          link="https://ou-playground.com"
          imgs={["default", "pg-1", "pg-2", "pg-3"]}
        >
          <div className="flex flex-col">
            <p>
              인상적인 UI나 흥미로운 웹 기술을 직접 구현해보기 위해 만든
              프로젝트입니다.
            </p>
            {/* <ul className="list-disc pl-4 mt-8">
              <li>
                <Accordion triggerText="AI TEXT-TO-IMAGE 구현">
                  <ul className="list-square pl-4">
                    <li>Next.js 서버 액션 + Replicate 를 이용하여 구현</li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion triggerText="서버의 부담을 덜기 위한 프론트 에러 처리">
                  <ul className="list-square pl-4">
                    <li>zod를 설정하여 </li>
                  </ul>
                </Accordion>
              </li>
            </ul> */}
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2024.01"
          dateTo="Now"
          projectTitle="ou9999-dev.com"
          projectType="Side Project"
          link="/"
          imgs={["blog"]}
        >
          <div className="flex flex-col">
            <p>
              짧고 쉽게 찾을수 있는 글 보다는, 직접 탐구하고 겪었던 문제점과
              개선점을 공유하는 글을 작성하는 블로그입니다.
            </p>
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2023.09"
          dateTo="2023.10"
          projectTitle="Factor Explorer"
          projectType="FactorLabs"
          link="https://explorer.gipc.app/"
          imgs={["ex-1", "ex-2"]}
        >
          <div className="flex flex-col">
            <p>
              Factor 블록체인 정보를 시각적으로 검색하고 볼 수 있게 해주는
              서비스입니다.
            </p>
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2023.06"
          dateTo="2023.08"
          projectTitle="Factor Wallet"
          projectType="FactorLabs"
          link="https://chromewebstore.google.com/detail/factor-wallet/bpkgfjmgpodhnfoioccefnkjilfjfjnp?hl=ko"
          imgs={["wa-1", "wa-2", "wa-3"]}
        >
          <div className="flex flex-col">
            <p>
              개인키 계정 관리, 코인 전송, 채굴 정보 기능을 가진 크롬 익스텐션
              앱입니다.
            </p>
          </div>
        </ProjectLayout>
      </PortfolioContent>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <AboutMe />
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-138 flex flex-col relative space-y-5">
          <Link href={"/about"}>
            <div className="absolute cursor-pointer top-14 right-0 w-5 h-5 fill-black dark:fill-white">
              <XIcon />
            </div>
          </Link>
          <ContactSection />
          <CareerSection />
          <ProjectSection />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
