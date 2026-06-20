import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GrainOverlay from './GrainOverlay';

const Layout = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 60);

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Hide navbar when scrolling down past 100px
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
            el.style.transitionDelay = delay + 'ms';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const setupReveals = () => {
      requestAnimationFrame(() => {
        document.querySelectorAll('[data-reveal]').forEach((el) => {
          if (el.__revealInit) return;
          el.__revealInit = true;
          el.style.opacity = '0';
          el.style.transform = 'translateY(26px)';
          el.style.transition =
            'opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1)';
          observer.observe(el);
        });
      });
    };

    setupReveals();

    // Re-run on location change for page transitions
    const timeout = setTimeout(setupReveals, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isFilmDetail = location.pathname.startsWith('/works/');

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <GrainOverlay />
      {!isFilmDetail && <Nav navRef={navRef} scrolled={scrolled} visible={visible} />}
      <main>
        <Outlet />
      </main>
      {!isFilmDetail && <Footer />}
    </div>
  );
};

export default Layout;
