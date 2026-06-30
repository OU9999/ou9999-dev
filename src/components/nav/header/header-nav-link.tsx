"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/tailwind-util";
import {
  headerNavActiveBrushUnderlineClassName,
  headerNavActiveTextClassName,
  headerNavBrushUnderlineClassName,
  headerNavLinkClassName,
  headerNavTextClassName,
} from "./header-nav-styles";

interface HeaderNavLinkProps {
  href: string;
  label: string;
}

const HeaderNavLink = ({ href, label }: HeaderNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={headerNavLinkClassName}
    >
      <span
        className={cn(
          headerNavTextClassName,
          isActive && headerNavActiveTextClassName
        )}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          headerNavBrushUnderlineClassName,
          isActive && headerNavActiveBrushUnderlineClassName
        )}
      />
    </Link>
  );
};

export { HeaderNavLink };
