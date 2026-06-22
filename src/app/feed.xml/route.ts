import { myDomain } from "@/constant/domain";
import { getLocalizedPath } from "@/i18n/config";
import { getAllPosts } from "@/utils/post-util";
import RSS from "rss";

export const dynamic = "force-static";

export const GET = async (): Promise<Response> => {
  const posts = [...getAllPosts(), ...getAllPosts("en")].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const feed = new RSS({
    title: "ou9999.dev",
    description: "OU9999's blog",
    site_url: myDomain,
    feed_url: `${myDomain}/feed.xml`,
    copyright: "@ou9999",
    language: "ko",
    pubDate: new Date(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${myDomain}${getLocalizedPath(
        post.locale,
        `/p/${post.slugAsParams}`
      )}`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
