import { config } from '@/config';

export default function Footer() {
  return (
    <footer className="footer footer-center text-base-content p-4 mt-8 border-t border-base-content/10 text-base-content/90">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} {config.title} - Some rights reserved.
        </p>
      </aside>
    </footer>
  );
}
