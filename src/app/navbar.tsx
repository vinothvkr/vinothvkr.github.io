import { config } from '@/config';
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import * as Types from '@/types';

type NavBarProps = {
  breadcrumbs: Types.Breadcrumb[];
};

export default function NavBar({ breadcrumbs }: NavBarProps) {
  return (
    <div className="text-base-content top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
      <nav className="navbar w-full px-6">
        <div className="flex flex-1 gap-2 md:hidden">
          <label
            htmlFor="drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button"
          >
            <IconMenu2 />
          </label>
          <div className="flex items-center gap-2">
            <Link className="text-2xl font-semibold" href="/">
              {config.title}
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-1 gap-2 ">
          <div className="breadcrumbs text-sm">
            <ul>
              {breadcrumbs &&
                breadcrumbs.map(item => (
                  <li key={item.name}>
                    {(item.slug && <Link href={item.slug}>{item.name}</Link>) || item.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
