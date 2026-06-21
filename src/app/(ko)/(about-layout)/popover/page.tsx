import { MobilePopover } from "@/components/nav/mobile-popover";
import { defaultLocale } from "@/i18n/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENU | ou9999.dev",
};

const MobilePopoverPage = () => {
  return <MobilePopover locale={defaultLocale} />;
};

export default MobilePopoverPage;
