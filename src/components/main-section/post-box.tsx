import Link from "next/link";
import { hoverGradient } from "../common/styles";
import { Tag } from "../common/tag-link";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";

interface PostBoxProps {
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
}

const PostBox = ({ title, tags, description, date, slug }: PostBoxProps) => {
  return (
    <article className="w-full flex flex-col p-5 border-b-1 border-slate-700">
      <div className="w-full">
        <Link href={`/p/${slug}`}>
          <p
            className={cn(
              "text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer inline-block",
              hoverGradient
            )}
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
      <div className="w-full mt-5 text-sm sm:text-base md:text-lg text-slate-400">
        <p>{description}</p>
      </div>
      <div className="w-full mt-10 sm:mt-12 md:mt-14 text-xs sm:text-sm md:text-base text-slate-400">
        <p>{formatDateToString(date)}</p>
      </div>
    </article>
  );
};

export { PostBox };
