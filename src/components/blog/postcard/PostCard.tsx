import { IconCalendar, IconFolder } from '@tabler/icons-react';
import Image from 'next/image';
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
      <article className="card bg-base-300 card-side">
        <div className="card-body">
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
        <figure className="w-80 h-48">
          <Image alt={title} src={image} width={100} height={100} />
        </figure>
      </article>
    </Link>
  );
}
