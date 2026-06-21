import { ContentHeader } from "@/components/content-header/content-header";
import { PostBox } from "@/components/main-section/post-box";
import {
  getAllPosts,
  getPostsFromParamsByTag,
  type TagParams,
} from "@/utils/post-util";
import { defaultLocale } from "@/i18n/config";
import { getTranslations } from "next-intl/server";
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

  getAllPosts(defaultLocale).forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
};

const TagPage = async ({ params }: ITagPageProps) => {
  const resolvedParams = await params;
  const posts = getPostsFromParamsByTag(resolvedParams, defaultLocale);
  const tag = decodeURIComponent(resolvedParams.tag).toUpperCase();
  const t = await getTranslations({ locale: defaultLocale, namespace: "TagPage" });

  return (
    <>
      <ContentHeader
        title={t("headerTitle", { tag })}
        text={t("headerText")}
        locale={defaultLocale}
        main
      />
      <section className="w-full bg-transparent px-6 py-16 text-google-paper">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-14 flex flex-col gap-3 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-normal leading-tight text-current md:text-[64px] md:leading-[67px]">
              {t("heading")}
            </h2>
            <p className="text-sm text-current md:text-base">
              {t("postCount", { count: posts.length })}
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
                locale={defaultLocale}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TagPage;
