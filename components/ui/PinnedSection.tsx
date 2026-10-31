import type { ReactNode } from 'react';

// Pinning caused janky scrolling, so this is now a plain wrapper.
export default function PinnedSection({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
