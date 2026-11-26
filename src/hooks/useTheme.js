import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Reveals the new theme as a circle growing from the toggle button,
  // in browsers that support View Transitions.
  function toggleTheme(event) {
    const next = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked; the theme still changes for this visit.
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduced) {
      setTheme(next);
      return;
    }

    const root = document.documentElement;
    root.style.setProperty('--reveal-x', `${event.clientX}px`);
    root.style.setProperty('--reveal-y', `${event.clientY}px`);
    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
      root.dataset.theme = next;
    });
  }

  return { theme, toggleTheme };
}
