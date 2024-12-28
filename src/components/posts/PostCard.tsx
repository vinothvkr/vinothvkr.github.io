import Link from 'next/link';

type NavLinkProps = {
  slug: string;
  title: string;
  type: string;
};

export default function NavLink({ type, title, slug }: NavLinkProps) {
  return (
    <Link href={slug} className="join-item border flex-col py-5">
      <div className="uppercase">{type}</div>
      <div>{title}</div>
    </Link>
  );
}
