import { useEffect, useState } from 'react';
import '../styles/Hero.css';

function Hero({ scrollToSection }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div
          className="hero-gradient"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Crafting Stories</span>
          <span className="title-line">That Move</span>
          <span className="title-line highlight">Hearts & Minds</span>
        </h1>
        <p className="hero-subtitle">
          Award-winning film production house creating cinematic experiences
          that transcend boundaries
        </p>
        <div className="hero-cta">
          <button
            className="cta-primary"
            onClick={() => scrollToSection('works')}
          >
            View Our Work
          </button>
          <button
            className="cta-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
