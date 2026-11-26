import { useEffect, useState } from 'react';
import HeroScene from '../components/three/HeroScene.jsx';
import Button from '../components/ui/Button.jsx';
import { ArrowIcon, DownloadIcon } from '../components/ui/Icons.jsx';
import SocialLinks from '../components/ui/SocialLinks.jsx';
import { profile } from '../data/profile.js';
import { scrollToSection } from '../lib/scroll.js';

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return <span key={index} className="role">{profile.roles[index]}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="hero wrap" tabIndex={-1}>
      <div className="hero__text">
        <p className="hero__eyebrow rise"><RotatingRole /></p>
        <h1 className="rise" style={{ '--delay': '80ms' }}>Hi, I&apos;m {profile.name}.</h1>
        <p className="hero__headline gradient-text rise" style={{ '--delay': '180ms' }}>
          I build modern web experiences.
        </p>
        <p className="hero__intro rise" style={{ '--delay': '280ms' }}>{profile.intro}</p>

        {profile.openToWork && (
          <p className="status"><i /> Open to junior frontend developer opportunities</p>
        )}

        <div className="actions rise" style={{ '--delay': '380ms' }}>
          <Button href="#projects" variant="primary" onClick={(event) => scrollToSection(event, 'projects')}>
            View my projects <ArrowIcon />
          </Button>
          {profile.resume ? (
            <Button href={profile.resume} download><DownloadIcon /> Download resume</Button>
          ) : (
            <Button disabled title="Résumé not added yet"><DownloadIcon /> Resume coming soon</Button>
          )}
          <Button href="#contact" variant="ghost" onClick={(event) => scrollToSection(event, 'contact')}>
            Contact me
          </Button>
        </div>

        <div className="rise" style={{ '--delay': '480ms' }}><SocialLinks /></div>
      </div>

      <HeroScene />
    </section>
  );
}
