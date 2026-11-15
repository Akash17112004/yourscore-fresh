import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import PricingPlans from '@/components/ui/PricingPlans';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FaqList from '@/components/ui/FaqList';
import { faqGroups, allFaqs } from '@/lib/faqs';

export const metadata = {
  title: 'Pricing and FAQs',
  description: 'GMAT and GRE plans from YourScore: Premium, Elite Hybrid and Elite, with prices, 1:1 hours and answers to common questions. EA and SAT quoted on request.',
};

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return <MarketingLayout>
    <PageHero eyebrow="Pricing" title={<>Clear plans,<br /><em>no surprises.</em></>}>Choose the live teaching and 1:1 mentoring that fit your goal. Every programme is delivered online.</PageHero>

    <section className="page-frame plans-section" id="plans">
      <PricingPlans />
    </section>

    <section className="page-frame faq-section" id="faq">
      <ScrollReveal><div className="section-heading"><p className="eyebrow">FAQs</p><h2>Questions we hear<br /><em>most often.</em></h2></div></ScrollReveal>
      <nav className="faq-jump" aria-label="FAQ sections">
        {faqGroups.map((g) => <a key={g.id} href={`#faq-${g.id}`}>{g.title}</a>)}
      </nav>
      {faqGroups.map((g) => (
        <div className="faq-group" id={`faq-${g.id}`} key={g.id}>
          <h3>{g.title}</h3>
          <FaqList items={g.items} />
        </div>
      ))}
    </section>

    <section className="page-cta page-frame"><p>Not sure which plan fits? Talk it through with us.</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </MarketingLayout>;
}
