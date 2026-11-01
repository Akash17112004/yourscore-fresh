import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import LegalDocument from '@/components/ui/LegalDocument';
import doc from '@/lib/legal/privacy.json';

export const metadata = { title: 'Privacy Policy', description: 'How YourScore collects, uses and protects your personal information.' };

export default function Page() {
  // The first three blocks are the document title, company and date, shown in the hero instead.
  const [, , updated, ...body] = doc as never[];
  const date = ((updated as { s: { t: string }[] }).s ?? []).map((x) => x.t).join('');
  return <MarketingLayout>
    <PageHero eyebrow="Legal" title={<>Privacy Policy</>}>{date}. Your Score by Admissions Gateway.</PageHero>
    <section className="page-frame legal-text"><LegalDocument blocks={body} /></section>
  </MarketingLayout>;
}
