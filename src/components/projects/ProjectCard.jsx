import { useScrollVar } from '../../hooks/useScrollVar.js';
import Button from '../ui/Button.jsx';
import { ArrowIcon } from '../ui/Icons.jsx';
import TiltCard from '../ui/TiltCard.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectPreview from './ProjectPreview.jsx';

export default function ProjectCard({ project, onOpen }) {
  // The card swings up from a 3D angle as it scrolls into view.
  const ref = useScrollVar({ start: 1, end: 0.55 });

  return (
    <div ref={ref} className="project-stage">
      <article className="project">
        <TiltCard max={5} className="project__card glass">
          <div className="project__visual">
            <ProjectPreview project={project} />
          </div>

          <div className="project__body">
            <p className="project__category">{project.category}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <ul className="tags">
              {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>

            <div className="actions">
              <Button onClick={() => onOpen(project)}>View details <ArrowIcon /></Button>
              <ProjectLinks project={project} />
            </div>
          </div>
        </TiltCard>
      </article>
    </div>
  );
}
