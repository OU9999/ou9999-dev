import Link from "next/link";

const PopoverButton = () => {
  return (
    <div className="flex md:hidden">
      <Link
        href={"/popover"}
        className="text-current opacity-80 hover:opacity-100"
        aria-label="open-pop-over"
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
