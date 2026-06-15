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
      className="fixed right-10 top-10 h-10 w-10 fill-google-paper transition-colors hover:fill-mineral-blue"
      onClick={handleBackClick}
    >
      <XIcon />
    </button>
  );
};

export { BackButton };
