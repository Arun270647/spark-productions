import '../styles/Marquee.css';

function Marquee() {
  const awards = [
    'CANNES FILM FESTIVAL',
    'SUNDANCE WINNER',
    'TRIBECA OFFICIAL SELECTION',
    'BERLIN INTERNATIONAL',
    'VENICE FILM FESTIVAL',
    'TORONTO INTL FILM FESTIVAL'
  ];

  return (
    <div className="marquee">
      <div className="marquee-content">
        {[...awards, ...awards].map((award, index) => (
          <span key={index} className="marquee-item">
            <span className="award-star">★</span>
            {award}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
