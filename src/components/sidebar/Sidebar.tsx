import RecentPosts from '@/components/recent-posts/RecentPosts';

export default function Sidebar({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <aside className="hidden xl:block top-20 my-6 xl:mx-2 xl:my-0 ">
      <RecentPosts />
      {children}
    </aside>
  );
}
