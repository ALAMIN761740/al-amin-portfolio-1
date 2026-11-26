import SkillSphere from '../components/three/SkillSphere.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { projects } from '../data/projects.js';
import { learning, skillGroups } from '../data/skills.js';

const allNames = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));

// A skill is marked only if a project in projects.js lists it.
const usedInProjects = new Set(projects.flatMap((project) => project.tech));

export default function Skills() {
  return (
    <section id="skills" className="section wrap" tabIndex={-1}>
      <SectionHeading number="02" label="Tech stack" title="Technologies I" highlight="work with">
        Drag the sphere to turn it. A blue dot means the technology appears in one of the projects below.
      </SectionHeading>

      <div className="skills">
        <Reveal from="zoom"><SkillSphere names={allNames} /></Reveal>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name} className="key">
                    <span className="key__mark" aria-hidden="true">{skill.mark}</span>
                    {skill.name}
                    {usedInProjects.has(skill.name) && (
                      <span className="key__dot" role="img" aria-label="used in projects" />
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="learning glass">
            <h3>Currently learning</h3>
            <ul className="tags">
              {learning.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
