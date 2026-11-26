import Reveal from './Reveal.jsx';

export default function SectionHeading({ number, label, title, highlight, children }) {
  return (
    <Reveal className="heading">
      <p className="heading__label">{number} / {label}</p>
      <h2>{title} <span className="gradient-text">{highlight}</span></h2>
      {children && <p className="heading__text">{children}</p>}
    </Reveal>
  );
}
