/* eslint-disable @next/next/no-img-element */
'use client';
import ThemeSwitch from '@/components/theme-switch/ThemeSwitch';
import { Config } from '@/types';
import { IconBrandGithub, IconBrandX, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarProps = {
  config: Config;
};

export default function Sidebar({ config }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="drawer-side z-40">
      <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <aside className="bg-base-200 min-h-screen w-64 flex flex-col">
        <div className="avatar mt-14 mb-5 mx-6 pl-5">
          <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
            <img
              alt={config.title}
              src="https://avatars.githubusercontent.com/u/9390245?s=400&u=f24e22f6fea5e9b71f048e303b4d9c49c871d483&v=4"
            />
          </div>
        </div>
        <div className="mx-10 space-y-4">
          <h1 className="text-2xl font-semibold">{config.title}</h1>
          <p className="italic">{config.about_me}</p>
        </div>
        <ul className="menu mx-4 mt-5 grow">
          <li>
            <Link className={pathname == '/' ? 'active' : ''} href="/">
              <IconHome />
              Home
            </Link>
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 items-center w-100 mx-10 mb-10">
          <ThemeSwitch />
          <Link className="link" href={config.social.github} target="_blank">
            <IconBrandGithub />
          </Link>
          <Link href={config.social.twitter} target="_blank">
            <IconBrandX />
          </Link>
        </div>
      </aside>
    </div>
  );
}
