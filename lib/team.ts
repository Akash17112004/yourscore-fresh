export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  objectPosition?: string;
  summary: string;
  focus: string[];
  why: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Shweta Gurnani',
    role: 'Chief Academic Mentor',
    photo: '/images/shweta-gurnani.jpeg',
    objectPosition: 'center 15%',
    summary: 'Leads every student’s preparation personally, with 21 years of experience and a clear framework for sustainable score improvement.',
    focus: ['Diagnosis and score-gap analysis', 'Personal preparation plans', 'GMAT, GRE, EA and SAT strategy'],
    why: 'Shweta stays involved from the first call to test day, so feedback gets sharper as you progress.',
  },
  {
    name: 'Aman Shrisunder',
    role: 'Senior Quant Trainer',
    photo: '/images/team/aman-shrisunder.jpg',
    summary: 'With 8+ years in education and test preparation, Aman brings deep expertise in Quantitative Aptitude, with a focus on helping GRE and GMAT aspirants build conceptual clarity and test-taking strategy. An NIT Durgapur alumnus, he has worked with aspirants preparing for competitive graduate-management and study-abroad examinations.',
    focus: [
      'GMAT Quant: strong fundamentals and advanced problem-solving',
      'GRE Quant: concepts, accuracy and time management',
      'Test-taking strategy: how to approach a question, not just how to solve it',
      'Error analysis and improvement: turning recurring mistakes into score gains',
      'Personalised mentoring for your current level and target score',
    ],
    why: 'Aman goes beyond formulas. He builds the thinking framework needed for unfamiliar and high-difficulty questions, helping students become faster, more accurate and more confident.',
  },
  {
    name: 'Charu Khetawat',
    role: 'Senior Verbal Trainer',
    photo: '/images/team/charu-khetawat.jpg',
    summary: 'With 20+ years in education and test preparation, Charu is a highly experienced Verbal specialist for the GMAT and GRE. She was promoted to Pan-India Verbal Faculty Trainer and has trained 20+ trainers in GMAT, GRE and SAT instruction.',
    focus: [
      'GMAT Verbal: structured approaches to Critical Reasoning and Reading Comprehension',
      'GRE Verbal: comprehension, reasoning and verbal strategy',
      'Question-solving strategy for each question type',
      'Accuracy and time management under test conditions',
      'Conceptual clarity: the logic behind questions, not shortcuts',
      'Personalised mentoring to find your gaps and build a focused improvement path',
    ],
    why: 'Charu brings two decades of understanding how students learn, where they struggle and what it takes to move from preparation to test-day performance.',
  },
];
