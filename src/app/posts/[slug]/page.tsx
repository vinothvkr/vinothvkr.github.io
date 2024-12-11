/* eslint-disable @next/next/no-img-element */
import { getAllBlogPosts } from '@/utils/data';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getAllBlogPosts().find(x => x.slug === slug);

  return {
    title: `${post?.title} | Vinoth Kumar Rajendran`,
    description: post?.excerpt?.trim(),
    keywords: post?.tags.toString(),
  };
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const post = getAllBlogPosts().find(x => x.slug === slug);

  return (
    <>
      {post && (
        <article>
          <header>
            <h1 className="text-3xl mt-8 mb-6">{post.title}</h1>
            <div className="text-sm">
              <span className="text-gray-500">Posted </span>
              <time>{post.dateFormatted}</time>
              <div className="my-3">
                <img src={post.image} alt={post.title} />
              </div>
              <div>
                <span className="text-gray-500">By </span> Vinoth
              </div>
            </div>
          </header>
          <div className="content mt-8">
            <MDXRemote source={post?.content} />
          </div>
          <div className="post-tail mt-10"></div>
        </article>
      )}
    </>
  );
}
