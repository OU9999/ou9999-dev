"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@/components/svg/x-icon";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";

interface PopoverButtonProps {
  aboutLabel: string;
  aboutHref: string;
  closeLabel: string;
  homeHref: string;
  homeLabel: string;
  locale: AppLocale;
  localeSwitchLabel: string;
  menuLabel: string;
  openLabel: string;
  tagLabel: string;
  tags: MobileMenuTag[];
}

interface MobileMenuTag {
  tag: string;
  count: number;
}

interface MobileMenuLinkProps {
  href: string;
  lang?: string;
  onClick: () => void;
  text: string;
}

interface TagItemProps {
  count: number;
  locale: AppLocale;
  onClick: () => void;
  title: string;
}

const mobileMenuPanelId = "mobile-menu-panel";
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

const MobileMenuLink = ({
  href,
  lang,
  onClick,
  text,
}: MobileMenuLinkProps) => {
  return (
    <Link
      href={href}
      lang={lang}
      className="font-brand text-[32px] font-normal leading-none text-google-paper/86 transition-colors hover:text-white"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

const TagItem = ({ count, locale, onClick, title }: TagItemProps) => {
  return (
    <Link
      href={getLocalizedPath(locale, "/tags/" + encodeURIComponent(title))}
      className="group inline-flex items-baseline gap-2 px-2 py-1 font-brand leading-none text-google-paper/58 transition-colors hover:text-white"
      onClick={onClick}
    >
      <span className="text-lg uppercase">{title}</span>
      <span className="text-sm text-google-paper/42 transition-colors group-hover:text-white/72">
        ({count})
      </span>
    </Link>
  );
};

const PopoverButton = ({
  aboutLabel,
  aboutHref,
  closeLabel,
  homeHref,
  homeLabel,
  locale,
  localeSwitchLabel,
  menuLabel,
  openLabel,
  tagLabel,
  tags,
}: PopoverButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const targetLocale = locale === defaultLocale ? "en" : defaultLocale;
  const localeSwitchHref = getLocaleSwitchHref(locale, pathname);

  const handleOpenClick = (): void => {
    setIsOpen(true);
  };

  const handleCloseClick = (): void => {
    setIsOpen(false);
  };

  /**
   * Keep the mobile menu modal by locking the page behind it and allowing Escape to close it while open.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const rootElement = document.documentElement;
    const hadOverflowHidden =
      rootElement.classList.contains("overflow-hidden");

    rootElement.classList.add("overflow-hidden");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (!hadOverflowHidden) {
        rootElement.classList.remove("overflow-hidden");
      }
    };
  }, [isOpen]);

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        aria-controls={mobileMenuPanelId}
        aria-expanded={isOpen}
        aria-label={openLabel}
        className="inline-flex h-11 w-11 items-center justify-center text-google-paper/88 transition-colors hover:text-white"
        onClick={handleOpenClick}
      >
        <svg width="24" height="24">
          <path
            d="M5 6h14M5 12h14M5 18h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen &&
        createPortal(
          <div
            id={mobileMenuPanelId}
            role="dialog"
            aria-modal="true"
            aria-label={menuLabel}
            className="fixed inset-0 z-50 overflow-y-auto bg-google-ink px-6 pb-10 pt-4 text-google-paper shadow-[0_0_80px_rgb(0_0_0/0.48)]"
          >
            <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[480px] flex-col">
              <div className="flex h-[58px] items-center justify-between">
                <Link
                  href={homeHref}
                  aria-label="OU9999 home"
                  className="flex h-10 w-[72px] items-center justify-center overflow-hidden"
                  onClick={handleCloseClick}
                >
                  <span
                    aria-hidden="true"
                    className="block h-full w-full bg-[url('/imgs/header/ou-symbol-negative-space-v1.webp')] bg-[length:116%_auto] bg-center bg-no-repeat grayscale brightness-110"
                  />
                </Link>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label={closeLabel}
                  className="inline-flex h-11 w-11 items-center justify-center fill-google-paper/88 transition-colors hover:fill-white"
                  onClick={handleCloseClick}
                >
                  <XIcon />
                </button>
              </div>

              <nav
                aria-label={menuLabel}
                className="mt-12 flex flex-col items-center"
              >
                <p className="font-brand text-[44px] font-semibold leading-none text-google-paper">
                  {menuLabel}
                </p>
                <div className="mt-7 flex flex-col items-center gap-5">
                  <MobileMenuLink
                    href={homeHref}
                    text={homeLabel}
                    onClick={handleCloseClick}
                  />
                  <MobileMenuLink
                    href={aboutHref}
                    text={aboutLabel}
                    onClick={handleCloseClick}
                  />
                  <MobileMenuLink
                    href={localeSwitchHref}
                    lang={targetLocale}
                    text={localeSwitchLabel}
                    onClick={handleCloseClick}
                  />
                </div>
              </nav>

              <section
                aria-labelledby="mobile-menu-tags-heading"
                className="mt-14 flex flex-col items-center"
              >
                <p
                  id="mobile-menu-tags-heading"
                  className="font-brand text-[44px] font-semibold leading-none text-google-paper"
                >
                  {tagLabel}
                </p>
                <div className="mt-7 flex flex-col items-center gap-4">
                  {tags.map((tag) => (
                    <TagItem
                      key={"MOBILEMENUTAG" + tag.tag}
                      title={tag.tag}
                      count={tag.count}
                      locale={locale}
                      onClick={handleCloseClick}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export { PopoverButton };
