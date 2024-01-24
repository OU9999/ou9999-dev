import { allPosts } from "contentlayer/generated";

interface PostProps {
  params: {
    title: string;
  };
}

export const getPostFromParamsBySlug = async (params: PostProps["params"]) => {
  const slug = params.title;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
};

interface TagProps {
  params: {
    tag: string;
  };
}

export const getPostFromParamsByTag = async (params: TagProps["params"]) => {
  const slug = decodeURI(params.tag);
  const post = allPosts.filter((post) => post.tags.includes(slug));

  if (!post) {
    null;
  }

  return post;
};

export interface TagCount {
  tag: string;
  count: number;
}

export const getTagsCount = async (): Promise<TagCount[]> => {
  const tagsCount: { [key: string]: number } = {};
  allPosts.forEach((post) => {
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

  tagsCountArray.sort((a, b) => b.count - a.count);

  return tagsCountArray;
};
