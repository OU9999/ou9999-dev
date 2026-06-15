import Link from "next/link";
import {
  hoverMineralTextGradient,
  mineralTextGradient,
} from "../common/styles";
import { cn } from "@/utils/tailwind-util";
import { PopoverButton } from "./header/popover-button";

const Header = () => {
  return (
    <header className="relative z-40 flex h-14 w-full items-center border-b-1 border-mineral-blue/10 bg-google-ink/92 px-6 text-google-paper backdrop-blur-md md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link
          href={"/"}
          className={cn(
            "flex cursor-pointer items-center justify-center text-2xl font-bold md:text-3xl",
            mineralTextGradient
          )}
        >
          <span>&lt;</span>
          <span className="hidden sm:inline-block">OU9999</span>
          <span>/&gt;</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href={"/"}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              Home
            </p>
          </Link>
          <Link href={"/about"}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              About
            </p>
          </Link>
          <Link href={"/portfolio"}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
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
