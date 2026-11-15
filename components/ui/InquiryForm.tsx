'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      form.reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="inquiry-grid">
        <label>First name *<input required name="firstName" autoComplete="given-name" /></label>
        <label>Last name *<input required name="lastName" autoComplete="family-name" /></label>
      </div>
      <label>Email address *<input required name="email" type="email" autoComplete="email" /></label>
      <label>Phone or WhatsApp (optional)<input name="phone" type="tel" autoComplete="tel" /></label>
      <label>What are you preparing for? (optional)
        <select name="exam" defaultValue=""><option value="">Select an exam</option><option>GMAT</option><option>GRE</option><option>Executive Assessment (EA)</option><option>SAT</option><option>Not sure yet</option></select>
      </label>
      <label>Tell us about your goal *<textarea required name="message" rows={5} placeholder="Target score, exam date or schools on your list" /></label>
      <input className="hp-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Book a free call'} <span aria-hidden="true">→</span></button>
      <p className="form-note">Fields marked * are required. We use your details only to arrange your call. We reply within 1 working day. <Link href="/privacy">Privacy policy</Link> and <Link href="/terms">Terms</Link></p>
      {status === 'sent' && <p className="form-confirmation" role="status">Thank you. We have received your request and will reply within 1 working day.</p>}
      {status === 'error' && <p className="form-error" role="alert">{error} <a href="mailto:info@prepwithyourscore.com">info@prepwithyourscore.com</a></p>}
    </form>
  );
}
