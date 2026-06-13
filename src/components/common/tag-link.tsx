import Link from "next/link";

interface TagProps {
  tag: string;
}
const Tag = ({ tag }: TagProps) => {
  return (
    <>
      <Link href={`/tags/${tag}`}>
        <p className="cursor-pointer rounded-full border border-slate-600 px-3 py-1 font-mono text-xs uppercase leading-none text-gradient-start transition-colors hover:border-gradient-start hover:bg-gradient-start hover:text-dark-bg">
          {tag.toUpperCase()}
        </p>
      </Link>
    </>
  );
};

export { Tag };
