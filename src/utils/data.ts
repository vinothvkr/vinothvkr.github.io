import os from 'node:os';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { Post } from '@/types';

const dir = path.join(process.cwd(), '_posts');

export const getAllBlogPosts = (): Post[] => {
  const allFiles = fs.readdirSync(dir);
  const allBlogs = allFiles.map(file => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content, excerpt } = matter(fileContent, {
      excerpt: true,
    });
    const post: Post = {
      id: data.id,
      slug: data.slug,
      published: data.published,
      title: data.title,
      date: data.date,
      dateFormatted: format(data.date, 'dd MMM yyyy'),
      image: data.image,
      category: data.category,
      tags: data.tags,
      excerpt: excerpt,
      content: getContentWithoutExcerpt(content, excerpt),
      relevance: 0,
    };
    return post;
  });

  return allBlogs.filter(x => x.published === true);
};

export const getAllBlogPostsOrderedByDateDesc = (): Post[] => {
  return getAllBlogPosts().sort((a, b) => (a.date > b.date ? -1 : 1));
};

const getContentWithoutExcerpt = (content: string, excerpt?: string): string => {
  if (excerpt) {
    const excerptString = excerpt + '---';
    if (content.startsWith(excerptString + os.EOL)) {
      // with an os-specific newline after excerpt separator
      content = content.slice((excerptString + os.EOL).length);
    } else if (content.startsWith(excerptString + '\n')) {
      // with a newline (\n) after excerpt separator
      // This is necessary for some git configurations on windows
      content = content.slice((excerptString + 1).length);
    } else if (content.startsWith(excerptString)) {
      // no newline after excerpt separator
      content = content.slice(excerptString.length);
    }
  }
  return content;
};
