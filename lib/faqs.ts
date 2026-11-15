export type Faq = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: 'plans-fees',
    title: 'Plans and fees',
    items: [
      { q: 'What does each plan cost?', a: 'GMAT and GRE plans, with prices and 1:1 hours, are listed above. For EA and SAT, book a free call and we will recommend a plan and quote the fee.' },
      { q: 'Will I get individual mentoring?', a: 'Yes. Personalised guidance is part of every plan. How much 1:1 time you get depends on the plan: 5 hours in Premium, 15 hours in Elite and Elite Hybrid.' },
      { q: 'Can I enrol from outside India?', a: 'Yes. Every programme is online, so you can join classes, use study resources and meet your mentor from anywhere.' },
    ],
  },
  {
    id: 'included',
    title: 'What is included',
    items: [
      { q: 'Are study materials included?', a: 'Yes. You get structured study materials, practice questions and learning resources through the student portal.' },
      { q: 'Are mock tests included?', a: 'Yes. Programmes include practice tests and sectional assessments, depending on the plan, so you can track progress and exam readiness.' },
    ],
  },
  {
    id: 'format',
    title: 'Format and schedule',
    items: [
      { q: 'Are classes online or in person?', a: 'All our programmes are delivered online.' },
      { q: 'How often are classes, and how long is each one?', a: 'Live sessions usually run 1.5 to 2 hours. The number of sessions each week depends on your plan and batch, and you receive a schedule before preparation begins.' },
      { q: 'How long does preparation take?', a: 'It depends on your starting level, target score and study schedule. There is no fixed minimum. Your diagnostic and plan give you a realistic timeline.' },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting started',
    items: [
      { q: 'Do I take a diagnostic first?', a: 'Yes. We recommend an initial assessment to understand your strengths and gaps and to build a strategy around your target score.' },
      { q: 'Can I join if I have already taken the exam?', a: 'Yes. We review your previous performance, find what held your score back and recommend a targeted plan.' },
    ],
  },
  {
    id: 'changes-refunds',
    title: 'Changes and refunds',
    items: [
      { q: 'Can I reschedule a session?', a: 'Yes, for eligible sessions. It depends on advance notice, mentor availability and your programme guidelines.' },
      { q: 'What is the refund policy?', a: 'We do not run a fixed refund schedule. Programmes involve dedicated planning, faculty and learning resources, so each request is reviewed case by case. Read the Refunds and Cancellation section of our Terms, and ask us before you enrol.' },
      { q: 'What if my score does not improve?', a: 'We cannot promise a score. If you are not progressing as expected, we review your results with you, find the gaps and adjust your preparation plan.' },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);

// Shown on Home and on Contact.
const pick = (qs: string[]) => qs.map((q) => allFaqs.find((f) => f.q === q)!).filter(Boolean);
export const homeFaqs: Faq[] = pick(['What does each plan cost?', 'What is the refund policy?', 'Will I get individual mentoring?', 'How long does preparation take?']);
export const contactFaqs: Faq[] = [
  { q: 'Is the first call free?', a: 'Yes. The first call is a free 30-minute conversation about your timeline, target programmes and score goal.' },
  { q: 'What happens on the call?', a: 'We talk through your goals and testing history, then tell you whether our programme fits and which plan we would suggest. There is no obligation.' },
];
