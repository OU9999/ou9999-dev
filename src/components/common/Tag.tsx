import Link from "next/link";

interface ITagProps {
  tag: string;
}
const Tag = ({ tag }: ITagProps) => {
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
