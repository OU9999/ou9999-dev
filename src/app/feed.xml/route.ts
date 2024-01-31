import { myDomain } from "@/constant/domain";
import { getAllPosts } from "@/utils/postUtil";
import RSS from "rss";

export const GET = async () => {
  const posts = getAllPosts();

  const feed = new RSS({
    title: "ou9999.dev",
    description: "OU9999's blog",
    site_url: myDomain,
    feed_url: `${myDomain}/feed.xml`,
    copyright: "@ou9999",
    language: "ko",
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${myDomain}/p/${post.slugAsParams}`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
};
