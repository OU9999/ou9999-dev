import ContentHeader from "@/components/headSection/ContentHeader";
import { getPostFromParamsBySlug } from "@/utils/postUtil";

interface IPostHeadSectionProps {
  params: {
    title: string;
  };
}

const PostHeadSection = async ({ params }: IPostHeadSectionProps) => {
  const post = await getPostFromParamsBySlug(params);

  return (
    <ContentHeader
      title={post?.title!}
      text={post?.description!}
      img={post?.thumbnail!}
      tags={post?.tags!}
      date={post?.date!}
    />
  );
};

export default PostHeadSection;
