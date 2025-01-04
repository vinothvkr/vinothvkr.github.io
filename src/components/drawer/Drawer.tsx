import SideDrawer from '@/app/SideDrawer';
import { config } from '@/config';

export default function Drawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="drawer md:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content dark:bg-zinc-900">
        <div className="container mx-auto px-4">{children}</div>
      </div>
      <SideDrawer config={config} />
    </div>
  );
}
