import { allPosts } from "contentlayer/generated";
import Link from "next/link";

interface TagCount {
  tag: string;
  count: number;
}

const getTagsCount = async (): Promise<TagCount[]> => {
  const tagsCount: { [key: string]: number } = {};
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagsCount[tag]) {
        tagsCount[tag] += 1;
      } else {
        tagsCount[tag] = 1;
      }
    });
  });

  const tagsCountArray: TagCount[] = Object.entries(tagsCount).map(
    ([tag, count]) => ({
      tag,
      count: Number(count),
    })
  );

  tagsCountArray.sort((a, b) => b.count - a.count);

  return tagsCountArray;
};

interface ITagItemProps {
  title: string;
  count: number;
}

const TagItem = ({ title, count }: ITagItemProps) => {
  return (
    <Link href={`/tags/${title}`}>
      <div className="w-full flex rounded-md py-1 px-3 items-center">
        <p className="cursor-pointer text-gradient-end dark:text-gradient-start hover:underline">
          {title}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          &nbsp;({count})
        </p>
      </div>
    </Link>
  );
};

const TagsBox = async () => {
  const tagsCount = await getTagsCount();

  return (
    <div className="shadow-md w-full h-auto p-3 sticky top-32 rounded-lg bg-content-header-white dark:bg-content-header-black">
      <p>Tags</p>
      <div className="mt-8 flex flex-col space-y-3">
        {tagsCount.map(({ tag, count }) => (
          <TagItem key={"TAGITEM" + tag} title={tag} count={count} />
        ))}
      </div>
    </div>
  );
};

export default TagsBox;
