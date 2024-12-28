/* eslint-disable @next/next/no-img-element */
import Comments from '@/components/comment/Comments';
import { config } from '@/config';
import { getAllBlogPosts } from '@/utils/data';
import { IconFolder, IconTags } from '@tabler/icons-react';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

type NavLinkEmptyProps = {
  type: string;
};

type NavLinkProps = {
  slug: string;
  title: string;
  type: string;
};

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
    title: `${post?.title} | ${config.title}`,
    description: post?.excerpt?.trim(),
    keywords: post?.tags.toString(),
  };
}

function NavLink({ type, title, slug }: NavLinkProps) {
  return (
    <Link href={slug} className="join-item border flex-col py-5 px-2 hover:bg-primary">
      <div className="uppercase text-xs">{type}</div>
      <div>{title}</div>
    </Link>
  );
}

function NavLinkEmpty({ type }: NavLinkEmptyProps) {
  return (
    <button className="join-item border flex-col py-5 cursor-not-allowed">
      <div className="uppercase">{type}</div>
      <div>-</div>
    </button>
  );
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const post = getAllBlogPosts().find(x => x.slug === slug);
  const previousPost = post && getAllBlogPosts().find(x => x.id < post?.id);
  const nextPost = post && getAllBlogPosts().find(x => x.id > post?.id);

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
          <div className="post-tail mt-10 text-gray-500 text-sm border-b">
            <div className="flex space-x-1 mb-4">
              <IconFolder size={18} />
              <span>{post.category}</span>
            </div>
            <div className="flex space-x-1">
              <IconTags size={18} />
              {post.tags &&
                post.tags.map(tag => (
                  <span className="badge" key={tag}>
                    {tag}
                  </span>
                ))}
            </div>
            <div className="mt-10 mb-5">
              <span>
                This post is licensed under{' '}
                <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link> by the
                author
              </span>
            </div>
          </div>
          <div className="join grid grid-cols-2 my-10 text-center">
            {(previousPost && (
              <NavLink type="Previous" title={previousPost.title} slug={previousPost.slug} />
            )) || <NavLinkEmpty type="Previous" />}
            {(nextPost && <NavLink type="Next" title={nextPost.title} slug={nextPost.slug} />) || (
              <NavLinkEmpty type="Next" />
            )}
          </div>
          <Comments config={config.comments} />
        </article>
      )}
    </>
  );
}
