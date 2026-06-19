import { useState, useEffect, useRef } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Works from './components/Works';
import Services from './components/Services';
import About from './components/About';
import Directors from './components/Directors';
import Footer from './components/Footer';
import FilmDetail from './components/FilmDetail';

function App() {
  const [activeFilm, setActiveFilm] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveFilm(null);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'smooth'
        });
      }
    });
  };

  const openFilm = (film) => {
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0 });
    setActiveFilm(film);
  };

  const closeFilm = () => {
    document.body.style.overflow = '';
    setActiveFilm(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeFilm();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="app">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      <Nav scrollY={scrollY} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Marquee />
      <Works openFilm={openFilm} />
      <Services />
      <About scrollToSection={scrollToSection} />
      <Directors />
      <Footer scrollToSection={scrollToSection} />

      {activeFilm && (
        <FilmDetail film={activeFilm} closeFilm={closeFilm} />
      )}
    </div>
  );
}

export default App;
