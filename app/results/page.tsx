import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import AchievementHall from '@/components/ui/AchievementHall';
import PageHero from '@/components/ui/PageHero';
import StoryCarousel from '@/components/ui/StoryCarousel';
import TestimonialCard from '@/components/ui/TestimonialCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { stories } from '@/lib/results';
import { stats, statsNote } from '@/lib/stats';

export const metadata = { title: 'Student results', description: 'GMAT and GRE scores from YourScore students, with the schools they reached.' };

export default function ResultsPage() {
  return <MarketingLayout>
    <PageHero eyebrow="Student results" title={<>Scores that<br /><em>prove it.</em></>}>More options, stronger applications and students who arrived ready on test day.</PageHero>
    <ScrollReveal><section className="results-summary page-frame"><dl>{stats.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl><p className="stats-note">{statsNote}</p></section></ScrollReveal>
    <section className="results-motion-section"><div className="page-frame results-motion-intro"><ScrollReveal><div><p className="eyebrow">What students say</p><h2>High scores are<br /><em>never an accident.</em></h2></div></ScrollReveal><ScrollReveal delay={0.1}><p>Each story began with a different profile. The common thread is a strategy that made progress visible and test day manageable.</p></ScrollReveal></div>
      <div className="page-frame"><StoryCarousel>{stories.map((s) => <TestimonialCard key={s.name} {...s} />)}</StoryCarousel></div>
    </section>
    <AchievementHall />
    <ScrollReveal><section className="page-cta page-frame"><p>Let&apos;s build your own score story.</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section></ScrollReveal>
  </MarketingLayout>;
}
