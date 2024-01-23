import { getPostFromParamsByTag } from "@/utils/postUtil";
import { allPosts } from "contentlayer/generated";

interface ITagPageProps {
  params: {
    tag: string;
  };
}

export const generateStaticParams = async () => {
  const params: any = [];

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      params.push({ tag: encodeURI(tag) });
    });
  });

  return params;
};

const TagPage = async ({ params }: ITagPageProps) => {
  const posts = await getPostFromParamsByTag(params);

  return (
    <div className="flex flex-col w-full">
      <p>this is slug {decodeURI(params.tag)}</p>
      {posts.map((post) => (
        <p key={"TAG" + post.title}>{post.title}</p>
      ))}
    </div>
  );
};

export default TagPage;
