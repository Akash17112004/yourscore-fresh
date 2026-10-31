import Image from 'next/image';
import Link from 'next/link';

import MarketingLayout from '@/components/layout/MarketingLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { stories } from '@/lib/results';
import { stats, statsNote } from '@/lib/stats';
import { processSteps } from '@/lib/steps';

export const metadata = {
  title: { absolute: 'YourScore | GMAT, GRE, EA & SAT coaching' },
  description: '1:1 coaching for the GMAT, GRE, Executive Assessment (EA) and SAT. 21 years of mentoring, 4,000+ students guided, average GMAT 730.',
};

const destinations = [
  { name: 'How it works', copy: 'Our approach and the four steps from first call to test day.', href: '/approach' },
  { name: 'Meet your mentor', copy: '21 years of experience turned into practical, individual guidance.', href: '/mentor' },
  { name: 'Our team', copy: 'The people who support your preparation day to day.', href: '/our-team' },
  { name: 'Student results', copy: 'The scores, the schools and the stories behind them.', href: '/results' },
];

const homeStories = stories.filter((s) => ['Sushant Sudheendranath', 'Sanchit Dayal', 'Rajat Kadam', 'Aniket Saha'].includes(s.name));

export default function Home() {
  return (
    <MarketingLayout>
      <section className="hero-section">
        <div className="hero-image">
          <Image src="/images/business-school-classroom.jpg" alt="" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </div>

        <div className="page-frame hero-content">
          <p className="eyebrow">GMAT · GRE · EA · SAT coaching</p>
          <h1 className="hero-heading">Your exam.<em>Your score.</em></h1>
          <p className="hero-subtext">
            Strategic 1:1 coaching for ambitious applicants. Get a plan built around your score gap, your schedule and the schools that matter to you.
          </p>

          <div className="hero-cta-row">
            <Link className="primary-link hero-signup" href="/contact">Book a free call <span>→</span></Link>
          </div>

          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
          <p className="stats-note">{statsNote}</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="home-intro page-frame">
          <div>
            <p className="eyebrow">The YourScore difference</p>
            <h2>Preparation with<br /><em>a point of view.</em></h2>
          </div>
          <p>
            Great scores come from an honest starting point, a focused plan and feedback that arrives at the right moment. That is what each student gets here.
          </p>
        </section>
      </ScrollReveal>

      <section className="approach-process-section page-frame">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Four steps,<br /><em>one clear path.</em></h2>
        </div>
        <ol className="step-row">
          {processSteps.map((item, i) => (
            <li key={item.title}>
              <span>{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/approach">See our full approach and process →</Link>
      </section>

      <section className="results-section page-frame">
        <div className="section-heading results-heading">
          <p className="eyebrow">Student results</p>
          <h2>Scores that reflect<br /><em>real momentum.</em></h2>
        </div>
        <div className="testimonial-grid">
          {homeStories.map((s) => <TestimonialCard key={s.name} {...s} />)}
        </div>
      </section>

      <section className="destination-section page-frame" aria-label="Explore the site">
        {destinations.map((item) => (
          <Link className="destination-card" href={item.href} key={item.href}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </div>
            <b aria-hidden="true">→</b>
          </Link>
        ))}
      </section>
    </MarketingLayout>
  );
}
