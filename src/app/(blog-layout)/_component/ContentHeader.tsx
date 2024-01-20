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
    <div className="shadow-sm mt-14 md:mt-20 w-full flex flex-col justify-center items-center bg-content-header-white dark:bg-content-header-black">
      <div className="w-full flex max-w-276 px-5 xl:px-0 py-10 flex-col justify-center items-center md:flex-row md:justify-start md:items-start md:space-x-10">
        <div className="w-64 h-40 md:w-96 md:h-64 relative overflow-hidden rounded-xl ">
          <Image alt="modern-js" src={img} fill />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center md:justify-start md:items-start ">
          <p className="font-bold text-md sm:text-xl md:text-3xl bg-gradient-to-r from-gradient-start to-gradient-end dark:from-white dark:to-white inline-block text-transparent bg-clip-text">
            {title}
          </p>
          {tags && (
            <div className="mt-2 flex space-x-3 text-gradient-end dark:text-gradient-start">
              <Tag tag="Essay" />
              <Tag tag="회고" />
            </div>
          )}
          <p className="mt-1 md:mt-3 text-sm md:text-xl text-slate-500 dark:text-slate-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
