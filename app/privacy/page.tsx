import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';

export const metadata = { title: 'Privacy', description: 'How YourScore uses the details you send through the contact form.' };

export default function PrivacyPage() {
  return <MarketingLayout>
    <PageHero eyebrow="Privacy" title={<>How we use<br /><em>your details.</em></>}>Short and plain. Review and expand this text before launch.</PageHero>
    <section className="page-frame legal-text">
      <h2>What we collect</h2>
      <p>The name, email address, phone number (optional), exam and message you send through the contact form.</p>
      <h2>Why we collect it</h2>
      <p>Only to reply to you and arrange your free call. We do not sell your details or use them for unrelated marketing.</p>
      <h2>How long we keep it</h2>
      <p>For as long as needed to respond and run your preparation. Ask us to delete it at any time.</p>
      <h2>Contact</h2>
      <p>Email <a href="mailto:shweta@admissionsgateway.com">shweta@admissionsgateway.com</a> for access or deletion requests.</p>
      <h2>Student names on the results page</h2>
      <p>Names and scores on the Results page come from published score cards. Tell us if you would like yours removed.</p>
    </section>
  </MarketingLayout>;
}
