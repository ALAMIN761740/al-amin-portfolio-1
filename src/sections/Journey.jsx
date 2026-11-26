import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { journey } from '../data/journey.js';
import { useScrollVar } from '../hooks/useScrollVar.js';

export default function Journey() {
  // start === end makes --progress follow the full height of the list.
  const ref = useScrollVar({ start: 0.65, end: 0.65 });

  return (
    <section id="journey" className="section wrap" tabIndex={-1}>
      <SectionHeading number="04" label="My journey" title="My development" highlight="journey">
        Learning, building, and growing one step at a time.
      </SectionHeading>

      <ol ref={ref} className="timeline">
        {journey.map((step, index) => (
          <Reveal as="li" from={index % 2 ? 'swing-right' : 'swing-left'} key={step.title} className="timeline__item">
            <span className="timeline__node" aria-hidden="true">{index + 1}</span>
            <div className="timeline__card glass">
              <h3>{step.title}</h3>
              {step.date && <time>{step.date}</time>}
              <p>{step.text}</p>
              <ul className="tags">
                {step.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
