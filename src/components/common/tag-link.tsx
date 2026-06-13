import Link from "next/link";
import { cn } from "@/utils/tailwind-util";

interface TagProps {
  tag: string;
  variant?: "ink" | "paper";
}

const Tag = ({ tag, variant = "paper" }: TagProps) => {
  return (
    <>
      <Link href={`/tags/${tag}`}>
        <p
          className={cn(
            "cursor-pointer rounded-full border px-3 py-1.5 font-mono text-base uppercase leading-none transition-colors",
            variant === "ink" &&
              "border-google-ink/40 text-google-ink hover:bg-google-ink hover:text-google-paper",
            variant === "paper" &&
              "border-white/40 text-google-paper hover:border-google-yellow hover:bg-google-paper hover:text-google-ink"
          )}
        >
          {tag.toUpperCase()}
        </p>
      </Link>
    </>
  );
};

export { Tag };
