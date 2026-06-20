const About = () => {
  return (
    <section id="about" style={{ position: 'relative', padding: '120px 40px' }}>
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
              04
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
              Films on board
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
              01
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
              Independent label
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
        <div
          data-reveal
          data-reveal-delay="260"
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontFamily: 'Oswald',
            fontSize: '13px',
            letterSpacing: '.24em',
            textTransform: 'uppercase',
            color: '#9E0A0A'
          }}
        >
          The collective &mdash; Spark · Sivam · Santhanam · Arun
        </div>
      </div>
    </section>
  );
};

export default About;
