import { useEffect, useRef } from 'react';

// Writes how far an element has travelled into the screen (0 to 1) to the
// CSS variable --progress, without re-rendering React.
export function useScrollVar({ start = 1, end = 0.5 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    let frame = 0;

    function measure() {
      frame = 0;
      const { top, height } = element.getBoundingClientRect();
      const from = window.innerHeight * start;
      const to = window.innerHeight * end;
      const distance = from - to || height;
      const progress = Math.min(1, Math.max(0, (from - top) / distance));
      element.style.setProperty('--progress', progress.toFixed(3));
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [start, end]);

  return ref;
}
