import GiscusComment from "@/components/mainSection/GiscusComment";
import { Mdx } from "@/components/mainSection/mdx-components";
import { getAllPosts, getPostFromParamsBySlug } from "@/utils/postUtil";
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

  const title = `${post.title} | ou9999.dev`;
  const thumbnail = `/imgs/openGraph/${post.thumbnail}.png`;

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
  const posts = await getAllPosts();
  return posts.map((page) => ({
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
      <article className="w-full max-w-full overflow-x-hidden prose dark:prose-invert prose-img:mb-0 prose-headings:font-semibold prose-blockquote:not-italic prose-blockquote:font-normal prose-a:text-gradient-end dark:prose-a:text-gradient-start prose-quoteless prose-blockquote:border-gradient-end dark:prose-blockquote:border-gradient-start prose-strong:text-yellow-600 dark:prose-strong:text-[rgb(249,204,117)] prose-video:mb-0">
        <Mdx code={post.body.code} />
      </article>
      <div className="w-full mt-10">
        <GiscusComment />
      </div>
    </>
  );
};

export default PostPage;
