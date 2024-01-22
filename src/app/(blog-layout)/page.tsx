import Tag from "@/components/common/Tag";
import { hoverGradient } from "@/components/common/styles";
import Link from "next/link";

const PostBox = () => {
  return (
    <>
      <div className="w-full flex flex-col p-5 border-b-1 border-slate-300 dark:border-slate-700">
        <div className="w-full">
          <Link href={"/p/완벽하지-않았기에-소중했던-순간들"}>
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer ${hoverGradient}`}
            >
              [23년 회고] 완벽하지 않았기에 소중했던 순간들
            </p>
          </Link>
        </div>
        <div className="w-full mt-2 flex space-x-3">
          <Tag tag="Essay" />
          <Tag tag="회고" />
        </div>
        <div className="w-full mt-5 text-sm sm:text-md md:text-lg">
          <p>23년은 나의 인생에 큰 변화의 바람을 불어넣었다.</p>
        </div>
        <div className="w-full mt-10 sm:mt-12 md:mt-14 text-xs sm:text-sm md:text-md text-slate-500 dark:text-slate-400">
          <p>2023년 7월 16일</p>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
    </div>
  );
};

export default HomePage;
