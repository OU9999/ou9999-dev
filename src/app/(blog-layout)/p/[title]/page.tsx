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
      <article className="mx-auto w-full max-w-[684px] px-6 py-20 prose prose-invert prose-img:mb-0 prose-headings:font-normal prose-h2:text-5xl prose-h2:leading-tight prose-blockquote:not-italic prose-blockquote:font-normal prose-a:text-gradient-start prose-quoteless prose-blockquote:border-gradient-start prose-strong:text-[rgb(249,204,117)] prose-video:mb-0 md:px-0 md:py-28">
        <Mdx Component={MdxComponent} />
      </article>
      <div className="mx-auto w-full max-w-[684px] px-6 md:px-0">
        <GiscusComment />
      </div>
    </>
  );
};

export default PostPage;
