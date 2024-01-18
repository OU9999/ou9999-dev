import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>not found</p>
      <Link href={"/"}>
        <p>GO HOME</p>
      </Link>
    </div>
  );
};

export default NotFound;
