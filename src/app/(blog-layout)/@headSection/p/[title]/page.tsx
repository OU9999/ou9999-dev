import ContentHeader from "@/components/headSection/ContentHeader";

const PostHeadSection = () => {
  return (
    <ContentHeader
      title="[23년 회고] 완벽하지 않았기에 소중했던 순간들"
      text="노력과 고민을 담아서"
      img="/modern-react.PNG"
      tags={["Essay", "회고"]}
    />
  );
};

export default PostHeadSection;
