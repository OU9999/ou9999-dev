import Link from "next/link";

const Header = () => {
  return (
    <header className="z-50 w-full h-20 flex justify-center fixed backdrop-blur-md bg-blur-black">
      <div className="w-276 h-full flex justify-between items-center ">
        <div className="flex justify-center items-center font-bold text-3xl">
          <p className="text-gradient-start">&lt;</p>
          <p className="">OU9999</p>
          <p className="text-gradient-end">/&gt;</p>
        </div>

        <div className="flex space-x-10">
          <Link href={"/"}>
            <p className="">home</p>
          </Link>
          <Link href={"/p/1"}>
            <p className="">p</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
