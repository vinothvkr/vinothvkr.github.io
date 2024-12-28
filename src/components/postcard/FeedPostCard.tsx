/* eslint-disable @next/next/no-img-element */
import { IconCalendar, IconFolder } from '@tabler/icons-react';
import Link from 'next/link';
import PostCard from './PostCard';
import { truncatedWithDots } from '@/utils/text-utils';

type Post = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  image: string;
};

export default function FeedPostCard({ slug, category, date, title, excerpt, image }: Post) {
  return (
    <article>
      <Link href={`/posts/${slug}`}>
        <PostCard className="md:card-side md:flex-row-reverse">
          <figure className="md:w-2/5 md:rounded-tl-[unset] md:rounded-tr-[inherit] md:rounded-bl-[unset] md:rounded-br-[inherit]">
            <img alt={title} src={image} />
          </figure>
          <div className="card-body md:w-3/5">
            <h2 className="card-title font-normal">{truncatedWithDots(title, 45)}</h2>
            <div className="mt-0 text-sm text-base-content/80">
              {excerpt && truncatedWithDots(excerpt, 128)}
            </div>
            <div className="card-actions justify-start space-x-4 text-sm text-base-content/80">
              <div className="flex space-x-1">
                <IconCalendar size={18} />
                <time>{date}</time>
              </div>
              <div className="flex space-x-1">
                <IconFolder size={18} />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </PostCard>
      </Link>
    </article>
  );
}
