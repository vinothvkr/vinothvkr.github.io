import { JSX } from 'react';
import * as Types from '@/types';
import NavBar from '@/app/navbar';
import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Main({
  children,
  breadcrumbs,
  tableOfContents,
}: Readonly<{
  children: React.ReactNode;
  breadcrumbs: Types.Breadcrumb[];
  tableOfContents?: JSX.Element;
}>) {
  return (
    <>
      <NavBar breadcrumbs={breadcrumbs} />
      <div className="max-w-[100vw] px-6 xl:pr-2">
        <div className="flex gap-1 xl:flex-row">
          <main className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow 2xl:pr-6">
            {children}
            <Footer />
          </main>
          <Sidebar>{tableOfContents}</Sidebar>
        </div>
      </div>
    </>
  );
}
