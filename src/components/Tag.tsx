import Link from "next/link";

interface ITagProps {
  tag: string;
}
const Tag = ({ tag }: ITagProps) => {
  return (
    <>
      <Link href={`/tags/${tag}`}>
        <p className="cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
          {tag}
        </p>
      </Link>
    </>
  );
};

export default Tag;
