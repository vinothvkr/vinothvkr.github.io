import BlogPostCard from '@/components/blog/postcard/PostCard';
import { getAllBlogPosts } from '@/utils/data';

export default function Home() {
  const posts = getAllBlogPosts();
  return (
    <div className="flex flex-col space-y-5">
      {posts &&
        posts.map(post => (
          <BlogPostCard
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
