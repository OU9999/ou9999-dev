import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-50 w-full h-20 flex justify-center fixed backdrop-blur-md bg-blur-white dark:bg-blur-black">
      <div className="w-276 h-full flex justify-between items-center ">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-3xl cursor-pointer hover:group group">
            <p className="text-gradient-start">&lt;</p>
            <p
              className={`bg-gradient-to-r from-black to-black dark:from-white dark:to-white inline-block text-transparent bg-clip-text  group-hover:from-gradient-start group-hover:to-gradient-end group-hover:dark:from-gradient-start group-hover:dark:to-gradient-end`}
            >
              OU9999
            </p>
            <p className="text-gradient-end">/&gt;</p>
          </div>
        </Link>

        <div className="flex space-x-10">
          <Link href={"/about"}>
            <p className="transition-colors text-lg font-semibold hover:text-slate-500 hover:dark:text-slate-400">
              About
            </p>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
