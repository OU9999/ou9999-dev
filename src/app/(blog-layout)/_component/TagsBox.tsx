import Link from "next/link";

interface ITagItemProps {
  title: string;
  count: number;
}

const TagItem = ({ title, count }: ITagItemProps) => {
  return (
    <Link href={`/tags/${title}`}>
      <div className="w-full flex rounded-md py-1 px-3 items-center">
        <p className="cursor-pointer hover:underline">{title}</p>
        <p className="text-gray-400  text-xs">&nbsp;({count})</p>
      </div>
    </Link>
  );
};

const TagsBox = () => {
  return (
    <div className="w-full h-auto p-3 sticky top-32 rounded-lg bg-content-header">
      <p>Tags</p>
      <div className="mt-10 flex flex-col space-y-3">
        <TagItem title="ALL" count={42} />
        <TagItem title="JavaScript" count={10} />
      </div>
    </div>
  );
};

export default TagsBox;
