import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Sidebar from './sidebar';
import NavBar from './navbar';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Vinoth Kumar Rajendran',
  description: 'Personal website of Vinoth Kumar Rajendran',
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
          <main className="drawer-content">
            <NavBar />
            <div className="max-w-[100vw] px-6 pb-16 xl:pr-2">
              <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
                <div className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow">
                  {children}
                </div>
                <div className="hidden xl:flex">
                  <aside className="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32"></aside>
                </div>
              </div>
            </div>
          </main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
