import { SITE } from '@/config';
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="bg-base-100 text-base-content top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
      <nav className="navbar w-full">
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
              {SITE.TITLE}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
