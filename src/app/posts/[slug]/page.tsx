import Main from '@/layout/Main';
import Post from '@/components/post/Post';
import { config } from '@/config';
import * as Types from '@/types';
import { getAllBlogPosts } from '@/utils/data';
import { remark } from '@/utils/remark';
import { Metadata } from 'next';

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

export default async function Page({ params }: Props) {
  const slug: string = (await params).slug;
  const posts: Types.Post[] = getAllBlogPosts();
  const post = posts.find(x => x.slug === slug);
  const previousPost = post && posts.find(x => x.id < post?.id);
  const nextPost = post && posts.find(x => x.id > post?.id);
  const breadcrumbs: Types.Breadcrumb[] = [{ name: 'Home', slug: '/' }];

  if (post) {
    breadcrumbs.push({ name: post.title });
  }

  const md = post && remark(post.content);

  return (
    <Main breadcrumbs={breadcrumbs} tableOfContents={md?.headings}>
      {post && (
        <Post
          post={post}
          content={md?.markdown}
          posts={posts}
          nextPost={nextPost}
          previousPost={previousPost}
        />
      )}
    </Main>
  );
}
