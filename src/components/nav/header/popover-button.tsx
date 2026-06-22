import Link from "next/link";
import {
  defaultLocale,
  getLocalizedPath,
  type AppLocale,
} from "@/i18n/config";

interface PopoverButtonProps {
  label: string;
  locale?: AppLocale;
}

const PopoverButton = ({
  label,
  locale = defaultLocale,
}: PopoverButtonProps) => {
  return (
    <div className="flex md:hidden">
      <Link
        href={getLocalizedPath(locale, "/popover")}
        className="text-current opacity-80 hover:opacity-100"
        aria-label={label}
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
      </Link>
    </div>
  );
};

export { PopoverButton };
