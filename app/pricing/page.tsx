import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import PricingPlans from '@/components/ui/PricingPlans';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { faqs } from '@/lib/faqs';

export const metadata = {
  title: 'Pricing and FAQs',
  description: 'GMAT and GRE coaching plans from YourScore: Premium, Elite and Elite Hybrid, with prices, 1-1 hours and answers to common questions.',
};

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return <MarketingLayout>
    <PageHero eyebrow="Pricing" title={<>Clear plans,<br /><em>no surprises.</em></>}>Choose the level of live teaching and 1-1 mentoring that fits your goal. Every programme is delivered online.</PageHero>

    <section className="page-frame plans-section" id="plans">
      <PricingPlans />
    </section>

    <section className="page-frame faq-section" id="faqs">
      <ScrollReveal><div className="section-heading"><p className="eyebrow">FAQs</p><h2>Questions students<br /><em>ask us most.</em></h2></div></ScrollReveal>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </section>

    <section className="page-cta page-frame"><p>Not sure which plan fits? Talk it through with us.</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </MarketingLayout>;
}
