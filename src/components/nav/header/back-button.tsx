"use client";

import { XIcon } from "@/components/svg/x-icon";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  label: string;
}

const BackButton = ({ label }: BackButtonProps) => {
  const router = useRouter();

  const handleBackClick = (): void => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label={label}
      className="fixed right-10 top-10 h-10 w-10 fill-google-paper/88 transition-colors hover:fill-white"
      onClick={handleBackClick}
    >
      <XIcon />
    </button>
  );
};

export { BackButton };
