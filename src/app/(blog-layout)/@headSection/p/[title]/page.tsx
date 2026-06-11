import ContentHeader from "@/components/headSection/content-header";
import { getPostFromParamsBySlug, type PostParams } from "@/utils/postUtil";

interface IPostHeadSectionProps {
  params: Promise<PostParams>;
}

const PostHeadSection = async ({ params }: IPostHeadSectionProps) => {
  const post = getPostFromParamsBySlug(await params);

  if (!post) {
    return null;
  }

  return (
    <ContentHeader
      title={post.title}
      text={post.description}
      img={post.thumbnail}
      tags={post.tags}
      date={post.date}
    />
  );
};

export default PostHeadSection;
