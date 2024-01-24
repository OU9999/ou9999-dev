import ContentHeader from "@/components/headSection/ContentHeader";

interface ITagHeadSectionProps {
  params: {
    tag: string;
  };
}

const TagsHeadSection = async ({ params }: ITagHeadSectionProps) => {
  return (
    <ContentHeader
      title={`TAG : ${decodeURI(params.tag).toUpperCase()}`}
      text=""
      img="modern-js.webp"
    />
  );
};

export default TagsHeadSection;
