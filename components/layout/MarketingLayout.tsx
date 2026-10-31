import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-site">
      <Navbar />
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <Link href="/" className="footer-brand" aria-label="YourScore home">
            <Image src="/images/brand/logo.png" alt="YourScore by Admissions Gateway" width={120} height={115} />
          </Link>
          <p>Personalised test prep for applicants who want a plan with purpose. YourScore is a programme of Admissions Gateway.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/approach">How it works</Link>
          <Link href="/mentor">Mentor</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/results">Results</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <span className="footer-copy">© {new Date().getFullYear()} YourScore</span>
      </footer>
    </div>
  );
}
