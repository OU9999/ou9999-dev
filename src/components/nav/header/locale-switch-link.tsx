"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hoverMineralTextGradient } from "@/components/common/styles";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";
import { cn } from "@/utils/tailwind-util";

interface LocaleSwitchLinkProps {
  label: string;
  locale: AppLocale;
  variant?: "text" | "stamp";
}

const translatablePaths = new Set(["/", "/about", "/popover"]);

const getPathWithoutLocale = (pathname: string): string => {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
};

const canPreservePath = (pathname: string): boolean => {
  return (
    translatablePaths.has(pathname) ||
    pathname.startsWith("/p/") ||
    pathname.startsWith("/tags/")
  );
};

const getLocaleSwitchHref = (
  locale: AppLocale,
  pathname: string
): string => {
  const targetLocale = locale === defaultLocale ? "en" : defaultLocale;
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  if (!canPreservePath(pathWithoutLocale)) {
    return getLocalizedPath(targetLocale, "/");
  }

  return getLocalizedPath(targetLocale, pathWithoutLocale);
};

const LocaleSwitchLink = ({
  label,
  locale,
  variant = "text",
}: LocaleSwitchLinkProps) => {
  const pathname = usePathname();
  const localeSwitchHref = getLocaleSwitchHref(locale, pathname);

  if (variant === "stamp") {
    return (
      <Link
        href={localeSwitchHref}
        lang="en"
        className="group relative isolate flex min-h-10 min-w-[62px] items-center justify-center px-4 py-1 font-brand text-xl font-normal uppercase leading-none text-mineral-soot transition-opacity hover:opacity-90"
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full overflow-visible"
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 62 40"
        >
          <image
            href="/imgs/header/header-locale-stamp-reference.svg"
            height="40"
            preserveAspectRatio="none"
            width="62"
          />
        </svg>
        <span className="relative z-10">{label}</span>
      </Link>
    );
  }

  return (
    <Link
      href={localeSwitchHref}
      lang="en"
      className={cn(
        "text-lg font-semibold uppercase text-google-paper",
        hoverMineralTextGradient
      )}
    >
      {label}
    </Link>
  );
};

export { LocaleSwitchLink };
