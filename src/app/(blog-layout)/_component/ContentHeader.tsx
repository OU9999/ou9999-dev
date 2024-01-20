import Tag from "@/components/Tag";
import Image from "next/image";

interface IContentHeaderProps {
  title: string;
  text: string;
  img: string;
  tags?: string[];
}

const ContentHeader = ({ title, text, img, tags }: IContentHeaderProps) => {
  return (
    <div className="shadow-sm mt-20 w-full flex flex-col justify-center items-center bg-content-header-white dark:bg-content-header-black">
      <div className="w-276 py-10 flex space-x-10">
        <div className="w-96 h-64 relative overflow-hidden rounded-xl ">
          <Image alt="modern-js" src={img} fill />
        </div>
        <div className="flex flex-col ">
          <p className="font-bold text-3xl bg-gradient-to-r from-gradient-start to-gradient-end dark:from-white dark:to-white inline-block text-transparent bg-clip-text">
            {title}
          </p>
          {tags && (
            <div className="mt-2 flex space-x-3 text-gradient-end dark:text-gradient-start">
              <Tag tag="Essay" />
              <Tag tag="회고" />
            </div>
          )}
          <p className="mt-3 text-xl text-slate-500 dark:text-slate-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
