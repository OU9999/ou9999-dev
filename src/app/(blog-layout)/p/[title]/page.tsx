import { ContentHeader } from "@/components/content-header/content-header";
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
      <article className="w-full overflow-x-hidden bg-google-ink text-google-paper">
        <ContentHeader
          title={post.title}
          text={post.description}
          img={post.thumbnail}
          tags={post.tags}
          date={post.date}
        />
        <div className="mx-auto w-full max-w-[684px] px-6 pb-20 pt-28 prose prose-google prose-img:mb-0 prose-p:my-6 prose-p:text-xl prose-p:font-normal prose-p:leading-7 prose-p:text-google-paper prose-headings:font-normal prose-headings:text-google-paper prose-h2:mb-10 prose-h2:mt-20 prose-h2:text-5xl prose-h2:leading-tight prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-google-paper prose-a:text-google-blue prose-quoteless prose-blockquote:border-google-blue prose-strong:text-google-paper prose-video:mb-0 md:px-0 md:pb-28 md:pt-[327px] md:prose-h2:text-[64px] md:prose-h2:leading-[67px] 2xl:max-w-[804px] 2xl:pt-[361px]">
          <Mdx Component={MdxComponent} />
        </div>
      </article>
      <div className="w-full bg-google-ink">
        <div className="mx-auto w-full max-w-[684px] px-6 md:px-0 2xl:max-w-[804px]">
          <GiscusComment />
        </div>
      </div>
    </>
  );
};

export default PostPage;
