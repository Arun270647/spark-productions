import { useState } from 'react';

const FilmDetail = ({ detail, closeFilm }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!detail) return null;

  const images = detail.gallery || (detail.poster ? [detail.poster] : []);
  const hasGallery = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        background: '#F1ECE3',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 30px',
          background: 'rgba(241,236,227,.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(16,13,11,.08)'
        }}
      >
        <a
          onClick={closeFilm}
          style={{
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 800,
            fontSize: '13px',
            letterSpacing: '.1em',
            textTransform: 'uppercase'
          }}
        >
          <span style={{ color: '#E01313' }}>&larr;</span> Back to works
        </a>
        <span
          style={{
            fontFamily: 'Anton',
            fontSize: '16px',
            letterSpacing: '.04em'
          }}
        >
          SPARK<span style={{ color: '#E01313' }}>.</span>
        </span>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '88vh'
        }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: detail.bg,
            minHeight: '60vh'
          }}
        >
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`${detail.title} - ${currentImageIndex + 1}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {hasGallery && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(241,236,227,0.9)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#E01313',
                      transition: 'all 0.3s ease',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E01313';
                      e.currentTarget.style.color = '#F1ECE3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(241,236,227,0.9)';
                      e.currentTarget.style.color = '#E01313';
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(241,236,227,0.9)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#E01313',
                      transition: 'all 0.3s ease',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E01313';
                      e.currentTarget.style.color = '#F1ECE3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(241,236,227,0.9)';
                      e.currentTarget.style.color = '#E01313';
                    }}
                  >
                    ›
                  </button>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '8px',
                      zIndex: 2
                    }}
                  >
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        style={{
                          width: currentImageIndex === idx ? '32px' : '10px',
                          height: '10px',
                          borderRadius: '5px',
                          background: currentImageIndex === idx ? '#E01313' : 'rgba(241,236,227,0.6)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
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
                  opacity: 0.14,
                  background:
                    'repeating-linear-gradient(118deg,#000 0 18px,transparent 18px 58px)'
                }}
              />
              <span
                style={{
                  fontFamily: 'Anton',
                  fontSize: 'clamp(44px,7vw,96px)',
                  color: 'rgba(255,255,255,.92)',
                  textAlign: 'center',
                  lineHeight: 0.9,
                  padding: '0 24px',
                  position: 'relative'
                }}
              >
                {detail.title}
              </span>
            </div>
          )}
        </div>
        <div
          style={{
            padding: '64px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '18px'
            }}
          >
            <span
              style={{
                fontFamily: 'Oswald',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#E01313',
                padding: '6px 12px',
                borderRadius: '2px'
              }}
            >
              {detail.status}
            </span>
            <span
              style={{
                fontFamily: 'Oswald',
                fontSize: '13px',
                letterSpacing: '.18em',
                color: '#9E0A0A'
              }}
            >
              {detail.no} / 04
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(56px,7vw,120px)',
              lineHeight: 0.84,
              textTransform: 'uppercase',
              letterSpacing: '-.01em'
            }}
          >
            {detail.title}
          </h1>
          <div
            style={{
              marginTop: '14px',
              display: 'flex',
              gap: '18px',
              alignItems: 'center',
              fontFamily: 'Oswald',
              fontSize: '14px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#3a332e'
            }}
          >
            <span>{detail.year}</span>
            <span style={{ color: '#E01313' }}>●</span>
            <span>{detail.genre}</span>
          </div>
          <p
            style={{
              marginTop: '26px',
              fontSize: '21px',
              lineHeight: 1.5,
              fontWeight: 600,
              maxWidth: '520px'
            }}
          >
            {detail.logline}
          </p>
          <p
            style={{
              marginTop: '18px',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#3a332e',
              fontWeight: 500,
              maxWidth: '540px'
            }}
          >
            {detail.synopsis}
          </p>

          {detail.hasDates && (
            <div
              style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {detail.dates.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: '#FBF8F2',
                    borderLeft: '3px solid #E01313',
                    borderRadius: '2px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Anton',
                      fontSize: '20px',
                      color: '#E01313'
                    }}
                  >
                    {d.d}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#3a332e'
                    }}
                  >
                    {d.l}
                  </span>
                </div>
              ))}
            </div>
          )}

          {detail.credit && (
            <div
              style={{
                marginTop: '30px',
                paddingTop: '22px',
                borderTop: '1px solid rgba(16,13,11,.12)'
              }}
            >
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '11px',
                  letterSpacing: '.22em',
                  textTransform: 'uppercase',
                  color: '#6B6259',
                  marginBottom: '7px'
                }}
              >
                Credits
              </div>
              <div
                style={{
                  fontFamily: 'Oswald',
                  fontSize: '15px',
                  letterSpacing: '.06em',
                  color: '#100D0B'
                }}
              >
                {detail.credit}
              </div>
            </div>
          )}

          <div
            style={{
              marginTop: '34px',
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#E01313',
                color: '#F1ECE3',
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                padding: '15px 24px',
                borderRadius: '2px'
              }}
            >
              Watch on YouTube &rarr;
            </a>
            <a
              onClick={closeFilm}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '2px solid #100D0B',
                color: '#100D0B',
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                padding: '15px 24px',
                borderRadius: '2px'
              }}
            >
              All films
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
