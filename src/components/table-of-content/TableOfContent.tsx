import { JSX } from 'react';

export default function TableOfContent({ headings }: { headings?: JSX.Element }) {
  return (
    <section className="toc border-l border-base-content/10 pl-6 sticky top-10">
      <h3 className="text-lg font-bold mb-2">Contents</h3>
      <div className="text-sm">{headings}</div>
    </section>
  );
}
