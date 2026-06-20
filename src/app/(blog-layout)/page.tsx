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
      <section className="w-full bg-transparent px-6 py-16 text-google-paper">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-14 flex flex-col gap-3 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-normal leading-tight text-current md:text-[64px] md:leading-[67px]">
              Latest Articles
            </h2>
            <p className="text-sm text-current md:text-base">
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
