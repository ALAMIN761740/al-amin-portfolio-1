// Slow ambient light and a perspective grid behind the whole page.
export default function Background() {
  return (
    <div className="background" aria-hidden="true">
      <span className="orb orb--one" />
      <span className="orb orb--two" />
      <span className="grid-floor" />
    </div>
  );
}
