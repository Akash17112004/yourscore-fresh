import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="marketing-site">
      <Navbar />
      {children}
      <footer className="site-footer">
        <Link href="/" className="footer-brand" aria-label="YourScore home">
          <Image src="/images/brand/your-score-admissions-gateway.jpeg" alt="YourScore by Admissions Gateway" width={190} height={190} />
        </Link>
        <p>Personalised test prep for applicants who want a plan with purpose.</p>
        <div className="footer-links">
          <Link href="/#approach-process">Approach &amp; Process</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/mentor">Mentor</Link>
          <Link href="/results">Results</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <span>© {new Date().getFullYear()} YourScore</span>
      </footer>
    </main>
  );
}
