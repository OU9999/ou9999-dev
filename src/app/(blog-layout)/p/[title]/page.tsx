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
      <article className="w-full overflow-x-hidden bg-transparent px-6 text-google-paper">
        <div className="mx-auto w-full max-w-[976px]">
          <ContentHeader
            title={post.title}
            text={post.description}
            img={post.thumbnail}
            tags={post.tags}
            date={post.date}
          />
          <div className="mx-auto w-full max-w-[624px] pb-20 pt-20 prose prose-google prose-img:mb-0 prose-p:mx-0 prose-p:my-0 prose-p:mt-7 prose-p:max-w-none prose-p:text-[15px] prose-p:font-normal prose-p:leading-6 prose-p:text-google-paper prose-headings:mx-0 prose-headings:max-w-none prose-headings:font-normal prose-headings:text-google-paper prose-h2:mb-0 prose-h2:mt-20 prose-h2:text-2xl prose-h2:leading-[32px] prose-h3:mb-0 prose-h3:mt-16 prose-h3:text-2xl prose-h3:leading-[32px] prose-ul:mx-0 prose-ul:max-w-none prose-ol:mx-0 prose-ol:max-w-none prose-blockquote:mx-0 prose-blockquote:max-w-none prose-blockquote:border-l-0 prose-blockquote:pl-0 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-google-paper prose-a:bg-mineral-lettering prose-a:bg-clip-text prose-a:text-transparent prose-quoteless prose-strong:text-google-paper prose-video:mb-0 md:pb-28 md:prose-p:text-[17px] md:prose-p:leading-[27px]">
            <Mdx Component={MdxComponent} />
          </div>
        </div>
      </article>
      <div className="w-full bg-transparent px-6">
        <div className="mx-auto w-full max-w-[976px]">
          <div className="mx-auto w-full max-w-[624px]">
            <GiscusComment />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
