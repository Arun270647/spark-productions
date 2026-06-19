import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: '🎬',
      title: 'Film Production',
      description: 'Full-scale production services from concept to final cut, bringing your vision to life with cinematic excellence.'
    },
    {
      icon: '✂️',
      title: 'Post-Production',
      description: 'World-class editing, color grading, VFX, and sound design to perfect every frame of your story.'
    },
    {
      icon: '🎥',
      title: 'Commercial Content',
      description: 'Compelling brand stories and advertisements that capture attention and drive results.'
    },
    {
      icon: '📺',
      title: 'Documentary',
      description: 'Powerful documentary storytelling that illuminates truth and inspires change.'
    },
    {
      icon: '🎭',
      title: 'Creative Direction',
      description: 'Strategic creative leadership to ensure your project resonates with audiences and achieves its goals.'
    },
    {
      icon: '🎨',
      title: 'Visual Effects',
      description: 'Cutting-edge VFX and motion graphics that seamlessly blend reality with imagination.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive production solutions tailored to your vision
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
