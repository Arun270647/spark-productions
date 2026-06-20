import { teamMembers, advisors } from '../data/teamData';
import { testimonials, getFeaturedTestimonials } from '../data/testimonialsData';
import { getFilmStats } from '../data/filmsData';

const AboutPage = () => {
  const featuredTestimonials = getFeaturedTestimonials();
  const stats = getFilmStats();

  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '120px 40px 80px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: '18px' }}>
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
              Who we are
            </span>
          </div>
          <h2
            data-reveal
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(32px,4.4vw,64px)',
              lineHeight: 1.04,
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '-.01em'
            }}
          >
            A collective that believes a single
            <br />
            spark can <span style={{ color: '#E01313' }}>light a whole reel</span>.
          </h2>
          <p
            data-reveal
            data-reveal-delay="120"
            style={{
              maxWidth: '720px',
              margin: '34px auto 0',
              textAlign: 'center',
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#3a332e',
              fontWeight: 500
            }}
          >
            Spark Productions is an independent studio that writes, shoots and releases short films on
            its own labels. We back bold ideas — reincarnation loops, caste and conscience, drunken
            midnight rides, writers losing themselves to their craft — and we give emerging directors
            the crew, the script and the screen to tell them.
          </p>

          {/* Stats */}
          <div
            data-reveal
            data-reveal-delay="200"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '34px',
              justifyContent: 'center',
              marginTop: '50px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Anton',
                  fontSize: '58px',
                  color: '#E01313',
                  lineHeight: 1
                }}
              >
                {stats.totalFilms}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#6B6259',
                  marginTop: '4px'
                }}
              >
                Films produced
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(16,13,11,.12)' }} />
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Anton',
                  fontSize: '58px',
                  color: '#E01313',
                  lineHeight: 1
                }}
              >
                {stats.totalViews}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#6B6259',
                  marginTop: '4px'
                }}
              >
                Total views
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(16,13,11,.12)' }} />
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Anton',
                  fontSize: '58px',
                  color: '#E01313',
                  lineHeight: 1
                }}
              >
                {stats.awards}
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#6B6259',
                  marginTop: '4px'
                }}
              >
                Festival awards
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(16,13,11,.12)' }} />
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Anton',
                  fontSize: '58px',
                  color: '#E01313',
                  lineHeight: 1
                }}
              >
                ∞
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: '#6B6259',
                  marginTop: '4px'
                }}
              >
                Stories to tell
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 40px', background: '#FBF8F2' }}>
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
              The Collective
            </span>
            <h3
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(36px,5vw,56px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              Meet the Team
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                data-reveal
                data-reveal-delay={idx * 80}
                style={{
                  background: '#fff',
                  padding: '32px',
                  borderRadius: '4px',
                  border: '1px solid rgba(16,13,11,.08)',
                  transition: 'transform .3s ease, box-shadow .3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -20px rgba(224,19,19,.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#E01313',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Anton',
                    fontSize: '32px',
                    color: '#F1ECE3',
                    marginBottom: '20px'
                  }}
                >
                  {member.name.charAt(0)}
                </div>
                <h4
                  style={{
                    fontFamily: 'Anton',
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}
                >
                  {member.name}
                </h4>
                <p
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '12px',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: '#E01313',
                    marginBottom: '16px'
                  }}
                >
                  {member.title}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#3a332e',
                    marginBottom: '16px'
                  }}
                >
                  {member.bio}
                </p>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#6B6259',
                    fontStyle: 'italic',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(16,13,11,.08)'
                  }}
                >
                  "{member.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '80px 40px', background: '#100D0B', color: '#F1ECE3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              What People Say
            </span>
            <h3
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(36px,5vw,56px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              Testimonials
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {featuredTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                data-reveal
                data-reveal-delay={idx * 100}
                style={{
                  background: 'rgba(241,236,227,.05)',
                  padding: '32px',
                  borderRadius: '4px',
                  border: '1px solid rgba(241,236,227,.12)'
                }}
              >
                <div style={{ fontSize: '40px', color: '#E01313', lineHeight: 1 }}>"</div>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    color: 'rgba(241,236,227,.9)'
                  }}
                >
                  {testimonial.quote}
                </p>
                <div style={{ borderTop: '1px solid rgba(241,236,227,.12)', paddingTop: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '4px' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(241,236,227,.6)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section style={{ padding: '60px 40px', background: '#F1ECE3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div data-reveal style={{ marginBottom: '30px' }}>
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                color: '#E01313'
              }}
            >
              Advisory Board
            </span>
          </div>
          <div
            data-reveal
            data-reveal-delay="120"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '50px',
              flexWrap: 'wrap'
            }}
          >
            {advisors.map((advisor) => (
              <div key={advisor.name} style={{ maxWidth: '250px' }}>
                <div
                  style={{
                    fontFamily: 'Anton',
                    fontSize: '18px',
                    marginBottom: '6px'
                  }}
                >
                  {advisor.name}
                </div>
                <div
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '11px',
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    color: '#E01313',
                    marginBottom: '8px'
                  }}
                >
                  {advisor.role}
                </div>
                <div style={{ fontSize: '13px', color: '#6B6259' }}>{advisor.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
