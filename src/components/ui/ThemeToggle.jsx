import { MoonIcon, SunIcon } from './Icons.jsx';

export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button type="button" className="icon-button" onClick={onToggle} aria-label={`Switch to ${next} mode`}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
