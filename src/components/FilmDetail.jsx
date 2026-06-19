import { useEffect } from 'react';
import '../styles/FilmDetail.css';

function FilmDetail({ film, closeFilm }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeFilm();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeFilm]);

  if (!film) return null;

  return (
    <div className="film-detail-overlay" onClick={closeFilm}>
      <div className="film-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeFilm} aria-label="Close">
          ✕
        </button>

        <div className="film-detail-content">
          <div className="film-detail-hero">
            <img
              src={film.poster}
              alt={film.title}
              className="film-detail-poster"
            />
            <div className="film-detail-header">
              <h2 className="film-detail-title">{film.title}</h2>
              <div className="film-detail-meta">
                <span>{film.year}</span>
                <span>•</span>
                <span>{film.duration}</span>
                <span>•</span>
                <span className="film-rating">{film.rating}</span>
              </div>
              <div className="film-detail-genres">
                {film.genres.map((genre, index) => (
                  <span key={index} className="genre-tag">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="film-detail-body">
            <div className="film-section">
              <h3 className="section-heading">Synopsis</h3>
              <p className="film-description">{film.description}</p>
            </div>

            <div className="film-section">
              <h3 className="section-heading">Director's Note</h3>
              <p className="director-note">{film.directorNote}</p>
            </div>

            {film.awards && film.awards.length > 0 && (
              <div className="film-section">
                <h3 className="section-heading">Awards & Recognition</h3>
                <div className="awards-list">
                  {film.awards.map((award, index) => (
                    <div key={index} className="award-item">
                      <span className="award-icon">🏆</span>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="film-section">
              <h3 className="section-heading">Credits</h3>
              <div className="credits-grid">
                <div className="credit-item">
                  <span className="credit-label">Director</span>
                  <span className="credit-value">{film.director}</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Cinematographer</span>
                  <span className="credit-value">{film.cinematographer}</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Producer</span>
                  <span className="credit-value">{film.producer}</span>
                </div>
                <div className="credit-item">
                  <span className="credit-label">Editor</span>
                  <span className="credit-value">{film.editor}</span>
                </div>
              </div>
            </div>

            {film.trailer && (
              <div className="film-section">
                <button className="watch-trailer-btn">
                  ▶ Watch Trailer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
