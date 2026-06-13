import Link from "next/link";
import { PopoverButton } from "./header/popover-button";

const Header = () => {
  return (
    <header className="z-40 flex h-14 w-full items-center border-b border-slate-800 bg-dark-bg px-6 md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-2xl md:text-3xl cursor-pointer hover:group group">
            <p className="text-gradient-start">&lt;</p>
            <p className="hidden sm:inline-block bg-gradient-to-r from-white to-white text-transparent bg-clip-text group-hover:from-gradient-start group-hover:to-gradient-end">
              OU9999
            </p>
            <p className="text-gradient-end">/&gt;</p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href={"/"}>
            <p className=" text-lg font-semibold hover:text-slate-400">Home</p>
          </Link>
          <Link href={"/about"}>
            <p className=" text-lg font-semibold hover:text-slate-400">
              About
            </p>
          </Link>
          <Link href={"/portfolio"}>
            <p className=" text-lg font-semibold hover:text-slate-400">
              Portfolio
            </p>
          </Link>
        </div>
        <PopoverButton />
      </nav>
    </header>
  );
};

export { Header };
