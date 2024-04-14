import ContentHeader from "@/components/headSection/content-header";

interface ITagHeadSectionProps {
  params: {
    tag: string;
  };
}

const TagsHeadSection = async ({ params }: ITagHeadSectionProps) => {
  return (
    <ContentHeader
      title={`TAG : ${decodeURIComponent(params.tag).toUpperCase()}`}
      text=""
      img="ovo3"
      main
    />
  );
};

export default TagsHeadSection;
