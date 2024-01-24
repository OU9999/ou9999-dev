import PostBox from "@/components/mainSection/PostBox";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const HomePage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full flex flex-col space-y-5">
      {posts.map((post) => (
        <PostBox
          key={"post" + post._id}
          title={post.title}
          tags={post.tags}
          description={post.description}
          date={post.date}
          slug={post.slugAsParams}
        />
      ))}
    </div>
  );
};

export default HomePage;
