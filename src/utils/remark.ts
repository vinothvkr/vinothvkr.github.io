import { JSX } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSanitize from 'rehype-sanitize';
import { VFile } from 'vfile';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { toc } from 'mdast-util-toc';
import { toHast } from 'mdast-util-to-hast';
import { RootContent } from 'mdast';

export function remark(content: string): {
  markdown: JSX.Element;
  headings?: JSX.Element;
} {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'append' });
  const file = new VFile(content);
  const mdastTree = processor.parse(file);
  const hastTree = processor.runSync(mdastTree, file);
  const markdown = toJsxRuntime(hastTree, {
    Fragment,
    ignoreInvalidStyle: true,
    jsx,
    jsxs,
    passKeys: true,
    passNode: true,
  });

  const headings = toc(mdastTree, { tight: true });

  return {
    markdown,
    headings:
      headings.map?.children.length &&
      toJsxRuntime(toHast({ type: 'root', children: [headings.map as RootContent] }), {
        Fragment,
        ignoreInvalidStyle: true,
        jsx,
        jsxs,
        passKeys: true,
        passNode: true,
      }),
  };
}
