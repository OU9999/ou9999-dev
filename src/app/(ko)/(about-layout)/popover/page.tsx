import { MobilePopover } from "@/components/nav/mobile-popover";
import { createPageMetadata, siteTitle } from "@/constant/meta-data";
import { defaultLocale } from "@/i18n/config";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `MENU | ${siteTitle}`,
  locale: defaultLocale,
  pathname: "/popover",
});

const MobilePopoverPage = () => {
  return <MobilePopover locale={defaultLocale} />;
};

export default MobilePopoverPage;
