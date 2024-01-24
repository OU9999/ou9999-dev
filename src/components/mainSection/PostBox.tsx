import Link from "next/link";
import { hoverGradient } from "../common/styles";
import Tag from "../common/Tag";
import { formatDateToString } from "@/utils/dateUtil";

interface IPostBoxProps {
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
}

const PostBox = ({ title, tags, description, date, slug }: IPostBoxProps) => {
  return (
    <>
      <div className="w-full flex flex-col p-5 border-b-1 border-slate-300 dark:border-slate-700">
        <div className="w-full">
          <Link href={`/p/${slug}`}>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer inline-block ${hoverGradient}`}
            >
              {title}
            </p>
          </Link>
        </div>
        <div className="w-full mt-2 flex space-x-3">
          {tags.map((tag, idx) => (
            <Tag key={"tag" + idx} tag={tag} />
          ))}
        </div>
        <div className="w-full mt-5 text-sm sm:text-md md:text-lg">
          <p>{description}</p>
        </div>
        <div className="w-full mt-10 sm:mt-12 md:mt-14 text-xs sm:text-sm md:text-md text-slate-500 dark:text-slate-400">
          <p>{formatDateToString(date)}</p>
        </div>
      </div>
    </>
  );
};

export default PostBox;
