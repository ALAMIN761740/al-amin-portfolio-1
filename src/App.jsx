import Background from './components/layout/Background.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import { useTheme } from './hooks/useTheme.js';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Journey from './sections/Journey.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
