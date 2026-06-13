import Link from "next/link";
import { hoverNacreTextGradient } from "../common/styles";
import { Tag } from "../common/tag-link";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";
import { ImageWithPlaceholderHeader } from "../content-header/image-with-placeholder-header";

interface PostBoxProps {
  title: string;
  tags: string[];
  description: string;
  date: string;
  thumbnail: string;
  slug: string;
}

const PostBox = ({
  title,
  tags,
  description,
  date,
  thumbnail,
  slug,
}: PostBoxProps) => {
  return (
    <article className="w-full flex flex-col">
      <Link
        href={`/p/${slug}`}
        className="relative block aspect-[16/9] w-full overflow-hidden"
      >
        <ImageWithPlaceholderHeader alt={title} img={thumbnail} />
      </Link>
      <div className="mt-7 w-full">
        <Link href={`/p/${slug}`}>
          <p
            className={cn(
              "inline cursor-pointer text-2xl font-normal leading-tight text-google-paper sm:text-[32px] sm:leading-[35px]",
              hoverNacreTextGradient
            )}
          >
            {title}
          </p>
        </Link>
      </div>
      <div className="mt-4 w-full text-sm text-google-paper md:text-base">
        <p>{formatDateToString(date)}</p>
      </div>
      <div className="mt-2 w-full text-sm text-google-paper md:text-base">
        <p>{description}</p>
      </div>
      <div className="mt-5 flex w-full flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <Tag key={"tag" + idx} tag={tag} variant="paper" />
        ))}
      </div>
    </article>
  );
};

export { PostBox };
