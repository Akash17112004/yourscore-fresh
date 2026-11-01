'use client';
import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { pricing, GST_NOTE } from '@/lib/pricing';

const exams = ['GMAT', 'GRE'] as const;

export default function PricingPlans() {
  const [exam, setExam] = useState<(typeof exams)[number]>('GMAT');
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = exam === 'GMAT' ? 'GRE' : 'GMAT';
    setExam(next);
    requestAnimationFrame(() => document.getElementById(`plans-${next}`)?.focus());
  };
  return (
    <div>
      <div className="plan-tabs" role="tablist" aria-label="Choose exam">
        {exams.map((x) => (
          <button key={x} id={`plans-${x}`} role="tab" type="button" aria-selected={exam === x} aria-controls="plans-panel" tabIndex={exam === x ? 0 : -1} onClick={() => setExam(x)} onKeyDown={onKey}>{x}</button>
        ))}
      </div>
      <div className="plan-grid" id="plans-panel" role="tabpanel" aria-labelledby={`plans-${exam}`}>
        {pricing[exam].map((p) => (
          <article className={`plan-card${p.badge === 'Recommended' ? ' is-featured' : ''}`} key={p.name}>
            {p.badge ? <span className="plan-badge">{p.badge}</span> : <span className="plan-badge plan-badge--empty" aria-hidden="true">&nbsp;</span>}
            <h3>{p.name}</h3>
            <p className="plan-price">{p.price}<small> + GST</small></p>
            <p className="plan-note">{p.note}</p>
            <ul>{p.includes.map((i) => <li key={i}>{i}</li>)}</ul>
            <Link className="primary-link" href="/contact">Book a free call <span>→</span></Link>
          </article>
        ))}
      </div>
      <p className="stats-note">{GST_NOTE}</p>
    </div>
  );
}
