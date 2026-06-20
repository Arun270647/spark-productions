const Hero = ({ navWorks, navDirectors }) => {
  return (
    <header
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '150px 40px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-6%',
          transform: 'translateY(-50%)',
          fontFamily: 'Anton',
          fontSize: '46vw',
          lineHeight: 0.8,
          color: '#E01313',
          opacity: 0.06,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-.02em'
        }}
      >
        S
      </div>
      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.25fr .9fr',
          gap: '48px',
          alignItems: 'center',
          maxWidth: '1500px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <div>
          <div
            data-reveal
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '26px'
            }}
          >
            <span style={{ width: '42px', height: '2px', background: '#E01313' }} />
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '.34em',
                textTransform: 'uppercase',
                color: '#9E0A0A'
              }}
            >
              Spark Productions
            </span>
          </div>
          <h1
            data-reveal
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(60px,8.2vw,138px)',
              lineHeight: 0.86,
              letterSpacing: '-.01em',
              textTransform: 'uppercase'
            }}
          >
            We make
            <br />
            short films
            <br />
            that{' '}
            <span style={{ color: '#E01313', position: 'relative' }}>
              burn
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: '.08em',
                  width: '100%',
                  height: '.09em',
                  background: '#E01313'
                }}
              />
            </span>
            .
          </h1>
          <p
            data-reveal
            data-reveal-delay="120"
            style={{
              marginTop: '30px',
              maxWidth: '520px',
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#3a332e',
              fontWeight: 500
            }}
          >
            An independent film collective shooting and showcasing short films on our own labels — and
            building the writing, screenplay and full-production package for emerging directors.
          </p>
          <div
            data-reveal
            data-reveal-delay="220"
            style={{
              display: 'flex',
              gap: '14px',
              marginTop: '38px',
              flexWrap: 'wrap'
            }}
          >
            <a
              onClick={navWorks}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#E01313',
                color: '#F1ECE3',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                padding: '16px 26px',
                borderRadius: '2px',
                boxShadow: '0 10px 30px -10px rgba(224,19,19,.7)'
              }}
            >
              View our works <span>&rarr;</span>
            </a>
            <a
              onClick={navDirectors}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                color: '#100D0B',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                padding: '16px 26px',
                borderRadius: '2px',
                border: '2px solid #100D0B'
              }}
            >
              Submit your film
            </a>
          </div>
        </div>
        <div
          data-reveal
          data-reveal-delay="160"
          style={{
            position: 'relative',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '440px',
              transform: 'rotate(8deg) translate(58px,12px)',
              background: 'linear-gradient(150deg,#C21111,#7a0606)',
              borderRadius: '3px',
              boxShadow: '0 30px 60px -24px rgba(0,0,0,.5)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '22px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.12,
                background:
                  'repeating-linear-gradient(115deg,#000 0 14px,transparent 14px 46px)'
              }}
            />
            <span
              style={{
                fontFamily: 'Anton',
                fontSize: '30px',
                color: 'rgba(255,255,255,.92)',
                lineHeight: 0.9,
                position: 'relative'
              }}
            >
              SANGILI
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '480px',
              borderRadius: '3px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px -28px rgba(0,0,0,.6)',
              background: '#7a0606',
              transform: 'rotate(-4deg)'
            }}
          >
            <img
              src="/assets/atman-poster.jpeg"
              alt="ATMAN poster"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                padding: '14px 16px',
                background: 'linear-gradient(transparent,rgba(0,0,0,.55))',
                color: '#fff',
                fontFamily: 'Oswald',
                fontSize: '12px',
                letterSpacing: '.18em'
              }}
            >
              NOW PREMIERING
            </div>
          </div>
        </div>
      </div>
      <div
        data-reveal
        data-reveal-delay="300"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '26px',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px',
          color: '#9E0A0A'
        }}
      >
        <span
          style={{
            fontFamily: 'Oswald',
            fontSize: '11px',
            letterSpacing: '.28em',
            textTransform: 'uppercase'
          }}
        >
          Scroll
        </span>
        <span style={{ fontSize: '16px', animation: 'scrollHint 1.6s ease-in-out infinite' }}>
          &darr;
        </span>
      </div>
    </header>
  );
};

export default Hero;
