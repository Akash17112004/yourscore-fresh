'use client';
import { useRef, type ReactNode } from 'react';

export default function StoryCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.story-card');
    const step = (card?.offsetWidth ?? 340) + 20;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  return (
    <div className="story-carousel">
      <div className="story-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous stories">&larr;</button>
        <button type="button" onClick={() => move(1)} aria-label="Next stories">&rarr;</button>
      </div>
      <div className="story-rail" ref={ref} tabIndex={0} role="region" aria-label="Student stories, use left and right arrow keys to scroll" onKeyDown={(e) => { if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } }}>
        {children}
      </div>
    </div>
  );
}
