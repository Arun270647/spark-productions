import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <section
      style={{
        position: 'relative',
        background: '#100D0B',
        color: '#F1ECE3',
        padding: '120px 40px 80px',
        minHeight: '100vh'
      }}
    >
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '40px',
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(241,236,227,.12)'
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(40px,5vw,72px)',
                lineHeight: 0.92,
                textTransform: 'uppercase'
              }}
            >
              Let's make
              <br />
              something
              <br />
              <span style={{ color: '#E01313' }}>that burns.</span>
            </h2>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Oswald',
                fontSize: '12px',
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#E01313',
                marginBottom: '16px'
              }}
            >
              Reach us
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '15px',
                fontWeight: 500
              }}
            >
              <a href="#" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                YouTube — Spark Productions
              </a>
              <a href="#" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                Instagram — @sparkproductions
              </a>
              <a href="#" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                hello@sparkproductions.in
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Oswald',
                fontSize: '12px',
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#E01313',
                marginBottom: '16px'
              }}
            >
              Explore
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '15px',
                fontWeight: 500
              }}
            >
              <Link to="/works" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                Our Works
              </Link>
              <Link to="/services" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                Services
              </Link>
              <Link to="/directors" style={{ color: '#F1ECE3', textDecoration: 'none' }}>
                Submit a film
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '26px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
            <span
              style={{
                display: 'inline-flex',
                width: '26px',
                height: '26px',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#E01313',
                color: '#F1ECE3',
                fontFamily: 'Anton',
                fontSize: '16px',
                borderRadius: '2px'
              }}
            >
              S
            </span>
            <span
              style={{
                fontFamily: 'Anton',
                fontSize: '17px',
                letterSpacing: '.04em'
              }}
            >
              SPARK PRODUCTIONS
            </span>
          </div>
          <span
            style={{
              fontSize: '12px',
              color: 'rgba(241,236,227,.5)',
              letterSpacing: '.04em'
            }}
          >
            © 2026 Spark Productions. All stories reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
