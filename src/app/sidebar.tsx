/* eslint-disable @next/next/no-img-element */
'use client';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="drawer-side">
      <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <aside className="bg-base-300 min-h-screen w-64">
        <div className="avatar mt-14 mb-5 mx-6 pl-5">
          <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
            <img
              alt="Vinoth Kumar Rajendran"
              src="https://avatars.githubusercontent.com/u/9390245?s=400&u=f24e22f6fea5e9b71f048e303b4d9c49c871d483&v=4"
            />
          </div>
        </div>
        <div className="mx-10 space-y-4">
          <h1 className="text-2xl font-semibold">Vinoth Kumar Rajendran</h1>
          <p className="italic">Software Engineer | Homelab</p>
        </div>
        <ul className="menu mx-4 mt-5">
          <li>
            <Link className={pathname == '/' ? 'active' : ''} href="/">
              <IconHome />
              Home
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
