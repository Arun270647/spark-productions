const GrainOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: '-20%',
        zIndex: 60,
        pointerEvents: 'none',
        opacity: 0.05,
        mixBlendMode: 'multiply',
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')",
        animation: 'grain 1.2s steps(4) infinite'
      }}
    />
  );
};

export default GrainOverlay;
