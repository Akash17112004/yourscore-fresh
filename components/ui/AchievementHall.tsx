'use client';

import { useState, type KeyboardEvent } from 'react';

type Result = {
  name: string;
  score: number;
};

type Exam = 'gre' | 'gmat-focus';

const exams: Exam[] = ['gre', 'gmat-focus'];

const results: Record<Exam, { label: string; range: string; source: string; firstColumnCount: number; entries: Result[] }> = {
  gre: {
    label: 'GRE',
    range: '331–339',
    source: '/images/results/gre-report-card.jpeg',
    firstColumnCount: 25,
    entries: [
      { name: 'Gayathri', score: 339 }, { name: 'Harshvardhan', score: 338 }, { name: 'Rohan Mehta', score: 337 }, { name: 'Subhadra Jena', score: 337 }, { name: 'Sanchit Chaddha', score: 336 }, { name: 'Sachi Vats', score: 336 }, { name: 'Shitij Malik', score: 336 }, { name: 'Anagha', score: 335 }, { name: 'Eshaan Rampal', score: 334 }, { name: 'Arushi Mohan', score: 334 }, { name: 'Syed Shujaat Ali', score: 334 }, { name: 'Tanya Agrawal', score: 333 }, { name: 'Sakshar Gupta', score: 333 }, { name: 'Ashwin Chandawarkar', score: 333 }, { name: 'Ritesh Jhunjhunwala', score: 333 }, { name: 'Sakshi Siddam', score: 333 }, { name: 'Kabir Singh', score: 333 }, { name: 'Harsh Saraf', score: 332 }, { name: 'Ashwin Goyal', score: 332 }, { name: 'Rohan Kohli', score: 332 }, { name: 'Rajat Kadam', score: 332 }, { name: 'Abdul Bells', score: 332 }, { name: 'Antra Saxena', score: 332 }, { name: 'Saurabh Deasai', score: 332 }, { name: 'Subhrajit Chowdhury', score: 331 },
      { name: 'Abhinav Krishnan', score: 331 }, { name: 'Rahil Kapur', score: 331 }, { name: 'Tarun Negi', score: 331 }, { name: 'Aryaman Khandelwal', score: 331 }, { name: 'Nikhil Dutta', score: 331 }, { name: 'Rishit Kumar', score: 330 }, { name: 'Arnav Sheth', score: 330 }, { name: 'Jatin Sharma', score: 330 }, { name: 'Krishaang Verma', score: 330 }, { name: 'Osheian Mehta', score: 329 }, { name: 'Isha Chhabra', score: 329 }, { name: 'Varun Krishnan', score: 329 }, { name: 'Karan Agrawal', score: 329 }, { name: 'Yash Agrawal', score: 329 }, { name: 'Kalpesh Rathi', score: 329 }, { name: 'Rahul Subramaniam', score: 329 }, { name: 'Jyotika Kapur', score: 329 }, { name: 'Valerie A. Dellisanti', score: 329 }, { name: 'Anjali Deshpandey', score: 329 },
    ],
  },
  'gmat-focus': {
    label: 'GMAT Focus',
    range: '685–735',
    source: '/images/results/gmat-focus-report-card.jpeg',
    firstColumnCount: 14,
    entries: [
      { name: 'Rohan Garg', score: 735 }, { name: 'Deepa Naik', score: 735 }, { name: 'Aman kai Siddhant', score: 735 }, { name: 'Archita Poddar', score: 735 }, { name: 'Aditya Dey', score: 725 }, { name: 'Manas Naik', score: 725 }, { name: 'Taarussh Wadhwa', score: 715 }, { name: 'Sarthak Sharma', score: 715 }, { name: 'Aman Goyal', score: 715 }, { name: 'Tarush Gupta', score: 715 }, { name: 'Anmol Chaudhary', score: 715 }, { name: 'Shivam Kalkar', score: 705 }, { name: 'Anshul Sambher', score: 705 }, { name: 'Kaushal Vadera', score: 705 },
      { name: 'Saumya Gupta', score: 705 }, { name: 'Mehak Preet', score: 705 }, { name: 'Mayur vikas Joshi', score: 705 }, { name: 'Saujanya Sabrinath', score: 705 }, { name: 'Pulkit Bhutani', score: 695 }, { name: 'Ayantika Saha', score: 695 }, { name: 'Sophiya Khan', score: 695 }, { name: 'Kunal Dakhane', score: 695 }, { name: 'Esha Patil', score: 695 }, { name: 'Bhargav Chikatimilla', score: 695 }, { name: 'Pankaj Goyal', score: 685 }, { name: 'Swati Sheenum', score: 685 }, { name: 'Anushka Tyagi', score: 685 },
    ],
  },
};

export default function AchievementHall() {
  const [activeExam, setActiveExam] = useState<Exam>('gre');
  const activeResults = results[activeExam];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, exam: Exam) => {
    const currentIndex = exams.indexOf(exam);
    let nextExam: Exam | undefined;

    if (event.key === 'ArrowRight') nextExam = exams[(currentIndex + 1) % exams.length];
    if (event.key === 'ArrowLeft') nextExam = exams[(currentIndex - 1 + exams.length) % exams.length];
    if (event.key === 'Home') nextExam = exams[0];
    if (event.key === 'End') nextExam = exams[exams.length - 1];

    if (!nextExam) return;

    event.preventDefault();
    setActiveExam(nextExam);
    requestAnimationFrame(() => document.getElementById(`${nextExam}-tab`)?.focus());
  };

  return (
    <section className="achievement-hall page-frame" aria-labelledby="achievement-heading">
      <div className="achievement-heading">
        <div>
          <p className="eyebrow">YourScore Hall of Achievement</p>
          <h2 id="achievement-heading">Proof in<br /><em>every point.</em></h2>
        </div>
        <p>A selection of reported outcomes from the published GRE and GMAT Focus score cards.</p>
      </div>

      <div className="achievement-tabs" role="tablist" aria-label="Exam score boards">
        {exams.map((exam) => (
          <button
            aria-controls="achievement-panel"
            aria-selected={activeExam === exam}
            className={activeExam === exam ? 'is-active' : undefined}
            id={`${exam}-tab`}
            key={exam}
            onClick={() => setActiveExam(exam)}
            onKeyDown={(event) => handleTabKeyDown(event, exam)}
            role="tab"
            type="button"
          >
            {results[exam].label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="achievement-panel" id="achievement-panel" role="tabpanel" aria-labelledby={`${activeExam}-tab`}>
        <div className="achievement-panel-head">
          <div><span>{activeResults.label}</span><strong>{activeResults.range}</strong></div>
          <p>{activeResults.entries.length} reported student results</p>
          <a href={activeResults.source} target="_blank" rel="noreferrer">View original report card <span aria-hidden="true">↗</span></a>
        </div>

        <div className="achievement-leaderboard" key={activeExam}>
          {[activeResults.entries.slice(0, activeResults.firstColumnCount), activeResults.entries.slice(activeResults.firstColumnCount)].map((column, columnIndex) => (
            <ol key={columnIndex} start={columnIndex === 0 ? 1 : activeResults.firstColumnCount + 1}>
              {column.map((entry, index) => {
                const rank = index + (columnIndex === 0 ? 1 : activeResults.firstColumnCount + 1);
                return <li key={`${entry.name}-${rank}`}>
                  <span className="achievement-rank" aria-hidden="true">{String(rank).padStart(2, '0')}</span>
                  <span className="achievement-name">{entry.name}</span>
                  <strong>{entry.score}</strong>
                </li>;
              })}
            </ol>
          ))}
        </div>
      </div>
    </section>
  );
}
