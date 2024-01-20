import { groupHoverGradeint } from "@/components/styles";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-50 w-full h-20 flex justify-center fixed backdrop-blur-md bg-blur-black">
      <div className="w-276 h-full flex justify-between items-center ">
        <Link href={"/"}>
          <div className="flex justify-center items-center font-bold text-3xl cursor-pointer hover:group group">
            <p className="text-gradient-start">&lt;</p>
            <p className={`${groupHoverGradeint}`}>OU9999</p>
            <p className="text-gradient-end">/&gt;</p>
          </div>
        </Link>

        <div className="flex space-x-10">
          <Link href={"/about"}>
            <p className="hover:text-gray-300 transition-colors text-lg">
              about
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
