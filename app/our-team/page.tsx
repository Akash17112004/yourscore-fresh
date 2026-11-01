import Image from 'next/image';
import Link from 'next/link';
import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import { teamMembers } from '@/lib/team';

export const metadata = {
  title: 'Our team',
  description: 'Meet the YourScore team: mentor Shweta Gurnani, Senior Quant Trainer Aman Shrisunder and Senior Verbal Trainer Charu Khetawat.',
};

export default function OurTeamPage() {
  return (
    <MarketingLayout>
      <PageHero eyebrow="Our team" title={<>Led by one mentor,<br /><em>supported by experts.</em></>}>
        Shweta personally leads your preparation. Our Quant and Verbal trainers add deep subject expertise.
      </PageHero>
      <section className="team-profiles page-frame">
        {teamMembers.map((m) => (
          <article className="team-profile" key={m.name}>
            <div className="team-profile-photo">
              <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill sizes="(max-width: 900px) 80vw, 320px" style={{ objectFit: 'cover', objectPosition: m.objectPosition ?? 'center 20%' }} />
            </div>
            <div className="team-profile-body">
              <p className="eyebrow">{m.role}</p>
              <h2>{m.name}</h2>
              <p className="team-profile-summary">{m.summary}</p>
              <h3>Focus areas</h3>
              <ul>{m.focus.map((f) => <li key={f}>{f}</li>)}</ul>
              <h3>Why students benefit</h3>
              <p>{m.why}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="page-cta page-frame"><p>Want to work with the team?</p><Link className="primary-link" href="/contact">Book a free call <span>→</span></Link></section>
    </MarketingLayout>
  );
}
