const Services = ({ services }) => {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        background: '#100D0B',
        color: '#F1ECE3',
        padding: '110px 40px'
      }}
    >
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <div data-reveal style={{ marginBottom: '54px' }}>
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
            What we do
          </span>
          <h2
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(44px,6vw,90px)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              marginTop: '12px'
            }}
          >
            The Full Package
          </h2>
          <p
            style={{
              maxWidth: '560px',
              marginTop: '18px',
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(241,236,227,.7)',
              fontWeight: 500
            }}
          >
            From the first blank page to the final cut on screen — we carry stories the whole way
            through.
          </p>
        </div>
        <div>
          {services.map((svc) => (
            <div
              key={svc.no}
              data-reveal
              onMouseEnter={svc.hoverIn}
              onMouseLeave={svc.hoverOut}
              style={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr auto',
                gap: '30px',
                alignItems: 'center',
                padding: '34px 12px',
                borderTop: '1px solid rgba(241,236,227,.14)',
                cursor: 'default',
                transition: 'background .4s ease,padding-left .4s ease'
              }}
            >
              <span style={{ fontFamily: 'Anton', fontSize: '34px', color: '#E01313' }}>
                {svc.no}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'Anton',
                    fontSize: 'clamp(26px,3vw,40px)',
                    lineHeight: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    marginTop: '10px',
                    maxWidth: '640px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'rgba(241,236,227,.65)',
                    fontWeight: 500
                  }}
                >
                  {svc.desc}
                </p>
              </div>
              <span style={{ fontSize: '26px', color: 'rgba(241,236,227,.4)' }}>&rarr;</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(241,236,227,.14)' }} />
        </div>
      </div>
    </section>
  );
};

export default Services;
