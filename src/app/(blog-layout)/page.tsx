import Tag from "@/components/common/Tag";
import { hoverGradient } from "@/components/common/styles";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

interface IPostBoxProps {
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
}

const PostBox = ({ title, tags, description, date, slug }: IPostBoxProps) => {
  return (
    <>
      <div className="w-full flex flex-col p-5 border-b-1 border-slate-300 dark:border-slate-700">
        <div className="w-full">
          <Link href={`/p/${slug}`}>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer ${hoverGradient}`}
            >
              {title}
            </p>
          </Link>
        </div>
        <div className="w-full mt-2 flex space-x-3">
          {tags.map((tag, idx) => (
            <Tag key={"tag" + idx} tag={tag} />
          ))}
        </div>
        <div className="w-full mt-5 text-sm sm:text-md md:text-lg">
          <p>{description}</p>
        </div>
        <div className="w-full mt-10 sm:mt-12 md:mt-14 text-xs sm:text-sm md:text-md text-slate-500 dark:text-slate-400">
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full flex flex-col space-y-5">
      {posts.map((post) => (
        <PostBox
          key={"post" + post._id}
          title={post.title}
          tags={post.tags}
          description={post.description}
          date={post.date}
          slug={post.slugAsParams}
        />
      ))}
    </div>
  );
};

export default HomePage;
