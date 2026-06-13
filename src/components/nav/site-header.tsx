import Link from "next/link";
import { PopoverButton } from "./header/popover-button";

const Header = () => {
  return (
    <header className="z-40 flex h-14 w-full items-center bg-google-ink px-6 text-google-paper md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-2xl md:text-3xl cursor-pointer opacity-100 hover:opacity-70">
            <p>&lt;</p>
            <p className="hidden sm:inline-block">
              OU9999
            </p>
            <p>/&gt;</p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href={"/"}>
            <p className=" text-lg font-semibold opacity-100 hover:opacity-70">
              Home
            </p>
          </Link>
          <Link href={"/about"}>
            <p className=" text-lg font-semibold opacity-100 hover:opacity-70">
              About
            </p>
          </Link>
          <Link href={"/portfolio"}>
            <p className=" text-lg font-semibold opacity-100 hover:opacity-70">
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
