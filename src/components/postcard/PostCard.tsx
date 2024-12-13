/* eslint-disable @next/next/no-img-element */
import { IconCalendar, IconFolder } from '@tabler/icons-react';
import Link from 'next/link';

type Post = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  image: string;
};

export default function BlogPostCard({ slug, category, date, title, excerpt, image }: Post) {
  const truncated_excerpt =
    excerpt && excerpt.length > 128 ? `${excerpt?.slice(0, 128)}...` : excerpt;
  return (
    <article>
      <Link href={`/posts/${slug}`}>
        <div className="card md:card-side bg-base-300 md:flex-row-reverse">
          <figure className="md:w-1/3 md:rounded-tl-[unset] md:rounded-tr-[inherit] md:rounded-bl-[unset] md:rounded-br-[inherit]">
            <img alt={title} src={image} />
          </figure>
          <div className="card-body md:w-2/3">
            <h2 className="card-title font-normal">{title}</h2>
            <p className="mt-0 text-sm text-gray-500">{truncated_excerpt}</p>
            <div className="card-actions justify-start space-x-4 text-sm text-gray-500">
              <div className="flex space-x-1">
                <IconCalendar size={16} />
                <time>{date}</time>
              </div>
              <div className="flex space-x-1">
                <IconFolder size={16} />
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
