import PostCard from '../post-card/PostCard';
import Link from 'next/link';
import * as Types from '@/types';

type RelatedPostsProps = {
  post: Types.Post;
  posts: Types.Post[];
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
      <div className="grid gap-4 lg:grid-cols-3 lg:auto-cols-max">
        {sortedPosts &&
          sortedPosts.map(post => (
            <article key={post.id}>
              <Link href={post.slug}>
                <PostCard>
                  <div className="card-body p-5 h-44">
                    <time className="text-sm text-base-content/80">{post.dateFormatted}</time>
                    <h4 className="line-clamp-2">{post.title}</h4>
                    <div className="mt-0 text-sm text-base-content/80 line-clamp-2">
                      {post.excerpt}
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
