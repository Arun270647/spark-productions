const TitleMarquee = ({ text }) => {
  return (
    <div
      style={{
        background: '#100D0B',
        color: '#F1ECE3',
        padding: '24px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          animation: 'sparkMarquee 26s linear infinite',
          willChange: 'transform'
        }}
      >
        <span
          style={{
            fontFamily: 'Anton',
            fontSize: '30px',
            letterSpacing: '.08em'
          }}
        >
          {text}
        </span>
        <span
          style={{
            fontFamily: 'Anton',
            fontSize: '30px',
            letterSpacing: '.08em'
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TitleMarquee;
