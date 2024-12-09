/* eslint-disable @next/next/no-img-element */
import { getAllBlogPosts } from '@/utils/data';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getAllBlogPosts().find(x => x.slug === params.slug);

  return {
    title: `${post?.title} | Vinoth Kumar Rajendran`,
    description: post?.excerpt?.trim(),
    keywords: post?.tags.toString(),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getAllBlogPosts().find(x => x.slug === params.slug);

  return (
    <>
      {post && (
        <article>
          <header>
            <h1>{post.title}</h1>
            <div>
              Posted <time>{post.dateFormatted}</time>
              <div className="my-3">
                <img src={post.image} alt={post.title} />
              </div>
              <div>By Vinoth</div>
            </div>
          </header>
          <div>
            <MDXRemote source={post?.content} />
          </div>
        </article>
      )}
    </>
  );
}
