import { Tag } from "@/components/common/tag-link";
import { formatDateToString } from "@/utils/date-util";
import { cn } from "@/utils/tailwind-util";
import {
  ContentHeaderMotionImage,
  ContentHeaderMotionItem,
  ContentHeaderMotionRoot,
  ContentHeaderMotionText,
  ContentHeaderMotionTitle,
} from "./content-header-motion";
import { ImageWithPlaceholderHeader } from "./image-with-placeholder-header";

interface ContentHeaderProps {
  title: string;
  text: string;
  img?: string;
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
    <ContentHeaderMotionRoot
      className={cn(
        "w-full bg-content-header-black px-6",
        main
          ? "pb-8 pt-32 md:pb-8 md:pt-32"
          : "pb-16 pt-24 md:pb-24 md:pt-[126px]"
      )}
    >
      <div className="mx-auto w-full max-w-[1632px]">
        <ContentHeaderMotionText className="w-full">
          {date && (
            <ContentHeaderMotionItem className="font-mono text-xs uppercase leading-none tracking-normal text-slate-400 md:text-base">
              <time dateTime={date}>{formatDateToString(date)}</time>
            </ContentHeaderMotionItem>
          )}
          <ContentHeaderMotionTitle
            className={cn(
              "w-full text-5xl font-normal leading-none text-slate-50 sm:text-6xl md:text-7xl lg:text-[90px] lg:leading-[0.95]",
              date ? "mt-10 md:mt-[51px]" : "mt-0"
            )}
          >
            {title}
          </ContentHeaderMotionTitle>
          <ContentHeaderMotionItem
            className={cn(
              "mt-10 flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between",
              !main && "md:mt-16"
            )}
          >
            <div className="max-w-2xl text-base text-slate-300 md:text-lg">
              <p>{main ? text : "OU9999"}</p>
            </div>
            {tags && (
              <div className="flex flex-wrap gap-2 md:justify-end">
                {tags.map((tag) => (
                  <Tag key={"ITEM" + tag} tag={tag} />
                ))}
              </div>
            )}
          </ContentHeaderMotionItem>
        </ContentHeaderMotionText>

        {img && (
          <ContentHeaderMotionImage
            className={cn(
              "relative mt-10 aspect-[16/9] w-full overflow-hidden md:mt-12",
              main && "bg-gradient-to-t from-gray-100 via-gray-300 to-gray-400"
            )}
          >
            <ImageWithPlaceholderHeader alt={title} img={img} />
          </ContentHeaderMotionImage>
        )}

        {text && !main && (
          <ContentHeaderMotionItem className="mx-auto mt-14 max-w-[684px] text-2xl leading-snug text-slate-200 md:mt-20 md:text-3xl">
            <p>{text}</p>
          </ContentHeaderMotionItem>
        )}
      </div>
    </ContentHeaderMotionRoot>
  );
};

export { ContentHeader };
