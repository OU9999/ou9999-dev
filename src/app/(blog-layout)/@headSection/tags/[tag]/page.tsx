import ContentHeader from "@/components/headSection/content-header";
import type { TagParams } from "@/utils/postUtil";

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
