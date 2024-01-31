import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getAllPosts = (): Post[] => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return posts;
};

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

export const getPostsFromParamsByTag = async (params: TagProps["params"]) => {
  const slug = decodeURI(params.tag);
  const post = allPosts.filter((post) => post.tags.includes(slug));

  if (!post) {
    null;
  }

  const posts = post.sort((a, b) =>
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

  tagsCountArray.sort((a, b) => {
    if (b.count === a.count) {
      return a.tag.localeCompare(b.tag);
    }
    return b.count - a.count;
  });

  return tagsCountArray;
};
