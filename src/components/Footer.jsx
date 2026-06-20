import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        background: '#100D0B',
        color: '#F1ECE3',
        padding: '90px 40px 36px'
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
              <a
                href="https://youtube.com/@sparkproduction09?si=OF7bq6xJwTQ2nuyo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F1ECE3', textDecoration: 'none', transition: 'color .3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E01313'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F1ECE3'}
              >
                YouTube — Spark Productions
              </a>
              <a
                href="https://www.instagram.com/spark_productionsoffl?igsh=YjZyZ21hcnp2bjdo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F1ECE3', textDecoration: 'none', transition: 'color .3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E01313'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F1ECE3'}
              >
                Instagram — @spark_productionsoffl
              </a>
              <a
                href="mailto:sparkproductions09@gmail.com"
                style={{ color: '#F1ECE3', textDecoration: 'none', transition: 'color .3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E01313'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#F1ECE3'}
              >
                sparkproductions09@gmail.com
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
    </footer>
  );
};

export default Footer;
