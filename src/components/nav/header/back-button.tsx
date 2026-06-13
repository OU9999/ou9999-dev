"use client";

import { XIcon } from "@/components/svg/x-icon";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBackClick = (): void => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label="뒤로 가기"
      className="fixed top-10 right-10 w-10 h-10 fill-black dark:fill-white"
      onClick={handleBackClick}
    >
      <XIcon />
    </button>
  );
};

export { BackButton };
