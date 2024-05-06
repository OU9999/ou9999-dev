import AboutMe from "@/components/mainSection/about-me";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <AboutMe />
      <div className="w-full flex justify-center mt-14">
        <Link href={"/portfolio"}>
          <button className="bg-gradient-to-r from-gradient-start to-gradient-end font-semibold rounded-md p-[1px] cursor-pointer hover:group group">
            <div className="flex justify-center items-center w-full bg-content-header-white dark:bg-content-header-black rounded-md px-3 py-1">
              <p
                className={`inline-block bg-gradient-to-r from-gradient-start to-gradient-end dark:from-white dark:to-white text-transparent bg-clip-text group-hover:from-violet-500 group-hover:to-teal-500 group-hover:dark:from-gradient-start group-hover:dark:to-gradient-end`}
              >
                Portfolio
              </p>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
