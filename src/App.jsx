import { useState, useEffect, useRef } from 'react';
import GrainOverlay from './components/GrainOverlay';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TitleMarquee from './components/TitleMarquee';
import Works from './components/Works';
import Services from './components/Services';
import About from './components/About';
import Directors from './components/Directors';
import Footer from './components/Footer';
import FilmDetail from './components/FilmDetail';

function App() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [detailSlug, setDetailSlug] = useState(null);
  const [formState, setFormState] = useState({
    fName: '',
    fEmail: '',
    fTitle: '',
    fLog: '',
    submitted: false,
    thanksName: '',
    formError: ''
  });

  const films = [
    {
      slug: 'atman',
      no: '01',
      title: 'ATMAN',
      year: '2026',
      genre: 'Sci-fi / Drama',
      status: 'PREMIERE',
      poster: '/assets/atman-poster.jpeg',
      bg: '#7a0606',
      logline: 'A man reincarnated through his own time-loop power — stuck in time, lost across worlds.',
      synopsis:
        'Trapped in a loop he can no longer control, a man begins to reincarnate across timelines, each life a fragment of the last. As the loops collapse into one another, he must decide which version of himself is worth surviving.',
      credit: 'Spark · Sivam · Santa · Arun · Gokul',
      dates: [
        { d: '06.03.2026', l: 'Special Premiere' },
        { d: '11.04.2026', l: 'Streaming on Spark Productions YouTube' }
      ]
    },
    {
      slug: 'sangili',
      no: '02',
      title: 'SANGILI',
      year: '2025',
      genre: 'Social Drama',
      status: 'IN POST',
      poster: null,
      bg: 'linear-gradient(150deg,#C21111,#6e0505)',
      logline: 'Oppression versus suppression — a searing reckoning with caste and the chains that bind.',
      synopsis:
        'In a town where the old order refuses to die, two worlds collide over dignity, land and belonging. Sangili confronts the brutal arithmetic of caste and the cost of simply standing upright.',
      credit: '',
      dates: []
    },
    {
      slug: 'soundu-simbu',
      no: '03',
      title: 'SOUNDU SIMBU',
      year: '2025',
      genre: 'Comedy',
      status: 'IN PRODUCTION',
      poster: null,
      bg: 'linear-gradient(150deg,#E01313,#8a0808)',
      logline: 'A drunken man and his friends stumble into one unforgettable, riotous night ride.',
      synopsis:
        'One bottle, a handful of friends and a night with no brakes. What begins as an ordinary drink spirals into a tender, laugh-out-loud ride through a city that never quite sleeps.',
      credit: '',
      dates: []
    },
    {
      slug: 'writers-times',
      no: '04',
      title: "WRITER'S TIMES",
      year: '2024',
      genre: 'Psychological Drama',
      status: 'RELEASED',
      poster: null,
      bg: 'linear-gradient(150deg,#9E0A0A,#3a0303)',
      logline: 'A writer sinks deeper into delusion as his creative world swallows him whole.',
      synopsis:
        "Convinced his next page will change everything, a writer slips further from the real world with every draft. As deadlines blur into delusion, Writer's Times asks where craft ends and madness begins.",
      credit: '',
      dates: []
    }
  ];

  const services = [
    {
      no: '01',
      title: 'Short Film Production',
      desc: 'End-to-end production on our own labels — direction, crew, gear, edit and colour. We shoot it and we show it.'
    },
    {
      no: '02',
      title: 'Scriptwriting',
      desc: 'Original stories and ground-up script development, from a one-line spark to a shootable draft.'
    },
    {
      no: '03',
      title: 'Screenplay',
      desc: 'Scene work, structure and dialogue polish — turning a strong idea into a screenplay that plays on screen.'
    },
    {
      no: '04',
      title: 'The Full Package',
      desc: 'Script to screen for emerging directors: writing, screenplay, crew, equipment and a label to release on.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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

    const handleKeyDown = (ev) => {
      if (ev.key === 'Escape') closeFilm();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    closeFilm();
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el)
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'smooth'
        });
    });
  };

  const openFilm = (slug) => {
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0 });
    setDetailSlug(slug);
  };

  const closeFilm = () => {
    document.body.style.overflow = '';
    if (detailSlug) setDetailSlug(null);
  };

  const submit = () => {
    const { fName, fEmail, fTitle, fLog } = formState;
    if (!fName.trim() || !fEmail.trim() || !fTitle.trim() || !fLog.trim()) {
      setFormState({
        ...formState,
        formError: 'Fill every field — we want the whole spark.'
      });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fEmail.trim())) {
      setFormState({
        ...formState,
        formError: "That email doesn't look right."
      });
      return;
    }
    setFormState({
      ...formState,
      submitted: true,
      thanksName: fName.trim() ? ', ' + fName.trim().split(' ')[0] : '',
      formError: ''
    });
  };

  const resetForm = () => {
    setFormState({
      fName: '',
      fEmail: '',
      fTitle: '',
      fLog: '',
      submitted: false,
      formError: '',
      thanksName: ''
    });
  };

  const filmsWithHandlers = films.map((f) => ({
    ...f,
    noPoster: !f.poster,
    open: () => openFilm(f.slug),
    hoverIn: (e) => {
      const c = e.currentTarget;
      c.style.transform = 'translateY(-8px)';
      c.style.boxShadow = '0 30px 60px -28px rgba(224,19,19,.5)';
      const img = c.querySelector('img');
      if (img) img.style.transform = 'scale(1.06)';
    },
    hoverOut: (e) => {
      const c = e.currentTarget;
      c.style.transform = 'translateY(0)';
      c.style.boxShadow = 'none';
      const img = c.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    }
  }));

  const servicesWithHandlers = services.map((s) => ({
    ...s,
    hoverIn: (e) => {
      e.currentTarget.style.background = 'rgba(224,19,19,.1)';
      e.currentTarget.style.paddingLeft = '26px';
    },
    hoverOut: (e) => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.paddingLeft = '12px';
    }
  }));

  const detail = films.find((f) => f.slug === detailSlug) || null;
  const detailView = detail
    ? {
        ...detail,
        noPoster: !detail.poster,
        hasDates: detail.dates && detail.dates.length > 0
      }
    : null;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <GrainOverlay />
      <Nav
        navRef={navRef}
        scrolled={scrolled}
        goHome={() => scrollTo('home')}
        navWorks={() => scrollTo('works')}
        navServices={() => scrollTo('services')}
        navAbout={() => scrollTo('about')}
        navDirectors={() => scrollTo('directors')}
        navContact={() => scrollTo('contact')}
      />
      <Hero navWorks={() => scrollTo('works')} navDirectors={() => scrollTo('directors')} />
      <TitleMarquee text="ATMAN  ✦  SANGILI  ✦  SOUNDU SIMBU  ✦  WRITER'S TIMES  ✦  " />
      <Works films={filmsWithHandlers} />
      <Services services={servicesWithHandlers} />
      <About />
      <Directors
        formState={formState}
        handlers={{
          setName: (e) => setFormState({ ...formState, fName: e.target.value }),
          setEmail: (e) => setFormState({ ...formState, fEmail: e.target.value }),
          setTitle: (e) => setFormState({ ...formState, fTitle: e.target.value }),
          setLog: (e) => setFormState({ ...formState, fLog: e.target.value }),
          submit,
          resetForm
        }}
      />
      <Footer
        navWorks={() => scrollTo('works')}
        navServices={() => scrollTo('services')}
        navDirectors={() => scrollTo('directors')}
      />
      <FilmDetail detail={detailView} closeFilm={closeFilm} />
    </div>
  );
}

export default App;
