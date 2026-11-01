import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Enquiries are delivered here. Override with INQUIRY_TO_EMAIL if it ever changes.
const DEFAULT_TO = 'info@prepwithyourscore.com';

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  // Honeypot: real visitors leave this empty.
  if (clean(body.website, 100)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const exam = clean(body.exam, 40);
  const message = clean(body.message, 3000);

  if (!firstName || !lastName || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please fill in the required fields with a valid email.' }, { status: 400 });
  }

  const to = process.env.INQUIRY_TO_EMAIL || DEFAULT_TO;
  const subject = `New free call request from ${firstName} ${lastName}`;
  const html = `<h2>New free call request</h2><p><b>Name:</b> ${esc(firstName)} ${esc(lastName)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone / WhatsApp:</b> ${esc(phone) || '-'}</p><p><b>Preparing for:</b> ${esc(exam) || '-'}</p><p><b>Goal:</b><br>${esc(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const key = process.env.RESEND_API_KEY;
    if (key) {
      // Preferred: Resend. Needs a verified sending domain (set INQUIRY_FROM_EMAIL, e.g. "YourScore <noreply@prepwithyourscore.com>").
      const resend = new Resend(key);
      const { error } = await resend.emails.send({
        from: process.env.INQUIRY_FROM_EMAIL || 'YourScore <onboarding@resend.dev>',
        to: [to],
        replyTo: email,
        subject,
        html,
      });
      if (error) throw new Error(error.message);
    } else {
      // No key configured: deliver through FormSubmit. The first ever submission sends an
      // activation email to the recipient, which must be confirmed once.
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: 'https://yourscore-fresh.vercel.app', Referer: 'https://yourscore-fresh.vercel.app/contact' },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
          Name: `${firstName} ${lastName}`,
          Email: email,
          'Phone / WhatsApp': phone || '-',
          'Preparing for': exam || '-',
          Goal: message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error('FormSubmit failed');
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'We could not send your message. Please email us directly.' }, { status: 502 });
  }
}
