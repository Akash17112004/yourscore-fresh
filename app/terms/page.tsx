import MarketingLayout from '@/components/layout/MarketingLayout';
import PageHero from '@/components/ui/PageHero';
import LegalDocument from '@/components/ui/LegalDocument';
import doc from '@/lib/legal/terms.json';

export const metadata = { title: 'Terms & Conditions', description: 'The terms that apply to YourScore programmes, the website and the student portal.' };

export default function Page() {
  // The first three blocks are the document title, company and date, shown in the hero instead.
  const [, , updated, ...body] = doc as never[];
  const date = ((updated as { s: { t: string }[] }).s ?? []).map((x) => x.t).join('');
  return <MarketingLayout>
    <PageHero eyebrow="Legal" title={<>Terms &amp; Conditions</>}>{date}. Your Score by Admissions Gateway.</PageHero>
    <section className="page-frame legal-text"><LegalDocument blocks={body} /></section>
  </MarketingLayout>;
}
