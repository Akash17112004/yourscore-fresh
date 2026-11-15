import type { Faq } from '@/lib/faqs';

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
    </div>
  );
}
