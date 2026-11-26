// A real screenshot when available, otherwise a labelled layout illustration.
export default function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="preview">
        <img src={project.image} alt={`Screenshot of ${project.name}`} loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`preview mock mock--${project.layout}`} role="img" aria-label={`Placeholder illustration for ${project.name}`}>
      <div className="mock__window">
        <div className="mock__top"><i /><i /><i /></div>
        <div className="mock__body">
          <b className="mock__hero" />
          <b /><b /><b />
        </div>
      </div>
      <div className="mock__float" />
      <span className="mock__note">Illustration. Screenshot to be added.</span>
    </div>
  );
}
