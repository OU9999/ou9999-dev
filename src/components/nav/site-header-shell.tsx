"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hoverMineralTextGradient, mineralTextGradient } from "../common/styles";
import { cn } from "@/utils/tailwind-util";
import { LocaleSwitchLink } from "./header/locale-switch-link";
import { PopoverButton } from "./header/popover-button";
import type { AppLocale } from "@/i18n/config";

interface HeaderShellProps {
  homeHref: string;
  aboutHref: string;
  homeLabel: string;
  aboutLabel: string;
  menuLabel: string;
  localeSwitchLabel: string;
  locale: AppLocale;
}

const isAboutPath = (pathname: string) => {
  return pathname === "/about" || pathname === "/en/about";
};

const HeaderShell = ({
  homeHref,
  aboutHref,
  homeLabel,
  aboutLabel,
  menuLabel,
  localeSwitchLabel,
  locale,
}: HeaderShellProps) => {
  const pathname = usePathname();
  const aboutVariant = isAboutPath(pathname);

  if (aboutVariant) {
    return (
      <header className="absolute left-0 top-0 z-40 flex h-20 w-full items-center bg-transparent px-6 text-google-paper md:h-[124px] md:px-[52px]">
        <nav className="flex h-full w-full items-center justify-between">
          <Link
            href={homeHref}
            lang="en"
            className="text-2xl font-normal leading-none tracking-[0.08em] text-google-paper md:text-[28px]"
          >
            OU9999
          </Link>

          <div className="mr-5 hidden items-center gap-14 md:flex">
            <Link href={homeHref}>
              <p className="text-base font-normal text-google-paper/68 transition-colors hover:text-google-paper">
                {homeLabel}
              </p>
            </Link>
            <Link href={aboutHref} aria-current="page">
              <p className="relative text-base font-normal text-google-paper">
                {aboutLabel}
                <span className="pointer-events-none absolute left-1/2 top-[30px] h-1.5 w-14 -translate-x-1/2 rounded-full bg-mineral-blue/60 blur-[0.2px]" />
                <span className="pointer-events-none absolute left-1/2 top-[31px] h-px w-11 -translate-x-1/2 bg-google-paper/75" />
              </p>
            </Link>
            <span className="h-5 w-px bg-google-paper/36" aria-hidden="true" />
            <LocaleSwitchLink
              label={localeSwitchLabel}
              locale={locale}
              className="text-base font-normal uppercase text-google-paper/72 transition-colors hover:text-google-paper"
            />
          </div>
          <PopoverButton label={menuLabel} locale={locale} />
        </nav>
      </header>
    );
  }

  return (
    <header className="relative z-40 flex h-14 w-full items-center border-b-1 border-mineral-blue/10 bg-google-ink/92 px-6 text-google-paper backdrop-blur-md md:h-[100px]">
      <nav className="mx-auto flex h-full w-full max-w-[1632px] items-center justify-between">
        <Link
          href={homeHref}
          lang="en"
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
          <Link href={homeHref}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              {homeLabel}
            </p>
          </Link>
          <Link href={aboutHref}>
            <p
              className={cn(
                "text-lg font-semibold text-google-paper",
                hoverMineralTextGradient
              )}
            >
              {aboutLabel}
            </p>
          </Link>
          <LocaleSwitchLink label={localeSwitchLabel} locale={locale} />
        </div>
        <PopoverButton label={menuLabel} locale={locale} />
      </nav>
    </header>
  );
};

export { HeaderShell };
