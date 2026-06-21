import { getTranslations } from "next-intl/server";
import { ContentHeader } from "@/components/content-header/content-header";
import { PostBox } from "@/components/main-section/post-box";
import type { AppLocale } from "@/i18n/config";
import { getAllPosts } from "@/utils/post-util";

interface HomePageContentProps {
  locale: AppLocale;
}

const HomePageContent = async ({ locale }: HomePageContentProps) => {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const posts = getAllPosts(locale);

  return (
    <>
      <ContentHeader
        title={t("heroTitle")}
        text={t("heroText")}
        locale={locale}
        main
      />
      <section className="w-full bg-transparent px-6 py-16 text-google-paper">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-14 flex flex-col gap-3 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-normal leading-tight text-current md:text-[64px] md:leading-[67px]">
              {t("latestArticles")}
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
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { HomePageContent };
