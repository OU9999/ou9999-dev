import "server-only";

import { compareDesc } from "date-fns";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { MDXContent, MDXModule } from "mdx/types";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const mdxExtension = /\.mdx$/;

interface Post {
  _id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string;
  published: boolean;
  slug: string;
  slugAsParams: string;
}

interface PostFrontmatter {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  tags?: unknown;
  thumbnail?: unknown;
  published?: unknown;
}

interface PostParams {
  title: string;
}

interface TagParams {
  tag: string;
}

interface TagCount {
  tag: string;
  count: number;
}

const readPostFilePaths = (dir = postsDirectory): string[] => {
  const entries = readdirSync(dir, { withFileTypes: true });

  return entries
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return readPostFilePaths(entryPath);
      }

      if (entry.isFile() && mdxExtension.test(entry.name)) {
        return entryPath;
      }

      return [];
    })
    .sort();
};

const getSlugFromFilePath = (filePath: string) => {
  return path
    .relative(postsDirectory, filePath)
    .replace(mdxExtension, "")
    .split(path.sep)
    .join("/");
};

const readRequiredString = (
  frontmatter: PostFrontmatter,
  key: keyof PostFrontmatter,
  filePath: string
) => {
  const value = frontmatter[key];

  if (typeof value !== "string") {
    throw new Error(`${filePath} frontmatter '${key}' must be a string.`);
  }

  return value;
};

const readRequiredBoolean = (
  frontmatter: PostFrontmatter,
  key: keyof PostFrontmatter,
  filePath: string
) => {
  const value = frontmatter[key];

  if (typeof value !== "boolean") {
    throw new Error(`${filePath} frontmatter '${key}' must be a boolean.`);
  }

  return value;
};

const readRequiredDate = (frontmatter: PostFrontmatter, filePath: string) => {
  const value = frontmatter.date;

  if (typeof value === "string") {
    return value;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  throw new Error(`${filePath} frontmatter 'date' must be a date string.`);
};

const readRequiredTags = (frontmatter: PostFrontmatter, filePath: string) => {
  const value = frontmatter.tags;

  if (
    !Array.isArray(value) ||
    value.some((tag) => typeof tag !== "string")
  ) {
    throw new Error(`${filePath} frontmatter 'tags' must be a string list.`);
  }

  return value as string[];
};

const readPost = (filePath: string): Post => {
  const source = readFileSync(filePath, "utf8");
  const { data } = matter(source);
  const frontmatter = data as PostFrontmatter;
  const slugAsParams = getSlugFromFilePath(filePath);

  return {
    _id: `posts/${slugAsParams}.mdx`,
    title: readRequiredString(frontmatter, "title", filePath),
    description: readRequiredString(frontmatter, "description", filePath),
    date: readRequiredDate(frontmatter, filePath),
    tags: readRequiredTags(frontmatter, filePath),
    thumbnail: readRequiredString(frontmatter, "thumbnail", filePath),
    published: readRequiredBoolean(frontmatter, "published", filePath),
    slug: `/posts/${slugAsParams}`,
    slugAsParams,
  };
};

const getPosts = () => readPostFilePaths().map(readPost);

const getAllPosts = (): Post[] => {
  return getPosts()
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};

const getPostFromParamsBySlug = (params: PostParams): Post | undefined => {
  const slug = params.title;

  return getAllPosts().find((post) => post.slugAsParams === slug);
};

const getPostComponent = async (
  slugAsParams: string
): Promise<MDXContent> => {
  const postModule = (await import(
    `../../content/posts/${slugAsParams}.mdx`
  )) as MDXModule;

  return postModule.default;
};

const getPostsFromParamsByTag = (params: TagParams): Post[] => {
  const slug = decodeURI(params.tag);

  return getAllPosts().filter((post) => post.tags.includes(slug));
};

const getTagsFromPosts = async (): Promise<TagCount[]> => {
  const tagsCount: { [key: string]: number } = {};

  getAllPosts().forEach((post) => {
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

export {
  getAllPosts,
  getPostComponent,
  getPostFromParamsBySlug,
  getPostsFromParamsByTag,
  getTagsFromPosts,
};
export type { Post, PostParams, TagCount, TagParams };
