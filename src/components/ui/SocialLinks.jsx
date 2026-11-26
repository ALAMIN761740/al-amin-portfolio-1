import { profile } from '../../data/profile.js';
import { CodeIcon, MailIcon, PersonIcon } from './Icons.jsx';

const links = [
  { label: 'GitHub', href: profile.github, Icon: CodeIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: PersonIcon },
  { label: 'Email', href: profile.email && `mailto:${profile.email}`, Icon: MailIcon },
];

export default function SocialLinks() {
  return (
    <ul className="socials">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          {href ? (
            <a className="social" href={href} target="_blank" rel="noreferrer">
              <Icon /> {label}
            </a>
          ) : (
            <span className="social social--empty" title={`${label} link not added yet`}>
              <Icon /> {label} <small>not added</small>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
