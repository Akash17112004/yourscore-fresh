import Image from 'next/image';
import MarketingLayout from '@/components/layout/MarketingLayout';
import { teamMembers } from '@/lib/team';

export const metadata = { title: 'Our team' };

export default function OurTeamPage() {
  const members = teamMembers.filter((m) => m.published);
  return (
    <MarketingLayout>
      <section className="team-section team-page page-frame">
        <div className="section-heading center-heading">
          <p className="eyebrow">Our team</p>
          <h1 className="team-page-title">
            Led by one mentor,<br /><em>supported by a team.</em>
          </h1>
          <p style={{ maxWidth: 560, margin: '18px auto 0', color: 'var(--muted)', lineHeight: 1.7 }}>
            Shweta personally leads your preparation. The team handles scheduling, practice review and day-to-day support.
          </p>
        </div>
        <div className="team-grid">
          {members.map((m) => (
            <article className="team-card" key={m.name + m.role}>
              <div className="team-photo" aria-label={m.name} style={{ position: 'relative', overflow: 'hidden' }}>
                {m.photo ? <Image src={m.photo} alt={m.name} fill sizes="160px" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} /> : m.initials}
              </div>
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
              <p className="team-bio">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
