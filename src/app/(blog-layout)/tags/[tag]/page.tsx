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

export default TagPage;
