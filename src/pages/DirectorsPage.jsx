import { useState } from 'react';

const DirectorsPage = () => {
  const [formState, setFormState] = useState({
    fName: '',
    fEmail: '',
    fTitle: '',
    fLog: '',
    submitted: false,
    thanksName: '',
    formError: ''
  });

  const submit = () => {
    const { fName, fEmail, fTitle, fLog } = formState;
    if (!fName.trim() || !fEmail.trim() || !fTitle.trim() || !fLog.trim()) {
      setFormState({
        ...formState,
        formError: 'Fill every field — we want the whole spark.'
      });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fEmail.trim())) {
      setFormState({
        ...formState,
        formError: "That email doesn't look right."
      });
      return;
    }
    setFormState({
      ...formState,
      submitted: true,
      thanksName: fName.trim() ? ', ' + fName.trim().split(' ')[0] : '',
      formError: ''
    });
  };

  const resetForm = () => {
    setFormState({
      fName: '',
      fEmail: '',
      fTitle: '',
      fLog: '',
      submitted: false,
      formError: '',
      thanksName: ''
    });
  };

  return (
    <section
      style={{
        position: 'relative',
        background: '#E01313',
        color: '#F1ECE3',
        padding: '110px 40px',
        overflow: 'hidden',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-4%',
          fontFamily: 'Anton',
          fontSize: '34vw',
          lineHeight: 0.8,
          color: 'rgba(255,255,255,.06)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        SUBMIT
      </div>
      <div
        style={{
          position: 'relative',
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start'
        }}
      >
        <div data-reveal>
          <span
            style={{
              fontFamily: 'Oswald',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.75)'
            }}
          >
            For emerging directors
          </span>
          <h2
            style={{
              fontFamily: 'Anton',
              fontSize: 'clamp(40px,5.4vw,82px)',
              lineHeight: 0.92,
              textTransform: 'uppercase',
              marginTop: '14px'
            }}
          >
            Got a film
            <br />
            in you?
          </h2>
          <p
            style={{
              maxWidth: '460px',
              marginTop: '22px',
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,.85)',
              fontWeight: 500
            }}
          >
            Pitch us your short. If the idea sparks, we'll bring the script doctoring, the crew, the
            gear and a label to release it on. No agents, no gatekeepers — just the work.
          </p>
          <ul
            style={{
              marginTop: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              listStyle: 'none'
            }}
          >
            <li
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span style={{ fontFamily: 'Anton', color: '#100D0B' }}>→</span> Script & screenplay
              development
            </li>
            <li
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span style={{ fontFamily: 'Anton', color: '#100D0B' }}>→</span> Full production crew &
              equipment
            </li>
            <li
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span style={{ fontFamily: 'Anton', color: '#100D0B' }}>→</span> Premiere & streaming on
              our labels
            </li>
          </ul>
        </div>
        <div
          data-reveal
          data-reveal-delay="120"
          style={{
            background: '#F1ECE3',
            color: '#100D0B',
            borderRadius: '5px',
            padding: '34px',
            boxShadow: '0 40px 80px -30px rgba(0,0,0,.5)'
          }}
        >
          {!formState.submitted ? (
            <div>
              <h3
                style={{
                  fontFamily: 'Anton',
                  fontSize: '26px',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}
              >
                Pitch your short
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: '#6B6259',
                  marginBottom: '22px',
                  fontWeight: 500
                }}
              >
                Tell us the spark. We read everything.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span
                      style={{
                        fontFamily: 'Oswald',
                        fontSize: '11px',
                        letterSpacing: '.16em',
                        textTransform: 'uppercase',
                        color: '#6B6259'
                      }}
                    >
                      Your name
                    </span>
                    <input
                      value={formState.fName}
                      onInput={(e) => setFormState({ ...formState, fName: e.target.value })}
                      placeholder="Director name"
                      style={{
                        fontFamily: 'Archivo',
                        fontSize: '15px',
                        padding: '13px 14px',
                        border: '1.5px solid rgba(16,13,11,.16)',
                        borderRadius: '3px',
                        background: '#fff',
                        outline: 'none'
                      }}
                    />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span
                      style={{
                        fontFamily: 'Oswald',
                        fontSize: '11px',
                        letterSpacing: '.16em',
                        textTransform: 'uppercase',
                        color: '#6B6259'
                      }}
                    >
                      Email
                    </span>
                    <input
                      value={formState.fEmail}
                      onInput={(e) => setFormState({ ...formState, fEmail: e.target.value })}
                      placeholder="you@email.com"
                      style={{
                        fontFamily: 'Archivo',
                        fontSize: '15px',
                        padding: '13px 14px',
                        border: '1.5px solid rgba(16,13,11,.16)',
                        borderRadius: '3px',
                        background: '#fff',
                        outline: 'none'
                      }}
                    />
                  </label>
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <span
                    style={{
                      fontFamily: 'Oswald',
                      fontSize: '11px',
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: '#6B6259'
                    }}
                  >
                    Film title
                  </span>
                  <input
                    value={formState.fTitle}
                    onInput={(e) => setFormState({ ...formState, fTitle: e.target.value })}
                    placeholder="Working title"
                    style={{
                      fontFamily: 'Archivo',
                      fontSize: '15px',
                      padding: '13px 14px',
                      border: '1.5px solid rgba(16,13,11,.16)',
                      borderRadius: '3px',
                      background: '#fff',
                      outline: 'none'
                    }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <span
                    style={{
                      fontFamily: 'Oswald',
                      fontSize: '11px',
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: '#6B6259'
                    }}
                  >
                    Logline
                  </span>
                  <textarea
                    value={formState.fLog}
                    onInput={(e) => setFormState({ ...formState, fLog: e.target.value })}
                    placeholder="One or two lines — what's the spark?"
                    rows="3"
                    style={{
                      fontFamily: 'Archivo',
                      fontSize: '15px',
                      padding: '13px 14px',
                      border: '1.5px solid rgba(16,13,11,.16)',
                      borderRadius: '3px',
                      background: '#fff',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </label>
                {formState.formError && (
                  <div style={{ fontSize: '13px', color: '#E01313', fontWeight: 700 }}>
                    {formState.formError}
                  </div>
                )}
                <button
                  onClick={submit}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: '#100D0B',
                    color: '#F1ECE3',
                    fontWeight: 800,
                    fontSize: '14px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    padding: '16px',
                    borderRadius: '3px',
                    transition: 'background .3s'
                  }}
                >
                  Send the pitch &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '38px 10px' }}>
              <div
                style={{
                  fontFamily: 'Anton',
                  fontSize: '54px',
                  color: '#E01313',
                  lineHeight: 1
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontFamily: 'Anton',
                  fontSize: '30px',
                  textTransform: 'uppercase',
                  marginTop: '14px'
                }}
              >
                Pitch received
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#3a332e',
                  marginTop: '10px',
                  fontWeight: 500,
                  maxWidth: '340px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                Thanks{formState.thanksName} — your spark is in. We'll be in touch if it lights up the
                room.
              </p>
              <button
                onClick={resetForm}
                style={{
                  marginTop: '24px',
                  cursor: 'pointer',
                  border: '2px solid #100D0B',
                  background: 'transparent',
                  color: '#100D0B',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '12px 22px',
                  borderRadius: '3px'
                }}
              >
                Pitch another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DirectorsPage;
