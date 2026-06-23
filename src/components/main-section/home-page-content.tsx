import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { hoverMineralTextGradient } from "@/components/common/styles";
import { Tag } from "@/components/common/tag-link";
import { ContentHeader } from "@/components/content-header/content-header";
import { ImageWithPlaceholderHeader } from "@/components/content-header/image-with-placeholder-header";
import { getLocalizedPath, type AppLocale } from "@/i18n/config";
import { cn } from "@/utils/tailwind-util";
import { formatDateToString } from "@/utils/date-util";
import { getAllPosts, type Post } from "@/utils/post-util";

interface HomePageContentProps {
  locale: AppLocale;
}

interface PostCardProps {
  post: Post;
  locale: AppLocale;
}

interface MasonryPostCardProps extends PostCardProps {
  variant?: "feature" | "standard" | "wide";
}

const MasonryPostCard = ({
  post,
  locale,
  variant = "standard",
}: MasonryPostCardProps) => {
  const postHref = getLocalizedPath(locale, `/p/${post.slugAsParams}`);
  const isFeature = variant === "feature";
  const isStandard = variant === "standard";
  const isWide = variant === "wide";

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border-1 border-mineral-blue/18 bg-mineral-frame/30 shadow-[0_18px_60px_rgb(4_8_8/0.24)] transition duration-200 hover:-translate-y-1 hover:border-mineral-blue/34 hover:bg-mineral-frame/38 hover:shadow-[0_22px_72px_rgb(66_83_79/0.2)]",
        isFeature && "h-full",
        isWide && "grid sm:grid-cols-[220px_minmax(0,1fr)]"
      )}
    >
      <Link
        href={postHref}
        className={cn(
          "relative block w-full overflow-hidden bg-mineral-frame",
          isFeature && "aspect-[16/10]",
          !isFeature && !isWide && "aspect-[16/9]",
          isWide && "aspect-[16/10] sm:aspect-auto sm:min-h-[180px]"
        )}
      >
        <ImageWithPlaceholderHeader alt={post.title} img={post.thumbnail} />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mineral-soot/28 via-transparent to-mineral-bone/5" />
      </Link>
      <div
        className={cn(
          "flex flex-col p-5",
          isFeature && "min-h-[230px] p-6 md:min-h-[260px] md:p-8",
          isWide && "sm:p-6"
        )}
      >
        <time
          dateTime={post.date}
          className={cn(
            "font-mono uppercase leading-none text-google-muted",
            isFeature ? "text-sm md:text-base" : "text-xs md:text-sm"
          )}
        >
          {formatDateToString(post.date, locale)}
        </time>
        <Link href={postHref} className={cn(isFeature ? "mt-6" : "mt-4")}>
          <h3
            className={cn(
              "inline font-normal leading-tight text-google-paper",
              isFeature && "text-3xl md:text-[34px] md:leading-[38px]",
              !isFeature && "text-xl md:text-2xl md:leading-8",
              hoverMineralTextGradient
            )}
          >
            {post.title}
          </h3>
        </Link>
        <p
          className={cn(
            "mt-3 text-sm leading-6 text-google-paper/70",
            isStandard && "hidden",
            isFeature && "mt-4 max-w-[520px] text-base leading-7",
            isWide && "md:text-base md:leading-7"
          )}
        >
          {post.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {post.tags.map((tag) => (
            <Tag
              key={"masonry-tag" + post._id + tag}
              tag={tag}
              variant="paper"
              locale={locale}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const HomePageContent = async ({ locale }: HomePageContentProps) => {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const posts = getAllPosts(locale);
  const [featuredPost, ...secondaryPosts] = posts;
  const masonryPosts = secondaryPosts.slice(0, 4);
  const remainingPosts = secondaryPosts.slice(4);

  return (
    <>
      <ContentHeader
        title={t("heroTitle")}
        text={t("heroText")}
        locale={locale}
        brandBrush
        main
      />
      <section className="w-full bg-transparent px-6 pb-20 pt-8 text-google-paper md:pb-24 md:pt-10">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-7 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-normal leading-tight text-current md:text-[36px] md:leading-10">
              {t("latestArticles")}
            </h2>
            <p className="text-sm text-current md:text-base">
              {t("postCount", { count: posts.length })}
            </p>
          </div>
          {featuredPost ? (
            <div className="flex w-full flex-col gap-6">
              <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)]">
                <MasonryPostCard
                  post={featuredPost}
                  locale={locale}
                  variant="feature"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {masonryPosts.map((post) => (
                    <MasonryPostCard
                      key={"masonry-post" + post._id}
                      post={post}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 gap-6">
                  {remainingPosts.map((post) => (
                    <MasonryPostCard
                      key={"remaining-masonry-post" + post._id}
                      post={post}
                      locale={locale}
                      variant="wide"
                    />
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export { HomePageContent };
