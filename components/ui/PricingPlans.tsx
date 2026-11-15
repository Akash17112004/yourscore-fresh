'use client';
import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { pricing, GST_NOTE, ENROLMENT_NOTE } from '@/lib/pricing';

const exams = ['GMAT', 'GRE'] as const;
type Exam = (typeof exams)[number];

export default function PricingPlans() {
  const [exam, setExam] = useState<Exam>('GMAT');
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next: Exam = exam === 'GMAT' ? 'GRE' : 'GMAT';
    setExam(next);
    requestAnimationFrame(() => document.getElementById(`plans-${next}`)?.focus());
  };
  return (
    <div>
      <div className="plan-tabs" role="tablist" aria-label="Choose exam">
        {exams.map((x) => (
          <button key={x} id={`plans-${x}`} role="tab" type="button" aria-selected={exam === x} aria-controls={`panel-${x}`} tabIndex={exam === x ? 0 : -1} onClick={() => setExam(x)} onKeyDown={onKey}>{x}</button>
        ))}
      </div>

      {/* Both panels are in the page markup; only the active one is shown. */}
      {exams.map((x) => (
        <div key={x} id={`panel-${x}`} role="tabpanel" aria-labelledby={`plans-${x}`} hidden={exam !== x}>
          <div className="plan-grid">
            {pricing[x].map((p) => (
              <article className={`plan-card${p.badge ? ' is-featured' : ''}`} key={p.name}>
                <span className={`plan-badge${p.badge ? '' : ' plan-badge--empty'}`} aria-hidden={p.badge ? undefined : true}>{p.badge ?? ' '}</span>
                <h3>{p.name}</h3>
                <p className="plan-price">{p.price}<small> + GST</small></p>
                <p className="plan-note">{p.audience}</p>
                <Link className="primary-link" href="/contact">Book a free call <span>→</span></Link>
              </article>
            ))}
          </div>

          <div className="plan-table-wrap">
            <table className="plan-table">
              <caption className="sr-only">{x} plans compared</caption>
              <thead><tr><th scope="col">Plan</th><th scope="col">Format</th><th scope="col">1:1 mentoring</th><th scope="col">Price (+ GST)</th></tr></thead>
              <tbody>
                {pricing[x].map((p) => (
                  <tr key={p.name}><th scope="row">{p.name}</th><td>{p.format}</td><td>{p.oneToOne}</td><td>{p.price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <p className="stats-note">{GST_NOTE} {ENROLMENT_NOTE}</p>

      <div className="plan-other">
        <p><b>EA and SAT:</b> tell us your target and we will quote after a free call.</p>
        <Link className="portal-button" href="/contact">Ask about EA or SAT</Link>
      </div>
    </div>
  );
}
