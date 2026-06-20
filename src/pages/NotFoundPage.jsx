import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
        background: '#F1ECE3'
      }}
    >
      <div
        style={{
          fontFamily: 'Anton',
          fontSize: 'clamp(80px,15vw,180px)',
          lineHeight: 0.9,
          color: '#E01313',
          marginBottom: '20px'
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: 'Anton',
          fontSize: 'clamp(32px,5vw,60px)',
          lineHeight: 1,
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontSize: '18px',
          lineHeight: 1.6,
          color: '#3a332e',
          fontWeight: 500,
          maxWidth: '500px',
          marginBottom: '40px'
        }}
      >
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          style={{
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
            textDecoration: 'none',
            boxShadow: '0 10px 30px -10px rgba(224,19,19,.7)'
          }}
        >
          Go Home
        </Link>
        <Link
          to="/works"
          style={{
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
            border: '2px solid #100D0B',
            textDecoration: 'none'
          }}
        >
          View Our Works
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
