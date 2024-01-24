import Link from "next/link";

interface ITagProps {
  tag: string;
}
const Tag = ({ tag }: ITagProps) => {
  return (
    <>
      <Link href={`/tags/${tag}`}>
        <p className="text-xs sm:text-sm md:text-md cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
          {tag.toUpperCase()}
        </p>
      </Link>
    </>
  );
};

export default Tag;
