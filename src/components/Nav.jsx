import { useState, useEffect } from 'react';
import '../styles/Nav.css';

function Nav({ scrollY, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-spark">SPARK</span>
          <span className="logo-productions">PRODUCTIONS</span>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => handleNavClick('works')}>Works</a></li>
          <li><a onClick={() => handleNavClick('services')}>Services</a></li>
          <li><a onClick={() => handleNavClick('about')}>About</a></li>
          <li><a onClick={() => handleNavClick('directors')}>Directors</a></li>
          <li><a onClick={() => handleNavClick('contact')} className="contact-btn">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
