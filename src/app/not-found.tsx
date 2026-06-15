import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center space-y-10">
      <p className="bg-mineral-lettering bg-clip-text text-9xl font-bold text-transparent">
        404
      </p>
      <Link href={"/"}>
        <button className="rounded-lg border-1 border-mineral-blue/22 bg-content-header-black px-5 py-3 font-bold text-google-paper transition-colors hover:border-mineral-blue/60 hover:text-mineral-blue">
          GO HOME
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
