import { getAllBlogPostsOrderedByDateDesc } from '@/utils/data';
import * as Types from '@/types';
import Link from 'next/link';

export default function RecentPosts() {
  const posts: Types.Post[] = getAllBlogPostsOrderedByDateDesc().slice(0, 5);
  return (
    <section className="border-l border-base-content/10 pl-6 mb-10">
      <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
      <ul className="list-none">
        {posts &&
          posts.map(post => (
            <li className="my-2" key={post.id}>
              <Link
                href={`/posts/${post.slug}`}
                className="hover:link-accent link-hover text-sm truncate"
              >
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
