import { MobilePopover } from "@/components/nav/mobile-popover";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MENU | ou9999.dev",
};

const MobilePopoverPage = () => {
  return <MobilePopover locale="en" />;
};

export default MobilePopoverPage;
