import { Tag } from "@/components/common/tag-link";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";
import { ImageWithPlaceholderHeader } from "./image-with-placeholder-header";

interface ContentHeaderProps {
  title: string;
  text: string;
  img: string;
  tags?: string[];
  date?: string;
  main?: boolean;
}

const ContentHeader = ({
  title,
  text,
  img,
  tags,
  date,
  main,
}: ContentHeaderProps) => {
  return (
    <div className="shadow-sm mt-14 md:mt-20 w-full flex flex-col justify-center items-center bg-content-header-black">
      <div className="w-full flex max-w-276 px-5 xl:px-0 py-10 flex-col justify-center items-center md:flex-row md:justify-start md:items-start md:space-x-10">
        <div
          className={cn(
            "w-64 h-40 md:w-96 md:h-64 relative overflow-hidden rounded-xl flex-shrink-0 flex-grow-0",
            main && "bg-gradient-to-t from-gray-100 via-gray-300 to-gray-400"
          )}
        >
          <ImageWithPlaceholderHeader img={img} />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center md:justify-start md:items-start ">
          <p className="font-bold text-base sm:text-xl md:text-3xl bg-gradient-to-r from-white to-white inline-block text-transparent bg-clip-text">
            {title}
          </p>
          {tags && (
            <div className="mt-2 flex space-x-2 md:space-x-3 text-gradient-start">
              {tags.map((tag) => (
                <Tag key={"ITEM" + tag} tag={tag} />
              ))}
            </div>
          )}

          {text && (
            <p className="mt-1 md:mt-3 text-sm md:text-xl text-slate-400">{text}</p>
          )}
          {date && (
            <p className="mt-5 md:mt-24 text-xs md:text-base text-slate-400">
              {formatDateToString(date)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ContentHeader };
