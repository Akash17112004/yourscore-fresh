export type Plan = {
  name: string;
  price: string;
  format: string;
  oneToOne: string;
  badge?: string;
  note: string;
  includes: string[];
};

export const GST_NOTE = 'Prices exclude GST. 18% GST is added at checkout.';

const premium = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Premium`,
  price: '₹62,000',
  format: 'Live cohort classes',
  oneToOne: '5 hours of 1-1 mentoring',
  badge: 'Recommended',
  note: 'Live classes with limited personal support. Better value than buying the cohort and 5 hours of 1-1 separately.',
  includes: ['Live cohort classes', '5 hours of 1-1 mentoring'],
});

const elite = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Elite`,
  price: '₹1,00,000',
  format: 'Live cohort classes',
  oneToOne: '15 hours of 1-1 mentoring',
  badge: 'Best value for maximum support',
  note: 'Strong live instruction plus substantial individual mentoring.',
  includes: ['Live cohort classes', '15 hours of 1-1 mentoring'],
});

const hybrid = (exam: 'GMAT' | 'GRE'): Plan => ({
  name: `${exam} Elite Hybrid`,
  price: '₹75,000',
  format: 'Self-paced, pre-recorded content',
  oneToOne: '15 hours of 1-1 mentoring',
  note: 'For score improvement only. Recorded content with substantial 1-1 support.',
  includes: ['Self-paced, pre-recorded content', '15 hours of 1-1 mentoring'],
});

export const pricing: Record<'GMAT' | 'GRE', Plan[]> = {
  GMAT: [premium('GMAT'), elite('GMAT'), hybrid('GMAT')],
  GRE: [premium('GRE'), elite('GRE'), hybrid('GRE')],
};
