"use client";

import XIcon from "@/components/svg/XIcon";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      className="fixed top-10 right-10 w-10 h-10 fill-black dark:fill-white"
      onClick={() => router.back()}
    >
      <XIcon />
    </div>
  );
};

export default BackButton;
