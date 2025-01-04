export default function PostCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card border border-base-content/10 dark:bg-base-200 shadow hover:bg-base-200 dark:hover:bg-base-100 ${className}`}
    >
      {children}
    </div>
  );
}
