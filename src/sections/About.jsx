import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import TiltCard from '../components/ui/TiltCard.jsx';
import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section id="about" className="section wrap" tabIndex={-1}>
      <SectionHeading number="01" label="About me" title="A little about" highlight="my journey" />

      <div className="about">
        <Reveal from="left" className="about__text">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>

        <ul className="about__facts">
          {profile.facts.map((fact, index) => (
            <Reveal as="li" from="flip" delay={index * 110} key={fact.label}>
              <TiltCard max={14} className="fact glass">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
