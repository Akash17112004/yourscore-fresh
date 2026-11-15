export type Plan = {
  name: string;
  price: string;
  format: string;
  oneToOne: string;
  audience: string;
  badge?: string;
};

export const GST_NOTE = 'Prices exclude GST. 18% GST is added to the final amount.';
export const ENROLMENT_NOTE = 'After your free call we confirm the right plan with you and share the payment details.';

const premium = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Premium`,
  price: '₹62,000',
  format: 'Live cohort classes',
  oneToOne: '5 hours',
  audience: 'Live classes plus limited personal support. Better value than buying the cohort and 5 hours of 1:1 separately.',
  badge: 'Recommended',
});

const hybrid = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Elite Hybrid`,
  price: '₹75,000',
  format: 'Self-paced, pre-recorded',
  oneToOne: '15 hours',
  audience: 'For students who already know the content and want to raise a score, with recorded lessons and substantial 1:1 support.',
});

const elite = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Elite`,
  price: '₹1,00,000',
  format: 'Live cohort classes',
  oneToOne: '15 hours',
  audience: 'Strong live instruction plus substantial individual mentoring.',
});

// Ordered by price, lowest first.
export const pricing: Record<'GMAT' | 'GRE', Plan[]> = {
  GMAT: [premium('GMAT'), hybrid('GMAT'), elite('GMAT')],
  GRE: [premium('GRE'), hybrid('GRE'), elite('GRE')],
};
