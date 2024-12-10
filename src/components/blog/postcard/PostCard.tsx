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
  return (
    <Link href={`/posts/${slug}`}>
      <article className="card lg:card-side bg-base-300 lg:flex-row-reverse">
        <figure className="lg:w-1/3 lg:rounded-tl-[unset] lg:rounded-tr-[inherit] lg:rounded-bl-[unset] lg:rounded-br-[inherit]">
          <img alt={title} src={image} />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
          <div className="card-actions justify-start space-x-4">
            <div className="flex space-x-1">
              <IconCalendar />
              <time>{date}</time>
            </div>
            <div className="flex space-x-1">
              <IconFolder />
              <span>{category}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
