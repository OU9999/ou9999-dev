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
