import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import TeamCard from '@/components/ui/TeamCard';
import { teamMembers, teamWorks } from '@/lib/team';

export const metadata = {
  title: 'Our team',
  description: 'Meet the YourScore team: mentor Shweta Gurnani, Senior Quant Trainer Aman Shrisunder and Senior Verbal Trainer Charu Khetawat.',
};

export default function OurTeamPage() {
  const [lead, ...trainers] = teamMembers;
  return (
    <MarketingLayout>
      <PageHero eyebrow="Our team" title={<>Led by one mentor,<br /><em>supported by experts.</em></>}>
        Shweta leads your preparation. Our Quant and Verbal trainers add subject depth.
      </PageHero>

      <section className="team-works page-frame" aria-labelledby="team-works-title">
        <h2 id="team-works-title">How the team works with you</h2>
        <ol>{teamWorks.map((x, i) => <li key={x.title}><span>{i + 1}</span><div><h3>{x.title}</h3><p>{x.copy}</p></div></li>)}</ol>
      </section>

      <section className="team-profiles page-frame">
        <TeamCard m={lead} lead />
        <div className="team-pair">{trainers.map((m) => <TeamCard key={m.name} m={m} />)}</div>
      </section>

      <section className="team-facts page-frame" aria-label="How preparation runs">
        <p>All programmes online</p><p>Live sessions of 1.5 to 2 hours</p><p>Diagnostic before you start</p>
      </section>

      <section className="page-cta page-frame"><p>Want to work with the team?</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section>
    </MarketingLayout>
  );
}
