import MarketingLayout from '@/components/layout/MarketingLayout';
import DepthText from '@/components/ui/DepthText';

const teamMembers = [
  {
    name: 'Shweta Gurnani',
    role: 'Chief Academic Mentor',
    bio: 'Guides students with diagnostic precision, strategic focus, and a clear framework for sustainable score improvement.',
    initials: 'SG',
  },
  {
    name: 'Team Member 2',
    role: 'Academic Strategist',
    bio: 'Placeholder bio. Add this team member’s expertise, coaching approach, and the value they bring to students.',
    initials: 'T2',
  },
  {
    name: 'Team Member 3',
    role: 'Student Success Lead',
    bio: 'Placeholder bio. Describe how this team member supports students and keeps preparation moving forward.',
    initials: 'T3',
  },
  {
    name: 'Team Member 4',
    role: 'Mentor / Coach',
    bio: 'Placeholder bio. Replace this card with a real team member’s name, role, and short introduction.',
    initials: 'T4',
  },
];

export default function OurTeamPage() {
  return (
    <MarketingLayout>
      <section className="team-section team-page page-frame">
        <div className="section-heading center-heading">
          <p className="eyebrow">Our team</p>
          <h1 className="team-page-title">
            <DepthText
              text={<>Mentors who bring<br /><em>clarity to the process.</em></>}
              faceColor="var(--black)"
              depthColor="var(--red)"
              fontSize="inherit"
              lineHeight="inherit"
              letterSpacing="inherit"
            />
          </h1>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo" aria-label={member.name}>
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
