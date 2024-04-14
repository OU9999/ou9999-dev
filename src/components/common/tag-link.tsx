import Link from "next/link";

interface TagProps {
  tag: string;
}
const Tag = ({ tag }: TagProps) => {
  return (
    <>
      <Link href={`/tags/${tag}`}>
        <p className="text-xs md:text-sm cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
          {tag.toUpperCase()}
        </p>
      </Link>
    </>
  );
};

export default Tag;
