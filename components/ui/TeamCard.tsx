import Image from 'next/image';
import Link from 'next/link';
import type { TeamMember } from '@/lib/team';
import { LinkedInIcon } from '@/components/ui/Icons';

export default function TeamCard({ m, lead = false }: { m: TeamMember; lead?: boolean }) {
  return (
    <article className={`team-profile${lead ? ' is-lead' : ''}`}>
      <div className="team-profile-photo">
        <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill sizes={lead ? '(max-width: 900px) 80vw, 300px' : '(max-width: 900px) 80vw, 220px'} style={{ objectFit: 'cover', objectPosition: m.objectPosition ?? 'center 20%' }} />
      </div>
      <div className="team-profile-body">
        <h2>{m.name}</h2>
        <p className="team-profile-role">{m.role}</p>
        <p className="team-profile-summary">{m.summary}</p>
        <h3>Focus areas</h3>
        <ul>{m.focus.map((f) => <li key={f}>{f}</li>)}</ul>
        <p className="team-profile-best"><b>Best for:</b> {m.bestFor}</p>
        {m.fullProfile ? (
          <details className="team-more">
            <summary>Read full profile</summary>
            <p>{m.fullProfile}</p>
            <ul>{m.more.map((x) => <li key={x}>{x}</li>)}</ul>
          </details>
        ) : null}
        <div className="team-links">
          {m.profileHref ? <Link href={m.profileHref}>Read {m.name.split(' ')[0]}&rsquo;s full profile →</Link> : null}
          {m.linkedin ? <a className="li-icon" href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`}><LinkedInIcon /><span className="sr-only"> (opens in a new tab)</span></a> : null}
        </div>
      </div>
    </article>
  );
}
