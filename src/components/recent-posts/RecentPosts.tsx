import { getAllBlogPostsOrderedByDateDesc, Post } from '@/utils/data';
import Link from 'next/link';

export default function RecentPosts() {
  const posts: Post[] = getAllBlogPostsOrderedByDateDesc().slice(0, 5);
  return (
    <section className="border-gray-700 border-l pl-6">
      <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
      <ul className="list-none">
        {posts &&
          posts.map(post => (
            <li className="my-2" key={post.id}>
              <Link href={post.slug} className="hover:link-primary link-hover text-sm truncate">
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
