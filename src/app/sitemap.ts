import { myDomain } from "@/constant/domain";
import { getAllPosts, getTagsFromPosts } from "@/utils/post-util";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = getAllPosts();
  const tags = await getTagsFromPosts();
  const englishPosts = getAllPosts("en");
  const englishTags = await getTagsFromPosts("en");

  return [
    {
      url: myDomain,
      lastModified: new Date(),
    },
    {
      url: `${myDomain}/about`,
      lastModified: new Date(),
    },
    {
      url: `${myDomain}/en`,
      lastModified: new Date(),
    },
    {
      url: `${myDomain}/en/about`,
      lastModified: new Date(),
    },
    ...posts.map((post) => {
      return {
        url: `${myDomain}/p/${post.slugAsParams}`,
        lastModified: new Date(post.date),
      };
    }),
    ...tags.map((tag) => {
      return {
        url: `${myDomain}/tags/${encodeURIComponent(tag.tag)}`,
      };
    }),
    ...englishPosts.map((post) => {
      return {
        url: `${myDomain}/en/p/${post.slugAsParams}`,
        lastModified: new Date(post.date),
      };
    }),
    ...englishTags.map((tag) => {
      return {
        url: `${myDomain}/en/tags/${encodeURIComponent(tag.tag)}`,
      };
    }),
  ];
};

export default sitemap;
