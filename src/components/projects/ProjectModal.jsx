import { useEffect, useRef } from 'react';
import { CloseIcon } from '../ui/Icons.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectPreview from './ProjectPreview.jsx';

// Native <dialog> handles focus trapping, Escape and focus return.
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    ref.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  return (
    <dialog ref={ref} className="modal" onClose={onClose} aria-labelledby="modal-title"
      onClick={(event) => event.target === ref.current && ref.current.close()}>
      <div className="modal__panel">
        <button type="button" className="icon-button modal__close" onClick={() => ref.current.close()} aria-label="Close details">
          <CloseIcon />
        </button>

        <ProjectPreview project={project} />
        <h3 id="modal-title">{project.name}</h3>
        <p className="project__category">{project.category}</p>
        <p>{project.description}</p>

        <h4>Key features</h4>
        <ul className="features">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>

        <h4>My contribution</h4>
        <p>{project.contribution || 'Details will be added soon.'}</p>

        <h4>Technologies</h4>
        <ul className="tags">
          {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>

        <div className="actions"><ProjectLinks project={project} /></div>
      </div>
    </dialog>
  );
}
