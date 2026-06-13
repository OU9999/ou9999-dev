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
      text="같은 맥락으로 묶인 글"
      main
    />
  );
};

export default TagsHeadSection;
