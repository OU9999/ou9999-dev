import { Mdx } from "@/components/mainSection/mdx-components";
import { getPostFromParamsBySlug } from "@/utils/postUtil";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface IPostPageProps {
  params: {
    title: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((page) => ({
    title: page.slugAsParams,
  }));
};

const PostPage = async ({ params }: IPostPageProps) => {
  const post = await getPostFromParamsBySlug(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-full prose dark:prose-invert  prose-img:my-0 prose-headings:font-semibold prose-headings:my-5">
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostPage;
