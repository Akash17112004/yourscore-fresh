import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { principles, processSteps, planIncludes } from '@/lib/steps';

export const metadata = {
  title: 'How it works',
  description: 'How YourScore coaching works: a diagnostic, a personal plan, one mentor and four clear steps from first call to test day.',
};

export default function ApproachPage() {
  return <MarketingLayout>
    <PageHero eyebrow="How it works" title={<>Coaching built<br /><em>around you.</em></>}>Personal, score-focused preparation. You always know the next useful step.</PageHero>

    <section className="content-page page-frame" id="approach">
      <ScrollReveal><div className="content-intro"><p className="eyebrow">Our approach</p><h2>Better decisions<br /><em>make better scores.</em></h2><p>We find your decision-making habits first, then build the knowledge, timing and confidence to change them.</p></div></ScrollReveal>
      <div className="principle-list">{principles.map((p, i) => <ScrollReveal delay={i * 0.06} key={p.title}><article><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{p.title}</h3><p>{p.copy}</p></div></article></ScrollReveal>)}</div>
    </section>

    <section className="content-page page-frame" id="process">
      <ScrollReveal><div className="content-intro"><p className="eyebrow">Our process</p><h2>Four steps,<br /><em>one clear path.</em></h2><p>From the first call onward, each step tells you what happens next.</p></div></ScrollReveal>
      <div className="timeline">{processSteps.map((s, i) => <ScrollReveal delay={i * 0.06} key={s.title}><article><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{s.title}</h3><p>{s.copy}</p><aside><b>What changes after this step</b><span>{s.outcome}</span></aside></div></article></ScrollReveal>)}</div>
    </section>

    <ScrollReveal><section className="detail-band"><div className="page-frame detail-grid"><div><p className="eyebrow">What your plan includes</p><h2>A complete system<br /><em>for your prep.</em></h2></div><ul>{planIncludes.map((x) => <li key={x.title}><b>{x.title}</b><span>{x.copy}</span></li>)}</ul></div></section></ScrollReveal>

    <ScrollReveal><section className="page-cta page-frame"><p>Ready to see a plan built for you?</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section></ScrollReveal>
  </MarketingLayout>;
}
