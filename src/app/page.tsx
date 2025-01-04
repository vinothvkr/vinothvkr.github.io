import FeedPostCard from '@/components/feed-post-card/FeedPostCard';
import { getAllBlogPostsOrderedByDateDesc } from '@/utils/data';
import * as Types from '@/types';
import Main from '@/components/main/Main';

export default function Home() {
  const posts: Types.Post[] = getAllBlogPostsOrderedByDateDesc();
  return (
    <Main breadcrumbs={[{ name: 'Home' }]}>
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
    </Main>
  );
}
