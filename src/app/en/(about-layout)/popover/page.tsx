import { MobilePopover } from "@/components/nav/mobile-popover";
import { createPageMetadata, siteTitle } from "@/constant/meta-data";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `MENU | ${siteTitle}`,
  locale: "en",
  pathname: "/popover",
});

const MobilePopoverPage = () => {
  return <MobilePopover locale="en" />;
};

export default MobilePopoverPage;
