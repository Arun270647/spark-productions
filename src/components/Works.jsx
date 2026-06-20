const Works = ({ films }) => {
  return (
    <section
      id="works"
      style={{
        position: 'relative',
        padding: '110px 40px 100px',
        maxWidth: '1500px',
        margin: '0 auto'
      }}
    >
      <div
        data-reveal
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '50px'
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '14px'
            }}
          >
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
              04 films on board
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(44px,6vw,90px)',
              lineHeight: 0.9,
              textTransform: 'uppercase'
            }}
          >
            Our Works
          </h2>
        </div>
        <p
          style={{
            maxWidth: '360px',
            fontSize: '15px',
            lineHeight: 1.6,
            color: '#3a332e',
            fontWeight: 500
          }}
        >
          Stories built on our own labels — premiered, streamed, and made to be felt. Click any film
          to step inside.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '26px' }}>
        {films.map((film) => (
          <div
            key={film.slug}
            data-reveal
            onClick={film.open}
            onMouseEnter={film.hoverIn}
            onMouseLeave={film.hoverOut}
            style={{
              position: 'relative',
              cursor: 'pointer',
              background: '#FBF8F2',
              border: '1px solid rgba(16,13,11,.08)',
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease'
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '420px',
                overflow: 'hidden',
                background: '#100D0B'
              }}
            >
              {film.poster ? (
                <img
                  src={film.poster}
                  alt={film.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform .7s cubic-bezier(.2,.8,.2,1)'
                  }}
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: film.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.13,
                      background:
                        'repeating-linear-gradient(118deg,#000 0 16px,transparent 16px 52px)'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Anton',
                      fontSize: 'clamp(30px,4vw,54px)',
                      color: 'rgba(255,255,255,.9)',
                      textAlign: 'center',
                      lineHeight: 0.92,
                      padding: '0 18px',
                      position: 'relative'
                    }}
                  >
                    {film.title}
                  </span>
                </div>
              )}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  fontFamily: 'Anton',
                  fontSize: '18px',
                  color: '#F1ECE3',
                  background: 'rgba(16,13,11,.55)',
                  backdropFilter: 'blur(4px)',
                  padding: '4px 11px',
                  borderRadius: '2px'
                }}
              >
                {film.no}
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontFamily: 'Oswald',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '.16em',
                  color: '#fff',
                  background: '#E01313',
                  padding: '6px 11px',
                  borderRadius: '2px'
                }}
              >
                {film.status}
              </div>
            </div>
            <div style={{ padding: '24px 24px 26px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Anton',
                    fontSize: '30px',
                    lineHeight: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  {film.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'Oswald',
                    fontSize: '14px',
                    color: '#9E0A0A',
                    letterSpacing: '.1em'
                  }}
                >
                  {film.year}
                </span>
              </div>
              <div
                style={{
                  marginTop: '6px',
                  fontFamily: 'Oswald',
                  fontSize: '12px',
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: '#E01313'
                }}
              >
                {film.genre}
              </div>
              <p
                style={{
                  marginTop: '14px',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  color: '#3a332e',
                  fontWeight: 500
                }}
              >
                {film.logline}
              </p>
              <div
                style={{
                  marginTop: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: '#100D0B'
                }}
              >
                View film <span style={{ color: '#E01313' }}>&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
