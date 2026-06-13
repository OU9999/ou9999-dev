import { PostBox } from "@/components/main-section/post-box";
import {
  getAllPosts,
  getPostsFromParamsByTag,
  type TagParams,
} from "@/utils/post-util";
import type { Metadata } from "next";

interface ITagPageProps {
  params: Promise<TagParams>;
}

export const generateMetadata = async ({
  params,
}: ITagPageProps): Promise<Metadata> => {
  const slug = decodeURI((await params).tag);
  const title = `${slug.toUpperCase()} | ou9999.dev`;

  return {
    title,
  };
};

export const generateStaticParams = async (): Promise<TagParams[]> => {
  const tags = new Set<string>();

  getAllPosts().forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
};

const TagPage = async ({ params }: ITagPageProps) => {
  const posts = getPostsFromParamsByTag(await params);

  return (
    <section className="w-full px-6 py-16">
      <div className="mb-14 flex flex-col gap-3 md:mb-20 md:flex-row md:items-end md:justify-between">
        <h2 className="text-4xl font-normal leading-tight text-slate-50 md:text-6xl">
          Tagged Articles
        </h2>
        <p className="text-sm text-slate-400 md:text-base">
          {posts.length} posts
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostBox
            key={"post" + post._id}
            title={post.title}
            tags={post.tags}
            description={post.description}
            date={post.date}
            thumbnail={post.thumbnail}
            slug={post.slugAsParams}
          />
        ))}
      </div>
    </section>
  );
};

export default TagPage;
