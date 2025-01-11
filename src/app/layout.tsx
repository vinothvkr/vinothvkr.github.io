import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/ThemeContext';
import { config } from '@/config';
import Drawer from '@/layout/Drawer';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400',
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} font-roboto flex min-h-full antialiased`}>
        <ThemeProvider>
          <Drawer>{children}</Drawer>
        </ThemeProvider>
      </body>
    </html>
  );
}
