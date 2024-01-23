import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center flex-col space-y-10">
      <p className="font-bold text-9xl">404</p>
      <Link href={"/"}>
        <button className="px-5 py-3 font-bold rounded-lg bg-content-header-white dark:bg-content-header-black">
          GO HOME
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
