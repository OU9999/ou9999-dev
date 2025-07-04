import AboutMe from "@/components/mainSection/about-me";
import Accordion from "@/components/portfolio/accordion-ui";
import ContactLink from "@/components/portfolio/contact-link";
import LinkText from "@/components/portfolio/link-text";
import { ListBox, ListItem } from "@/components/portfolio/list-ui";
import {
  PortfolioContent,
  PortfolioTitle,
  ProjectLayout,
} from "@/components/portfolio/portfolio-ui";
import XIcon from "@/components/svg/x-icon";
import Image from "next/image";
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
          dateTo="2023.11"
          projectTitle="FactorLabs"
          projectType="FrontEnd Developer"
          link="https://factorlabs.net/"
        >
          <ListBox className="list-disc mt-5">
            <ListItem>
              외주로 개발된 탐색기를 새롭게 개발하여 사용자 경험을 향상
            </ListItem>
            <ListItem>Docker와 GitLab CI를 활용한 자동화 환경 구성</ListItem>
            <ListItem>
              프론트엔드에서 보안을 챙긴 탈중앙화 형태 블록체인 지갑 구현
            </ListItem>
          </ListBox>
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
          stack={[
            "React",
            "TypeScript",
            "Next.js",
            "replicate",
            "clova-ocr",
            "shadcn/ui",
          ]}
          imgs={["default", "pg-1", "pg-2", "pg-3"]}
        >
          <div className="flex flex-col">
            <p>
              인상적인 UI나 흥미로운 웹 기술을 직접 구현해보기 위해 만든
              프로젝트입니다.
            </p>
            <ListBox className="list-disc mt-5">
              <ListItem>
                <Accordion triggerText="Next.js 서버 액션 AI TEXT-TO-IMAGE 구현">
                  <ListBox className="list-square">
                    <ListItem>
                      <LinkText
                        link="/p/server-action-with-replicate"
                        text="Next.js 서버 액션 + Replicate 를 이용한 구현 과정"
                      />
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>

              <ListItem>
                <Accordion triggerText="클라우드 비용 절약을 위한 프론트 설계">
                  <ListBox className="list-square">
                    <ListItem>
                      bot 접근 방지를 위한 google-recaptcha 설정
                    </ListItem>
                    <ListItem>
                      웹 스토리지를 이용하여 반복적인 접근 차단
                    </ListItem>
                    <ListItem>
                      zod를 활용하여 에러 처리는 클라이언트에서 하도록 설계
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>
              <ListItem>
                <LinkText
                  link="/p/id-ocr"
                  text="최소 비용과 기본 기능으로 신분증 OCR 알고리즘 구현"
                />
              </ListItem>
            </ListBox>
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2024.01"
          dateTo="Now"
          projectTitle="ou9999-dev.com"
          projectType="Side Project"
          link="/"
          stack={["React", "TypeScript", "Next.js", "content-layer"]}
          imgs={["blog"]}
        >
          <div className="flex flex-col">
            <p>
              짧고 쉽게 찾을수 있는 글 보다는, 직접 탐구하고 겪었던 문제점과
              개선점을 공유하는 글을 작성하는 블로그입니다.
            </p>
            <ListBox className="list-disc mt-5">
              <ListItem>
                <Accordion triggerText="Discord에서 영감을 얻은 동적인 이미지 placeholder 구현">
                  <ListBox className="list-square">
                    <ListItem>
                      이미지 크기에 알맞은 placeholder를 통해 일관된 페이지
                      레이아웃 유지
                    </ListItem>
                    <ListItem>
                      각 이미지에 대응하는 base64 데이터 추출 과정 구현
                    </ListItem>
                    <ListItem>
                      빌드 프로세스 중 base64 데이터 생성 (중복 생성 방지)
                    </ListItem>
                    <ListItem>pre-build 스크립트로 자동화</ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>

              <ListItem>
                <Accordion triggerText="동적인 metadata 와 openGraph 적용">
                  <ListBox className="list-square">
                    <ListItem>동적인 metadata 및 openGraph 설계</ListItem>
                    <ListItem>구글 , 네이버 검색엔진 등록</ListItem>
                    <ListItem>
                      기존 블로그 대비 노출수 4배 증가, 평균 CTR 4배증가
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>
              <ListItem>
                <Accordion triggerText="SSG로 설계하여 가벼운 웹사이트 구축">
                  <ListBox className="list-square">
                    <ListItem>
                      content-layer를 적용하여 빌드시에 markdown 페이지 생성
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>
              <ListItem>
                <Accordion triggerText="Next.js App router 장점을 살린 설계">
                  <ListBox className="list-square">
                    <ListItem>
                      클라이언트 컴포넌트를 리프노드에 가깝게 둬서 불필요한
                      리렌더링 방지
                    </ListItem>
                    <ListItem>
                      병렬 라우팅을 활용하여 일관성 있는 레이아웃 유지 및 개발
                      편의성 향상
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>
            </ListBox>
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2023.09"
          dateTo="2023.10"
          projectTitle="Factor Explorer V2"
          projectType="FactorLabs"
          stack={["React", "TypeScript", "Next.js", "React-Query", "Web3"]}
          imgs={["ex-1", "ex-2"]}
        >
          <div className="flex flex-col">
            <p>
              Factor 블록체인 정보를 시각적으로 검색하고 볼 수 있게 해주는
              서비스입니다.
            </p>
            <ListBox className="list-disc mt-5">
              <ListItem>
                <Accordion triggerText="외주로 개발된 탐색기를 새롭게 개발하여 사용자 경험을 향상">
                  <ListBox className="list-square">
                    <ListItem>
                      <LinkText
                        link="https://easy-track-3bf.notion.site/8fa4524f11404ed6889061ba98b2e753?pvs=74"
                        text="사용자 경험 개선 성과 시각자료"
                      />
                    </ListItem>
                    <ListItem className="flex flex-col">
                      <p>사용자 리소스 JS 4.7MiB 감소</p>
                      <p>기존(7.7MiB) ⇒ 개선 후(3.0MiB)</p>
                    </ListItem>
                    <ListItem className="flex flex-col">
                      <p>LCP(Largest Contentful Paint) 1.9초 감소</p>
                      <p>기존(2.6 s) ⇒ 개선 후(0.7 s)</p>
                    </ListItem>
                    <ListItem className="flex flex-col">
                      <p>Speed Index 1.2초 감소</p>
                      <p>기존(2.3 s) ⇒ 개선 후(1.1 s)</p>
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>

              <ListItem>
                <Accordion triggerText="비효율적인 전역 상태 리팩토링 후 리렌더링 감소">
                  <ListBox className="list-square">
                    <ListItem>
                      <LinkText
                        link="https://easy-track-3bf.notion.site/2c366a71f2f746e0bb36a1aaa05359b8?pvs=74"
                        text="재설계 과정 및 결과비교"
                      />
                    </ListItem>
                  </ListBox>
                </Accordion>
              </ListItem>
              <ListItem>효율적인 개발 환경 구성을 위한 Gitlab CI 구성</ListItem>
              <ListItem>
                효율적인 블록체인 데이터를 보여주기 위한 데이터 재설계
              </ListItem>
              <ListItem>
                타입스크립트 도입 후 블록체인 인터페이스 작성으로 DX 향상
              </ListItem>
            </ListBox>
          </div>
        </ProjectLayout>
        <ProjectLayout
          dateFrom="2023.06"
          dateTo="2023.08"
          projectTitle="Factor Wallet"
          projectType="FactorLabs"
          link="https://chromewebstore.google.com/detail/factor-wallet/bpkgfjmgpodhnfoioccefnkjilfjfjnp?hl=ko"
          stack={[
            "React",
            "TypeScript",
            "React-Query",
            "Web3",
            "Webpack",
            "Babel",
          ]}
          imgs={["wa-1", "wa-2", "wa-3"]}
        >
          <div className="flex flex-col">
            <p>
              개인키 계정 관리, 코인 전송, 채굴 정보 기능을 가진 크롬 익스텐션
              앱입니다.
            </p>
            <ListBox className="list-disc mt-5">
              <ListItem>
                <LinkText
                  link="https://easy-track-3bf.notion.site/React-Webpack-Babel-cb479360ec18464683fc5f246e25b83f"
                  text="React로 크롬 익스텐션 개발을 위한 개발 환경 구성"
                />
              </ListItem>
              <ListItem>
                <LinkText
                  link="https://easy-track-3bf.notion.site/29daf9250faa4cc3a549c42a0b017290"
                  text="니모닉 알고리즘을 이용한 블록체인 지갑 설계 후 구현"
                />
              </ListItem>
              <ListItem>crypto-js와 dot-env로 정보 암호화</ListItem>
              <ListItem>무한 스크롤 구현</ListItem>
            </ListBox>
          </div>
        </ProjectLayout>
      </PortfolioContent>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div>
      <PortfolioTitle text="Education & Certificate" />
      <PortfolioContent className="space-y-14">
        <ProjectLayout
          dateFrom="2018.03"
          dateTo="2023.02"
          projectTitle="부천대학교 졸업"
          projectType="정보통신과"
        />
        <ProjectLayout
          date="2021.08"
          projectTitle="정보처리 산업기사"
          projectType="한국산업인력공단"
        />
      </PortfolioContent>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <AboutMe />
      {/* <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-138 flex flex-col relative space-y-5">
          <Link href={"/about"}>
            <div className="absolute cursor-pointer top-14 right-0 w-5 h-5 fill-black dark:fill-white">
              <XIcon />
            </div>
          </Link  >
          <ContactSection />
          <CareerSection />
          <ProjectSection />
          <EducationSection />
        </div>
      </div> */}
    </>
  );
};

export default PortfolioPage;
