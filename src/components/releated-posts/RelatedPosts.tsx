import { Post } from '@/utils/data';
import PostCard from '../postcard/PostCard';
import { truncatedWithDots } from '@/utils/text-utils';
import Link from 'next/link';

type RelatedPostsProps = {
  post: Post;
  posts: Post[];
};

export default function RelatedPosts({ post, posts }: RelatedPostsProps) {
  const currentTags = post.tags;
  const relatedPosts = posts.filter(x => x !== post);

  relatedPosts.forEach(post => {
    post.relevance = 0;
    post.tags.forEach(tag => {
      if (currentTags?.includes(tag)) {
        post.relevance++;
      }
    });
  });

  const sortedPosts = relatedPosts
    .sort((a, b) => {
      return b.relevance - a.relevance;
    })
    .slice(0, 3);

  return (
    <div className="mt-5 mb-16">
      <h3 className="font-bold mb-6">Further Reading</h3>
      <div className="grid grid-cols-3 gap-4 auto-cols-max">
        {sortedPosts &&
          sortedPosts.map(post => (
            <article key={post.id}>
              <Link href={post.slug}>
                <PostCard>
                  <div className="card-body p-5 h-44">
                    <time className="text-sm text-base-content/80">{post.dateFormatted}</time>
                    <h4>{truncatedWithDots(post.title, 50)}</h4>
                    <div className="mt-0 text-sm text-base-content/80">
                      {post.excerpt && truncatedWithDots(post.excerpt, 65)}
                    </div>
                  </div>
                </PostCard>
              </Link>
            </article>
          ))}
      </div>
    </div>
  );
}
