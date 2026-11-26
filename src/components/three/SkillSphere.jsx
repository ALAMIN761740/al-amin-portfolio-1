import { useEffect, useRef } from 'react';

// Spreads points evenly over a sphere (Fibonacci lattice).
function spherePoints(count) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - ((i + 0.5) / count) * 2;
    const radius = Math.sqrt(1 - y * y);
    return [Math.cos(golden * i) * radius, y, Math.sin(golden * i) * radius];
  });
}

export default function SkillSphere({ names }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const items = [...element.querySelectorAll('.sphere__item')];
    const points = spherePoints(items.length);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const idleSpeed = reduced ? 0 : 0.0035;

    let angleX = -0.3;
    let angleY = 0;
    let velocityX = 0;
    let velocityY = idleSpeed;
    let drag = null;
    let frame = 0;

    function draw() {
      const radius = element.clientWidth * 0.4;
      const [sinX, cosX, sinY, cosY] = [Math.sin(angleX), Math.cos(angleX), Math.sin(angleY), Math.cos(angleY)];

      items.forEach((item, i) => {
        const [x, y, z] = points[i];
        const x1 = x * cosY + z * sinY;
        const z1 = z * cosY - x * sinY;
        const y1 = y * cosX - z1 * sinX;
        const depth = (y * sinX + z1 * cosX + 1) / 2; // 0 = back, 1 = front

        item.style.transform = `translate(-50%, -50%) translate(${x1 * radius}px, ${y1 * radius}px) scale(${0.65 + depth * 0.45})`;
        item.style.opacity = 0.25 + depth * 0.75;
        item.style.zIndex = Math.round(depth * 100);
      });
    }

    function tick() {
      if (!drag) {
        angleX += velocityX;
        angleY += velocityY;
        velocityX *= 0.95;
        velocityY += (idleSpeed - velocityY) * 0.03;
      }
      draw();
      frame = requestAnimationFrame(tick);
    }

    function onDown(event) {
      drag = { x: event.clientX, y: event.clientY };
      element.setPointerCapture(event.pointerId);
    }

    function onMove(event) {
      if (!drag) return;
      velocityY = (event.clientX - drag.x) * 0.006;
      velocityX = (drag.y - event.clientY) * 0.006;
      angleY += velocityY;
      angleX += velocityX;
      drag = { x: event.clientX, y: event.clientY };
    }

    const onUp = () => { drag = null; };

    // Only animate while the sphere is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) frame = requestAnimationFrame(tick);
    });

    draw();
    observer.observe(element);
    element.addEventListener('pointerdown', onDown);
    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerup', onUp);
    element.addEventListener('pointercancel', onUp);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.removeEventListener('pointerdown', onDown);
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerup', onUp);
      element.removeEventListener('pointercancel', onUp);
    };
  }, [names]);

  return (
    // Decorative: the same skills are listed as text next to it.
    <div ref={ref} className="sphere" aria-hidden="true">
      <span className="sphere__core" />
      {names.map((name) => <span key={name} className="sphere__item liquid">{name}</span>)}
    </div>
  );
}
