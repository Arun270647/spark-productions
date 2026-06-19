import '../styles/Directors.css';

function Directors() {
  const directors = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      bio: 'Award-winning filmmaker with 20+ years of experience in narrative cinema.',
      awards: ['Cannes Palm d\'Or', 'Sundance Grand Jury Prize']
    },
    {
      name: 'James Chen',
      role: 'Director of Photography',
      bio: 'Renowned cinematographer known for breathtaking visual storytelling.',
      awards: ['ASC Award', 'BAFTA Nominee']
    },
    {
      name: 'Maya Patel',
      role: 'Head of Production',
      bio: 'Producer behind multiple critically acclaimed independent films.',
      awards: ['Independent Spirit Award', 'Producer\'s Guild Honor']
    }
  ];

  return (
    <section className="directors" id="directors">
      <div className="directors-container">
        <div className="section-header">
          <h2 className="section-title">Our Directors</h2>
          <p className="section-subtitle">
            Meet the visionaries behind our award-winning productions
          </p>
        </div>

        <div className="directors-grid">
          {directors.map((director, index) => (
            <div
              key={index}
              className="director-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="director-image-wrapper">
                <div className="director-image-placeholder">
                  {director.name.charAt(0)}
                </div>
              </div>
              <div className="director-info">
                <h3 className="director-name">{director.name}</h3>
                <p className="director-role">{director.role}</p>
                <p className="director-bio">{director.bio}</p>
                <div className="director-awards">
                  {director.awards.map((award, i) => (
                    <span key={i} className="award-badge">
                      ★ {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Directors;
