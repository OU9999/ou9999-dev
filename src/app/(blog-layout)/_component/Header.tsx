import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-50 w-full h-20 flex justify-center fixed backdrop-blur-md bg-blur-white dark:bg-blur-black">
      <div className="w-full max-w-276 h-full flex justify-between items-center lg:px-0 px-5 ">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-3xl cursor-pointer hover:group group">
            <p className="text-gradient-start">&lt;</p>
            <p
              className={`bg-gradient-to-r from-gradient-start to-gradient-end dark:from-white dark:to-white inline-block text-transparent bg-clip-text group-hover:from-violet-500 group-hover:to-teal-500 group-hover:dark:from-gradient-start group-hover:dark:to-gradient-end`}
            >
              OU9999
            </p>
            <p className="text-gradient-end">/&gt;</p>
          </div>
        </Link>

        <div className="hidden space-x-10 lg:flex">
          <Link href={"/about"}>
            <p className=" text-lg font-semibold hover:text-slate-500 hover:dark:text-slate-400">
              About
            </p>
          </Link>
          <ModeToggle />
        </div>
        <div className="flex lg:hidden">
          <p>test</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
