import { myDomain } from "@/constant/domain";
import { getAllPosts, getTagsFromPosts } from "@/utils/postUtil";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = getAllPosts();
  const tags = await getTagsFromPosts();

  return [
    {
      url: myDomain,
      lastModified: new Date(),
    },
    {
      url: `${myDomain}/about`,
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
        url: `${myDomain}/tags/${tag.tag}`,
      };
    }),
  ];
};

export default sitemap;
