import Link from "next/link";
import ModeToggle from "./header/ModeToggle";
import PopoverButton from "./PopoverButton";

const Header = () => {
  return (
    <header className="z-40 w-full h-14 md:h-20 flex justify-center fixed backdrop-blur-md bg-blur-white dark:bg-blur-black">
      <div className="w-full max-w-276 px-5 xl:px-0 h-full flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-2xl md:text-3xl cursor-pointer hover:group group">
            <p className="text-gradient-start">&lt;</p>
            <p
              className={`hidden sm:inline-block bg-gradient-to-r from-gradient-start to-gradient-end dark:from-white dark:to-white text-transparent bg-clip-text group-hover:from-violet-500 group-hover:to-teal-500 group-hover:dark:from-gradient-start group-hover:dark:to-gradient-end`}
            >
              OU9999
            </p>
            <p className="text-gradient-end">/&gt;</p>
          </div>
        </Link>

        <div className="hidden space-x-10 md:flex">
          <Link href={"/about"}>
            <p className=" text-lg font-semibold hover:text-slate-500 hover:dark:text-slate-400">
              About
            </p>
          </Link>
          <ModeToggle />
        </div>
        <PopoverButton />
      </div>
    </header>
  );
};

export default Header;
