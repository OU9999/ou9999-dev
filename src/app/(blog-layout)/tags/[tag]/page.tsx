import PostBox from "@/components/mainSection/PostBox";
import { getPostsFromParamsByTag } from "@/utils/postUtil";
import { allPosts } from "contentlayer/generated";

interface ITagPageProps {
  params: {
    tag: string;
  };
}

export const generateStaticParams = async () => {
  const params: ITagPageProps["params"][] = [];

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      params.push({ tag: encodeURI(tag) });
    });
  });

  return params;
};

const TagPage = async ({ params }: ITagPageProps) => {
  const posts = await getPostsFromParamsByTag(params);

  return (
    <div className="w-full flex flex-col space-y-5">
      {posts.map((post) => (
        <PostBox
          key={"post" + post._id}
          title={post.title}
          tags={post.tags}
          description={post.description}
          date={post.date}
          slug={post.slugAsParams}
        />
      ))}
    </div>
  );
};

export default TagPage;
