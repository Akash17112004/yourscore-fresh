'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/results';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'How it works', href: '/approach' },
  { label: 'Results', href: '/results' },
  { label: 'Our team', href: '/our-team' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); pillRef.current?.querySelector<HTMLElement>('.mobile-nav-toggle')?.focus(); return; }
      if (e.key !== 'Tab' || !pillRef.current) return;
      const items = Array.from(pillRef.current.querySelectorAll<HTMLElement>('.mobile-nav-toggle, .nav-links a')).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const onClick = (e: MouseEvent) => { if (pillRef.current && !pillRef.current.contains(e.target as Node)) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div ref={pillRef} className={`nav-pill${menuOpen ? ' nav-menu-open' : ''}`}
        style={{
          width: 'min(1240px, calc(100vw - 32px))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '12px 18px 12px 20px',
          border: '1px solid rgba(232, 228, 224, 0.9)',
          borderRadius: '999px',
          background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(250,250,248,0.8)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 12px 30px rgba(10,10,10,0.05)',
          transition: 'all 0.35s ease',
          pointerEvents: 'auto',
        }}
      >
        <Link href="/" className="brand-link" aria-label="YourScore home">
          <Image
            className="brand-logo"
            src="/images/brand/logo.png"
            alt="YourScore by Admissions Gateway"
            width={180}
            height={180}
            priority
          />
        </Link>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              style={{
                fontSize: '13px',
                color: pathname === item.href ? '#8B0000' : '#4b4b4b',
                textDecoration: 'none',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '10px 12px',
                borderRadius: '999px',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#0a0a0a';
                e.currentTarget.style.background = 'rgba(139,0,0,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#4b4b4b';
                e.currentTarget.style.background = 'transparent';
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-menu-signup"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Book a free call
          </Link>
          <a className="portal-button nav-menu-portal" href={SIGNUP_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Student portal <span aria-hidden="true">↗</span><span className="sr-only"> (opens Admissions Gateway in a new tab)</span>
          </a>
        </div>

        <div className="nav-actions">
        <a className="portal-button nav-portal" href={SIGNUP_URL} target="_blank" rel="noreferrer">
          Student portal <span aria-hidden="true">↗</span><span className="sr-only"> (opens Admissions Gateway in a new tab)</span>
        </a>

        <Link
          className="nav-cta"
          href="/contact"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            background: 'var(--red)',
            color: '#ffffff',
            padding: '10px 18px',
            borderRadius: '999px',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 12px 24px rgba(139,0,0,0.22)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--red-light)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--red)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => setMenuOpen(false)}
        >
          Book a free call
        </Link>
        </div>
      </div>
    </nav>
  );
}
