export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  objectPosition?: string;
  summary: string;
  focus: string[];
  bestFor: string;
  fullProfile: string;
  more: string[];
  linkedin?: string;
  profileHref?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Shweta Gurnani',
    role: 'Chief Academic Mentor',
    photo: '/images/shweta-gurnani.jpeg',
    objectPosition: 'center 15%',
    summary: 'Leads your preparation plan, with 21 years of mentoring GMAT, GRE, EA and SAT students.',
    focus: ['Diagnosis and score-gap analysis', 'Personal preparation plans', 'Strategy across all four exams'],
    bestFor: 'Students who want one person accountable for their plan.',
    fullProfile: '',
    more: [],
    linkedin: 'https://in.linkedin.com/in/gurnanishweta',
  },
  {
    name: 'Aman Shrisunder',
    role: 'Senior Quant Trainer',
    photo: '/images/team/aman-shrisunder.jpg',
    summary: '8+ years teaching GMAT and GRE Quant, with a focus on concepts and test strategy. NIT Durgapur alumnus.',
    focus: ['GMAT and GRE Quant', 'Error analysis', 'Test-day timing'],
    bestFor: 'Students who want stronger Quant fundamentals and faster, more accurate solving.',
    fullProfile: 'With 8+ years in education and test preparation, Aman specialises in Quant for GMAT and GRE students. He builds conceptual clarity and test-taking strategy, and teaches the thinking needed for unfamiliar and high-difficulty questions. An NIT Durgapur alumnus.',
    more: ['GMAT Quant: fundamentals and advanced problem solving', 'GRE Quant: concepts, accuracy and time management', 'How to approach a question, not just how to solve it', 'Turning recurring mistakes into score gains'],
    linkedin: 'https://www.linkedin.com/in/aman-shrisunder-54176a321',
  },
  {
    name: 'Charu Khetawat',
    role: 'Senior Verbal Trainer',
    photo: '/images/team/charu-khetawat.jpg',
    summary: '20+ years teaching GMAT and GRE Verbal. Pan-India Verbal Faculty Trainer who has trained 20+ trainers.',
    focus: ['GMAT and GRE Verbal', 'Critical Reasoning and Reading', 'Accuracy under time'],
    bestFor: 'Students who need a clear method for Verbal questions.',
    fullProfile: 'With 20+ years in education and test preparation, Charu teaches Verbal for the GMAT and GRE. As a Pan-India Verbal Faculty Trainer she has trained 20+ trainers in GMAT, GRE and SAT instruction. She focuses on the logic behind each question type, so students learn a method rather than shortcuts.',
    more: ['GMAT Verbal: Critical Reasoning and Reading Comprehension', 'GRE Verbal: comprehension, reasoning and strategy', 'A strategy for each question type', 'Finding your gaps and building a focused plan'],
    linkedin: 'https://www.linkedin.com/in/charu-khetawat-902a6597',
  },
];

export const teamWorks = [
  { title: 'Shweta leads your plan', copy: 'She runs your diagnostic, sets your preparation plan and tracks your progress.' },
  { title: 'Trainers add subject depth', copy: 'Aman covers Quant and Charu covers Verbal, so every section has a specialist.' },
  { title: 'You start with one call', copy: 'Book a free call and we suggest the plan that fits your target and schedule.' },
];
