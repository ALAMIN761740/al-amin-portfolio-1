import { useState } from 'react';
import { profile } from '../../data/profile.js';
import TiltCard from '../ui/TiltCard.jsx';

const ORBIT = ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind', 'Git'];
const CUBE_FACES = ['< >', '{ }', 'JS', 'TS', '( )', '[ ]'];

export default function HeroScene() {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <div className="scene">
      <div className="scene__glow" aria-hidden="true" />

      <TiltCard max={16} className="portrait glass">
        <div className="portrait__image">
          {photoMissing ? (
            <div className="portrait__placeholder">
              <strong>AA</strong>
              <span>Your photo goes here</span>
            </div>
          ) : (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoMissing(true)} />
          )}
        </div>
        <div className="portrait__badge liquid">
          <strong>{profile.name}</strong>
          <span>{profile.title}</span>
        </div>
      </TiltCard>

      {/* A ring of labels that passes in front of and behind the portrait. */}
      <div className="orbit" aria-hidden="true">
        <div className="orbit__ring">
          {ORBIT.map((name, index) => (
            <span key={name} className="orbit__item" style={{ '--angle': `${(360 / ORBIT.length) * index}deg` }}>
              <span className="orbit__chip">{name}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="cube" aria-hidden="true">
        <div className="cube__body">
          {CUBE_FACES.map((face) => <span key={face}>{face}</span>)}
        </div>
      </div>
    </div>
  );
}
