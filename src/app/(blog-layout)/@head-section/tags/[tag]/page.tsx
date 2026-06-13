import { ContentHeader } from "@/components/head-section/content-header";
import type { TagParams } from "@/utils/post-util";

interface ITagHeadSectionProps {
  params: Promise<TagParams>;
}

const TagsHeadSection = async ({ params }: ITagHeadSectionProps) => {
  const { tag } = await params;

  return (
    <ContentHeader
      title={`TAG : ${decodeURIComponent(tag).toUpperCase()}`}
      text=""
      img="ovo3"
      main
    />
  );
};

export default TagsHeadSection;
