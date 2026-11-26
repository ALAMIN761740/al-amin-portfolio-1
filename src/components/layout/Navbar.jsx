import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { scrollToSection } from '../../lib/scroll.js';
import { CloseIcon, MenuIcon } from '../ui/Icons.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
const label = (id) => id[0].toUpperCase() + id.slice(1);

export default function Navbar({ theme, onToggleTheme }) {
  const active = useActiveSection(SECTIONS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blob, setBlob] = useState({ left: 0, width: 0 });
  const listRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Moves the liquid glass highlight under the active link.
  useLayoutEffect(() => {
    function place() {
      const link = listRef.current?.querySelector(`[data-id="${active}"]`);
      if (link) setBlob({ left: link.offsetLeft, width: link.offsetWidth });
    }
    place();
    document.fonts?.ready.then(place);
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [active]);

  function go(event, id) {
    setOpen(false);
    scrollToSection(event, id);
  }

  const renderLink = (id) => (
    <a href={`#${id}`} data-id={id} onClick={(event) => go(event, id)}
      aria-current={active === id ? 'true' : undefined}>
      {label(id)}
    </a>
  );

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav__bar wrap" aria-label="Main">
        <a href="#home" className="logo" onClick={(event) => go(event, 'home')}>
          AL AMIN<span>.</span>
        </a>

        <ul className="nav__links" ref={listRef}>
          <li className="nav__blob liquid" style={{ transform: `translateX(${blob.left}px)`, width: blob.width }} aria-hidden="true" />
          {SECTIONS.map((id) => <li key={id}>{renderLink(id)}</li>)}
        </ul>

        <div className="nav__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contact" className="button button--primary nav__cta" onClick={(event) => go(event, 'contact')}>
            Let&apos;s talk
          </a>
          <button type="button" className="icon-button nav__menu-button" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <ul id="mobile-menu" className={`nav__mobile liquid ${open ? 'is-open' : ''}`}>
        {SECTIONS.map((id, index) => (
          <li key={id} style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }}>{renderLink(id)}</li>
        ))}
      </ul>
    </header>
  );
}
