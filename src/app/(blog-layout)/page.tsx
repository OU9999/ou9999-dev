import PostBox from "@/components/mainSection/post-box";
import { getAllPosts } from "@/utils/postUtil";

const HomePage = () => {
  const posts = getAllPosts();

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
