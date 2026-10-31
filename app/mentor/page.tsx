import Link from 'next/link';
import Image from 'next/image';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import PinnedSection from '@/components/ui/PinnedSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = { title: 'Meet your mentor' };

export default function MentorPage() {
  return <MarketingLayout>
    <PageHero eyebrow="Our mentor" title={<>One mentor.<br /><em>All the way through.</em></>}>The person who understands your starting point should be the one helping you reach your finish line.</PageHero>
    <PinnedSection>
      <section className="mentor-page page-frame">
        <ScrollReveal><div className="mentor-portrait-card"><Image src="/images/shweta-gurnani.jpeg" alt="Shweta Gurnani, Chief Academic Mentor" fill sizes="(max-width: 900px) min(100vw - 64px, 530px), 42vw" priority /><div className="mentor-portrait-caption"><p>Strategy is personal.</p><b>21 years &middot; 4,000+ students</b></div></div></ScrollReveal>
        <ScrollReveal delay={0.12}><div><p className="eyebrow">Chief Academic Mentor</p><h2>Shweta<br /><em>Gurnani.</em></h2><p className="mentor-lead">Shweta has spent over two decades helping applicants turn ambition into a test strategy they can execute. Her work rests on close diagnosis, clear frameworks and the patience to solve the real problem behind the first question.</p><ul className="credentials"><li><b>21</b><span>years mentoring</span></li><li><b>4,000+</b><span>students guided</span></li><li><b>730</b><span>average GMAT score</span></li><li><b>331</b><span>average GRE score</span></li></ul><div className="mentor-contact"><a href="mailto:shweta@admissionsgateway.com">shweta@admissionsgateway.com</a><a href="tel:918287066346">+91 82870 66346</a></div></div></ScrollReveal>
      </section>
    </PinnedSection>
    <ScrollReveal><section className="detail-band"><div className="page-frame detail-grid"><div><p className="eyebrow">What 1:1 means here</p><h2>Guidance that gets<br /><em>more specific.</em></h2></div><ul><li><b>Context is retained</b><span>Your mentor knows your previous work, common mistakes and exact score goal.</span></li><li><b>Feedback is candid</b><span>You get the specific correction that moves you forward.</span></li><li><b>Sessions are responsive</b><span>Time goes where it will create the most progress next.</span></li></ul></div></section></ScrollReveal>
    <ScrollReveal><section className="page-cta page-frame"><p>Meet the mentor behind the method.</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section></ScrollReveal>
  </MarketingLayout>;
}
