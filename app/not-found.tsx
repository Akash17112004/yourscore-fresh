import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';

export const metadata = { title: { absolute: 'Page not found | YourScore' }, robots: { index: false } };

export default function NotFound() {
  return (
    <MarketingLayout>
      <section className="page-frame" style={{ padding: '180px 0 120px' }}>
        <p className="eyebrow">Page not found</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px,7vw,72px)', margin: '16px 0 24px' }}>We could not find that page.</h1>
        <Link className="primary-link" href="/">Back to home <span>→</span></Link>
      </section>
    </MarketingLayout>
  );
}
