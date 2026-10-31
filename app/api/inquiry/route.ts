import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

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

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ error: 'The form is not connected yet. Please email us directly.' }, { status: 503 });
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM_EMAIL || 'YourScore <onboarding@resend.dev>',
      to: [to],
      replyTo: email,
      subject: `New call request from ${firstName} ${lastName}`,
      html: `<p><b>Name:</b> ${esc(firstName)} ${esc(lastName)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone) || '-'}</p><p><b>Exam:</b> ${esc(exam) || '-'}</p><p><b>Goal:</b><br>${esc(message).replace(/\n/g, '<br>')}</p>`,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'We could not send your message. Please email us directly.' }, { status: 502 });
  }
}
