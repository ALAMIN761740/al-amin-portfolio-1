import { profile } from '../../data/profile.js';
import { scrollToSection } from '../../lib/scroll.js';
import { UpIcon } from '../ui/Icons.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';

const LINKS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Footer() {
  return (
    <footer className="footer wrap">
      <div>
        <p className="logo">AL AMIN<span>.</span></p>
        <p>{profile.title}. Building modern digital experiences with creativity and code.</p>
      </div>

      <nav aria-label="Footer">
        {LINKS.map((id) => (
          <a key={id} href={`#${id}`} onClick={(event) => scrollToSection(event, id)}>
            {id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <SocialLinks />

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#home" className="button button--soft" onClick={(event) => scrollToSection(event, 'home')}>
          <UpIcon /> Back to top
        </a>
      </div>
    </footer>
  );
}
