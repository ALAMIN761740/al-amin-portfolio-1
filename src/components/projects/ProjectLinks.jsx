import Button from '../ui/Button.jsx';

export default function ProjectLinks({ project }) {
  const links = [
    { label: 'Live demo', href: project.live, variant: 'primary' },
    { label: 'Source code', href: project.github, variant: 'soft' },
  ];
  const available = links.filter((link) => link.href);

  if (available.length === 0) {
    return <span className="note">Demo and source links coming soon</span>;
  }

  return available.map(({ label, href, variant }) => (
    <Button key={label} href={href} variant={variant} target="_blank" rel="noreferrer">{label}</Button>
  ));
}
