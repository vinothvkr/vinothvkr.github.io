import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Sidebar from './sidebar';
import NavBar from './navbar';
import RecentPosts from '@/components/recent-posts/RecentPosts';
import { SITE } from '@/config';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400',
});

export const metadata: Metadata = {
  title: SITE.TITLE,
  description: SITE.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${roboto.variable} font-roboto flex min-h-full antialiased`}>
        <div className="bg-base-100 drawer md:drawer-open">
          <input id="drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="container mx-auto px-4">
              <NavBar />
              <div className="max-w-[100vw] px-6 xl:pr-2">
                <div className="flex gap-6 xl:flex-row">
                  <main className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow 2xl:pr-16">
                    {children}
                    <footer className="footer footer-center text-base-content p-4 mt-8 border-gray-700 border-t">
                      <aside>
                        <p>
                          Copyright © {new Date().getFullYear()} {SITE.TITLE} - Some rights
                          reserved.
                        </p>
                      </aside>
                    </footer>
                  </main>
                  <aside className="sticky hidden xl:block top-20 my-6 xl:mx-2 xl:my-0 ">
                    <RecentPosts />
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
