import { services } from '../data/filmsData';
import { productionProcess, timeline } from '../data/processData';
import { faqs, faqCategories } from '../data/faqData';
import { useState } from 'react';

const ServicesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const servicesWithHandlers = services.map((s) => ({
    ...s,
    hoverIn: (e) => {
      e.currentTarget.style.background = 'rgba(224,19,19,.1)';
      e.currentTarget.style.paddingLeft = '26px';
    },
    hoverOut: (e) => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.paddingLeft = '12px';
    }
  }));

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <>
      {/* Services Overview */}
      <section
        style={{
          position: 'relative',
          background: '#100D0B',
          color: '#F1ECE3',
          padding: '110px 40px',
          minHeight: '60vh'
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
            {servicesWithHandlers.map((svc) => (
              <div
                key={svc.no}
                data-reveal
                onMouseEnter={svc.hoverIn}
                onMouseLeave={svc.hoverOut}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr auto',
                  gap: '30px',
                  alignItems: 'start',
                  padding: '34px 12px',
                  borderTop: '1px solid rgba(241,236,227,.14)',
                  cursor: 'pointer',
                  transition: 'background .4s ease,padding-left .4s ease'
                }}
              >
                <span style={{ fontFamily: 'Anton', fontSize: '34px', color: '#E01313' }}>
                  {svc.no}
                </span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{svc.icon}</span>
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
                  </div>
                  <p
                    style={{
                      marginBottom: '20px',
                      maxWidth: '640px',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'rgba(241,236,227,.65)',
                      fontWeight: 500
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px' }}>
                    <div>
                      <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#E01313', marginBottom: '10px' }}>
                        Features
                      </div>
                      <ul style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(241,236,227,.8)', listStyle: 'none', padding: 0 }}>
                        {svc.features?.map((feature, idx) => (
                          <li key={idx} style={{ paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: '#E01313' }}>•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#E01313', marginBottom: '10px' }}>
                        Deliverables
                      </div>
                      <ul style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(241,236,227,.8)', listStyle: 'none', padding: 0 }}>
                        {svc.deliverables?.map((item, idx) => (
                          <li key={idx} style={{ paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: '#E01313' }}>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '30px' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: 'rgba(241,236,227,.5)' }}>Timeline: </span>
                      <span style={{ fontSize: '14px', fontWeight: 700 }}>{svc.timeline}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: 'rgba(241,236,227,.5)' }}>Starting at: </span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#E01313' }}>{svc.startingPrice}</span>
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: '26px', color: 'rgba(241,236,227,.4)' }}>&rarr;</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(241,236,227,.14)' }} />
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section style={{ padding: '100px 40px', background: '#F1ECE3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '60px', textAlign: 'center' }}>
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
              Our Process
            </span>
            <h3
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(36px,5vw,64px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              How We Work
            </h3>
            <p style={{ fontSize: '16px', color: '#6B6259', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
              Our proven 7-step process takes your project from concept to completion
            </p>
          </div>

          <div style={{ display: 'grid', gap: '30px' }}>
            {productionProcess.map((step, idx) => (
              <div
                key={step.step}
                data-reveal
                data-reveal-delay={idx * 60}
                style={{
                  background: '#fff',
                  padding: '32px',
                  borderRadius: '4px',
                  border: '1px solid rgba(16,13,11,.08)',
                  borderLeft: '4px solid #E01313'
                }}
              >
                <div style={{ display: 'flex', gap: '24px', alignItems: 'start' }}>
                  <div
                    style={{
                      fontFamily: 'Anton',
                      fontSize: '48px',
                      color: '#E01313',
                      lineHeight: 1,
                      minWidth: '60px'
                    }}
                  >
                    {step.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <h4
                        style={{
                          fontFamily: 'Anton',
                          fontSize: '28px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {step.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'Oswald',
                          fontSize: '13px',
                          letterSpacing: '.14em',
                          textTransform: 'uppercase',
                          color: '#E01313',
                          background: 'rgba(224,19,19,.1)',
                          padding: '6px 12px',
                          borderRadius: '3px'
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#3a332e', marginBottom: '20px' }}>
                      {step.description}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#6B6259', marginBottom: '8px', fontWeight: 700 }}>
                          Deliverables
                        </div>
                        <ul style={{ fontSize: '14px', lineHeight: 1.6, color: '#3a332e', paddingLeft: '20px', margin: 0 }}>
                          {step.deliverables.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#6B6259', marginBottom: '8px', fontWeight: 700 }}>
                          Activities
                        </div>
                        <ul style={{ fontSize: '14px', lineHeight: 1.6, color: '#3a332e', paddingLeft: '20px', margin: 0 }}>
                          {step.activities.slice(0, 4).map((activity, i) => (
                            <li key={i}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 40px', background: '#100D0B', color: '#F1ECE3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: '60px', textAlign: 'center' }}>
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
              Common Questions
            </span>
            <h3
              style={{
                fontFamily: 'Anton',
                fontSize: 'clamp(36px,5vw,64px)',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                marginTop: '12px'
              }}
            >
              FAQ
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.slice(0, 10).map((faq, idx) => (
              <div
                key={faq.id}
                data-reveal
                data-reveal-delay={idx * 40}
                style={{
                  background: 'rgba(241,236,227,.05)',
                  border: '1px solid rgba(241,236,227,.12)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background .2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(224,19,19,.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#E01313',
                        marginRight: '12px'
                      }}
                    >
                      {faq.category}
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 600 }}>{faq.question}</span>
                  </div>
                  <span style={{ fontSize: '20px', color: '#E01313' }}>
                    {expandedFaq === faq.id ? '−' : '+'}
                  </span>
                </div>
                {expandedFaq === faq.id && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'rgba(241,236,227,.8)'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
