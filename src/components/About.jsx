import '../styles/About.css';

function About({ scrollToSection }) {
  const stats = [
    { number: '50+', label: 'Films Produced' },
    { number: '25+', label: 'Awards Won' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Spark</h2>
            <p className="about-description">
              Founded in 2009, Spark Productions has been at the forefront
              of cinematic storytelling, creating award-winning films that
              resonate with audiences worldwide.
            </p>
            <p className="about-description">
              Our team of passionate filmmakers, writers, and visual artists
              brings decades of combined experience to every project. We believe
              in the power of stories to connect, inspire, and transform.
            </p>
            <p className="about-description">
              From intimate character studies to grand visual spectacles, we
              approach each project with the same dedication to craft and
              innovation that has defined our work.
            </p>
            <button
              className="about-cta"
              onClick={() => scrollToSection('contact')}
            >
              Work With Us
            </button>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
