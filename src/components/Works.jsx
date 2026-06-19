import { useState, useEffect } from 'react';
import { filmsData } from '../data/filmsData';
import '../styles/Works.css';

function Works({ openFilm }) {
  const [filter, setFilter] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState(filmsData);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredFilms(filmsData);
    } else {
      setFilteredFilms(filmsData.filter(film => film.category === filter));
    }
  }, [filter]);

  return (
    <section className="works" id="works">
      <div className="works-container">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">
            A showcase of our most celebrated films and productions
          </p>
        </div>

        <div className="works-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'feature' ? 'active' : ''}`}
            onClick={() => setFilter('feature')}
          >
            Features
          </button>
          <button
            className={`filter-btn ${filter === 'short' ? 'active' : ''}`}
            onClick={() => setFilter('short')}
          >
            Shorts
          </button>
          <button
            className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
            onClick={() => setFilter('commercial')}
          >
            Commercials
          </button>
        </div>

        <div className="works-grid">
          {filteredFilms.map((film, index) => (
            <div
              key={film.id}
              className="work-card"
              onClick={() => openFilm(film)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="work-image-wrapper">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="work-image"
                />
                <div className="work-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{film.title}</h3>
                <p className="work-meta">
                  {film.year} • {film.duration}
                </p>
                <div className="work-tags">
                  {film.genres.slice(0, 2).map((genre, i) => (
                    <span key={i} className="work-tag">{genre}</span>
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

export default Works;
