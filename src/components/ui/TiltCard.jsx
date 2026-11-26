import { useRef } from 'react';

// Tilts toward the mouse in 3D. Children can use `translateZ` to float above it.
export default function TiltCard({ max = 8, className = '', children }) {
  const ref = useRef(null);

  function handleMove(event) {
    if (event.pointerType !== 'mouse') return;
    const element = ref.current;
    const box = element.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;

    element.style.setProperty('--rx', `${(0.5 - y) * max}deg`);
    element.style.setProperty('--ry', `${(x - 0.5) * max}deg`);
    element.style.setProperty('--mx', `${x * 100}%`);
    element.style.setProperty('--my', `${y * 100}%`);
  }

  function reset() {
    ref.current.style.setProperty('--rx', '0deg');
    ref.current.style.setProperty('--ry', '0deg');
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}
