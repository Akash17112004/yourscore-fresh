type Props = { score: string; school: string; name: string; quote: string };

export default function TestimonialCard({ score, school, name, quote }: Props) {
  return (
    <figure className="story-card">
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <figcaption>
        <span className="story-school">{school}</span>
        <span className="story-meta"><b>{name}</b><span className="story-score">{score}</span></span>
      </figcaption>
    </figure>
  );
}
