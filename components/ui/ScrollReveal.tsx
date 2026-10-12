'use client';
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ScrollTrigger adds avoidable work on touch devices. Content remains fully
    // visible there, while the reveal treatment is preserved for larger screens.
    const motionOK = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
    if (!motionOK) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
