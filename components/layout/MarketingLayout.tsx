import type { ReactNode } from 'react';
import { LinkedInIcon } from '@/components/ui/Icons';
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
          <Link href="/results">Results</Link>
          <Link href="/our-team">Our team</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-social">
          <a className="li-icon" href="https://www.linkedin.com/company/your-score/" target="_blank" rel="noreferrer" aria-label="YourScore on LinkedIn"><LinkedInIcon /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="li-icon" href="https://in.linkedin.com/in/gurnanishweta" target="_blank" rel="noreferrer" aria-label="Shweta Gurnani on LinkedIn"><LinkedInIcon /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} YourScore</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
