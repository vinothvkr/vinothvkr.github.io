import FeedPostCard from '@/components/postcard/FeedPostCard';
import { getAllBlogPostsOrderedByDateDesc, Post } from '@/utils/data';

export default function Home() {
  const posts: Post[] = getAllBlogPostsOrderedByDateDesc();
  return (
    <div className="flex flex-col space-y-5">
      {posts &&
        posts.map(post => (
          <FeedPostCard
            key={post.id}
            slug={post.slug}
            category={post.category}
            date={post.dateFormatted}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
    </div>
  );
}
