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
        <div className="w-96 h-64 relative overflow-hidden rounded-xl">
          <Image alt="modern-js" src={img} fill />
        </div>
        <div className="flex flex-col ">
          <p className="font-bold text-3xl">{title}</p>
          {tags && <div className="flex"></div>}
          <p className="mt-3 text-xl text-slate-500 dark:text-slate-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
