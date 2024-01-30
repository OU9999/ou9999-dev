import GiscusComment from "@/components/mainSection/GiscusComment";
import { Mdx } from "@/components/mainSection/mdx-components";
import { getPostFromParamsBySlug } from "@/utils/postUtil";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface IPostPageProps {
  params: {
    title: string;
  };
}

export const generateMetadata = async ({ params }: IPostPageProps) => {
  const post = await getPostFromParamsBySlug(params);

  if (!post) {
    return {};
  }

  const title = `${post.title} | ou.dev`;
  const thumbnail = `/openGraph/${post.thumbnail}.png`;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      images: {
        url: thumbnail,
      },
    },
  };
};

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
    <>
      <article className="w-full max-w-full prose dark:prose-invert prose-img:my-0 prose-headings:font-semibold prose-headings:my-5 prose-blockquote:not-italic prose-blockquote:font-normal">
        <Mdx code={post.body.code} />
      </article>
      <div className="w-full mt-10">
        <GiscusComment />
      </div>
    </>
  );
};

export default PostPage;
