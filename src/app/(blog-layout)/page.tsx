import { ContentHeader } from "@/components/content-header/content-header";
import { PostBox } from "@/components/main-section/post-box";
import { getAllPosts } from "@/utils/post-util";

const HomePage = () => {
  const posts = getAllPosts();

  return (
    <>
      <ContentHeader
        title="Insights"
        text="노력과 고민을 담아 기록한 글"
        main
      />
      <section className="w-full px-6 py-16">
        <div className="mb-14 flex flex-col gap-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-normal leading-tight text-slate-50 md:text-6xl">
            Latest Articles
          </h2>
          <p className="text-sm text-slate-400 md:text-base">
            {posts.length} posts
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostBox
              key={"post" + post._id}
              title={post.title}
              tags={post.tags}
              description={post.description}
              date={post.date}
              thumbnail={post.thumbnail}
              slug={post.slugAsParams}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
