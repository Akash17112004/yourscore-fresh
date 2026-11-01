type Seg = { t: string; b: boolean; i: boolean };
type Block = { k: 'h2' | 'h3' | 'p'; t?: string; s?: Seg[] } | { k: 'ul'; i: Seg[][] };

const Inline = ({ segs }: { segs: Seg[] }) => (
  <>{segs.map((s, n) => (s.b ? <strong key={n}>{s.t}</strong> : s.i ? <em key={n}>{s.t}</em> : <span key={n}>{s.t}</span>))}</>
);

export default function LegalDocument({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, n) => {
        if (b.k === 'h2') return <h2 key={n}>{b.t}</h2>;
        if (b.k === 'h3') return <h3 key={n}>{b.t}</h3>;
        if (b.k === 'ul') return <ul key={n}>{b.i.map((it, m) => <li key={m}><Inline segs={it} /></li>)}</ul>;
        return <p key={n}><Inline segs={b.s ?? []} /></p>;
      })}
    </>
  );
}
