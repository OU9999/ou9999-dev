import { GiscusComment } from "@/components/main-section/giscus-comment";
import { Mdx } from "@/components/main-section/mdx-components";
import {
  getAllPosts,
  getPostComponent,
  getPostFromParamsBySlug,
  type PostParams,
} from "@/utils/post-util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface IPostPageProps {
  params: Promise<PostParams>;
}

export const generateMetadata = async ({
  params,
}: IPostPageProps): Promise<Metadata> => {
  const post = getPostFromParamsBySlug(await params);

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

export const generateStaticParams = async (): Promise<PostParams[]> => {
  const posts = await getAllPosts();
  return posts.map((page) => ({
    title: page.slugAsParams,
  }));
};

const PostPage = async ({ params }: IPostPageProps) => {
  const post = getPostFromParamsBySlug(await params);

  if (!post) {
    notFound();
  }

  const MdxComponent = await getPostComponent(post.slugAsParams);

  return (
    <>
      <article className="w-full overflow-x-hidden overflow-y-hidden max-w-full prose dark:prose-invert prose-img:mb-0 prose-headings:font-semibold prose-blockquote:not-italic prose-blockquote:font-normal prose-a:text-gradient-end dark:prose-a:text-gradient-start prose-quoteless prose-blockquote:border-gradient-end dark:prose-blockquote:border-gradient-start prose-strong:text-yellow-600 dark:prose-strong:text-[rgb(249,204,117)] prose-video:mb-0">
        <Mdx Component={MdxComponent} />
      </article>
      <div className="w-full mt-10">
        <GiscusComment />
      </div>
    </>
  );
};

export default PostPage;
