import { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import ProjectModal from '../components/projects/ProjectModal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section wrap" tabIndex={-1}>
      <SectionHeading number="03" label="Selected work" title="Projects I've been" highlight="building">
        A collection of projects that represent my learning, creativity, and development journey.
      </SectionHeading>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
