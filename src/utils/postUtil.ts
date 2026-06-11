import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getAllPosts = (): Post[] => {
  const filterPosts = allPosts.filter((post) => post.published);
  const posts = filterPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return posts;
};

export interface PostParams {
  title: string;
}

export const getPostFromParamsBySlug = (params: PostParams) => {
  const slug = params.title;
  const filterPosts = allPosts.filter((post) => post.published);
  const post = filterPosts.find((post) => post.slugAsParams === slug);

  return post;
};

export interface TagParams {
  tag: string;
}

export const getPostsFromParamsByTag = (params: TagParams) => {
  const slug = decodeURI(params.tag);
  const filterPosts = allPosts.filter((post) => post.published);
  const includeSlugPosts = filterPosts.filter((post) =>
    post.tags.includes(slug)
  );

  const posts = includeSlugPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return posts;
};

export interface TagCount {
  tag: string;
  count: number;
}

export const getTagsFromPosts = async (): Promise<TagCount[]> => {
  const tagsCount: { [key: string]: number } = {};
  const filterPosts = allPosts.filter((post) => post.published);

  filterPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagsCount[tag]) {
        tagsCount[tag] += 1;
      } else {
        tagsCount[tag] = 1;
      }
    });
  });

  const tagsCountArray: TagCount[] = Object.entries(tagsCount).map(
    ([tag, count]) => ({
      tag,
      count: Number(count),
    })
  );

  tagsCountArray.sort((a, b) => {
    if (b.count === a.count) {
      return a.tag.localeCompare(b.tag);
    }
    return b.count - a.count;
  });

  return tagsCountArray;
};
