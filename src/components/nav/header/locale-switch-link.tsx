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

const LocaleSwitchLink = ({ label, locale }: LocaleSwitchLinkProps) => {
  const pathname = usePathname();
  const localeSwitchHref = getLocaleSwitchHref(locale, pathname);

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
