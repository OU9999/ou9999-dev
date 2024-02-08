import Link from "next/link";

const PopoverButton = () => {
  return (
    <div className="flex md:hidden">
      <Link href={"/popover"}>
        <button
          type="button"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
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
        </button>
      </Link>
    </div>
  );
};

export default PopoverButton;
