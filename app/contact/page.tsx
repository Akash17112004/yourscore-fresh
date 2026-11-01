import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import InquiryForm from '@/components/ui/InquiryForm';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Book a free call' };

export default function ContactPage() {
  return <MarketingLayout>
    <PageHero eyebrow="Get in touch" title={<>Let&apos;s start<br /><em>your journey.</em></>}>Tell us where you want to go and we will suggest the most useful next step.</PageHero>
    <section className="contact-page page-frame"><ScrollReveal><div className="contact-sidebar"><p className="eyebrow">Your first call</p><h2>Bring your goals.<br /><em>We&apos;ll bring clarity.</em></h2><p>The first call is 30 minutes about your timeline, target programmes and the score you need. No pressure and no generic pitch.</p><div><b>Email</b><a href="mailto:shweta@admissionsgateway.com">shweta@admissionsgateway.com</a></div><div><b>Phone / WhatsApp</b><a href="tel:918287066346">+91 82870 66346</a></div><div><b>Follow us</b><a href="https://www.linkedin.com/company/your-score/" target="_blank" rel="noreferrer">YourScore on LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></div></div></ScrollReveal><ScrollReveal delay={0.12}><InquiryForm /></ScrollReveal></section>
    <ScrollReveal><section className="contact-next"><div className="page-frame"><p className="eyebrow">What happens next</p><ol className="next-steps">{['Talk to us','Take a diagnostic','Receive your plan','Prepare with feedback'].map((t, i) => <li key={t}><span>{i + 1}</span><p>{t}</p></li>)}</ol><Link className="text-link" href="/approach#process">See the full process →</Link></div></section></ScrollReveal>
  </MarketingLayout>;
}
