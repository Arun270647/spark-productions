import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TitleMarquee from '../components/TitleMarquee';
import { films, services, getFilmStats } from '../data/filmsData';
import { teamMembers } from '../data/teamData';

const HomePage = () => {
  const navigate = useNavigate();
  const stats = getFilmStats();
  const featuredFilms = films.filter(f => f.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <TitleMarquee text="ATMAN  ✦  SANGILI  ✦  SOUNDU SIMBU  ✦  WRITER'S TIMES  ✦  " />

      {/* Stats Section */}
      <section style={{ padding: '80px 40px', background: '#100D0B', color: '#F1ECE3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontFamily: 'Anton', fontSize: '58px', color: '#E01313', lineHeight: 1 }}>
                {stats.totalFilms}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(241,236,227,.7)',
                  marginTop: '8px'
                }}
              >
                Films Produced
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Anton', fontSize: '58px', color: '#E01313', lineHeight: 1 }}>
                {stats.totalViews}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(241,236,227,.7)',
                  marginTop: '8px'
                }}
              >
                Total Views
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Anton', fontSize: '58px', color: '#E01313', lineHeight: 1 }}>
                {stats.awards}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(241,236,227,.7)',
                  marginTop: '8px'
                }}
              >
                Awards Won
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Anton', fontSize: '58px', color: '#E01313', lineHeight: 1 }}>
                {stats.totalLikes}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(241,236,227,.7)',
                  marginTop: '8px'
                }}
              >
                Community Likes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section style={{ padding: '100px 40px', background: '#F1ECE3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '50px', textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                color: '#E01313'
              }}
            >
              Our Work
            </span>
            <h2
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(44px,6vw,72px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              Featured Films
            </h2>
            <p
              style={{
                maxWidth: '560px',
                margin: '18px auto 0',
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#3a332e',
                fontWeight: 500
              }}
            >
              Stories that push boundaries and challenge conventions
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredFilms.map((film, idx) => (
              <div
                key={film.slug}
                data-reveal
                data-reveal-delay={idx * 100}
                onClick={() => navigate(`/works/${film.slug}`)}
                style={{
                  background: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(16,13,11,.08)',
                  transition: 'transform .4s ease, box-shadow .4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px -20px rgba(224,19,19,.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    height: '280px',
                    background: film.poster ? `url(${film.poster})` : film.bg,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                >
                  {!film.poster && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: film.bg
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Anton',
                          fontSize: '32px',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '0 20px'
                        }}
                      >
                        {film.title}
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      fontFamily: 'Oswald',
                      fontSize: '10px',
                      letterSpacing: '.14em',
                      color: '#fff',
                      background: '#E01313',
                      padding: '5px 10px',
                      borderRadius: '2px',
                      fontWeight: 600
                    }}
                  >
                    {film.status}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ fontFamily: 'Oswald', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#E01313', marginBottom: '8px' }}>
                    {film.genre}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Anton',
                      fontSize: '28px',
                      textTransform: 'uppercase',
                      marginBottom: '12px'
                    }}
                  >
                    {film.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#3a332e' }}>
                    {film.logline}
                  </p>
                  <div
                    style={{
                      marginTop: '18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Learn More <span style={{ color: '#E01313' }}>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              onClick={() => navigate('/works')}
              style={{
                fontFamily: 'Oswald',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                background: '#E01313',
                color: '#F1ECE3',
                border: 'none',
                cursor: 'pointer',
                transition: 'background .3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#9E0A0A'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#E01313'}
            >
              View All Films
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '100px 40px', background: '#100D0B', color: '#F1ECE3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '50px', textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                color: '#E01313'
              }}
            >
              What We Do
            </span>
            <h2
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(44px,6vw,72px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              Our Services
            </h2>
            <p
              style={{
                maxWidth: '560px',
                margin: '18px auto 0',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'rgba(241,236,227,.7)',
                fontWeight: 500
              }}
            >
              From script to screen — we handle every aspect of production
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {services.map((svc, idx) => (
              <div
                key={svc.no}
                data-reveal
                data-reveal-delay={idx * 80}
                style={{
                  background: 'rgba(241,236,227,.05)',
                  padding: '32px',
                  border: '1px solid rgba(241,236,227,.12)',
                  borderRadius: '4px',
                  transition: 'background .3s ease, border-color .3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(224,19,19,.1)';
                  e.currentTarget.style.borderColor = 'rgba(224,19,19,.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(241,236,227,.05)';
                  e.currentTarget.style.borderColor = 'rgba(241,236,227,.12)';
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{svc.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Anton',
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'rgba(241,236,227,.8)',
                    marginBottom: '16px'
                  }}
                >
                  {svc.desc}
                </p>
                <div style={{ fontSize: '12px', color: 'rgba(241,236,227,.5)' }}>
                  Timeline: <span style={{ color: '#E01313', fontWeight: 700 }}>{svc.timeline}</span>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              onClick={() => navigate('/services')}
              style={{
                fontFamily: 'Oswald',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                background: '#E01313',
                color: '#F1ECE3',
                border: 'none',
                cursor: 'pointer',
                transition: 'background .3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#9E0A0A'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#E01313'}
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Team Glimpse */}
      <section style={{ padding: '100px 40px', background: '#F1ECE3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '50px', textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                color: '#E01313'
              }}
            >
              The Team
            </span>
            <h2
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(44px,6vw,72px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              Meet The Collective
            </h2>
            <p
              style={{
                maxWidth: '560px',
                margin: '18px auto 0',
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#3a332e',
                fontWeight: 500
              }}
            >
              A crew of storytellers, technicians, and dreamers
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {[...teamMembers].sort((a, b) => a.order - b.order).map((member, idx) => (
              <div
                key={member.id}
                data-reveal
                data-reveal-delay={idx * 60}
                style={{
                  background: '#fff',
                  padding: '32px',
                  borderRadius: '4px',
                  border: '1px solid rgba(16,13,11,.08)',
                  textAlign: 'center',
                  transition: 'transform .3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px',
                    display: 'block'
                  }}
                />
                <h4 style={{ fontFamily: 'Anton', fontSize: '20px', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {member.name}
                </h4>
                <p
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '11px',
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    color: '#E01313',
                    marginBottom: '12px'
                  }}
                >
                  {member.title}
                </p>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#6B6259' }}>
                  {member.bio.split('.')[0]}.
                </p>
              </div>
            ))}
          </div>

          <div data-reveal style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              onClick={() => navigate('/about')}
              style={{
                fontFamily: 'Oswald',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                background: '#E01313',
                color: '#F1ECE3',
                border: 'none',
                cursor: 'pointer',
                transition: 'background .3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#9E0A0A'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#E01313'}
            >
              Meet The Full Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 40px', background: '#E01313', color: '#F1ECE3', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            data-reveal
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(40px,5vw,64px)',
              lineHeight: 1,
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}
          >
            Ready to Tell Your Story?
          </h2>
          <p
            data-reveal
            data-reveal-delay="80"
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              marginBottom: '40px',
              color: 'rgba(241,236,227,.9)'
            }}
          >
            Whether you have a script ready or just an idea, we're here to bring it to life. Let's create something
            extraordinary together.
          </p>
          <div
            data-reveal
            data-reveal-delay="160"
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => navigate('/contact')}
              style={{
                fontFamily: 'Oswald',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '18px 40px',
                background: '#100D0B',
                color: '#F1ECE3',
                border: 'none',
                cursor: 'pointer',
                transition: 'background .3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2a2520'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#100D0B'}
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate('/services')}
              style={{
                fontFamily: 'Oswald',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '18px 40px',
                background: 'transparent',
                color: '#F1ECE3',
                border: '2px solid #F1ECE3',
                cursor: 'pointer',
                transition: 'background .3s ease, color .3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F1ECE3';
                e.currentTarget.style.color = '#E01313';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#F1ECE3';
              }}
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
