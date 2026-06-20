import { Link, NavLink } from 'react-router-dom';

const Nav = ({ navRef, scrolled, visible = true }) => {
  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '14px 40px' : '20px 40px',
        transition: 'background .4s ease, box-shadow .4s ease, padding .4s ease, transform .3s ease',
        background: scrolled ? 'rgba(241,236,227,0.95)' : 'rgba(241,236,227,0.85)',
        boxShadow: scrolled ? '0 1px 0 rgba(16,13,11,0.08)' : 'none',
        backdropFilter: 'blur(10px)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '11px',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            width: '30px',
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#E01313',
            color: '#F1ECE3',
            fontFamily: 'Anton',
            fontSize: '20px',
            borderRadius: '2px',
            boxShadow: '0 0 0 0 rgba(224,19,19,.5)'
          }}
        >
          S
        </span>
        <span
          style={{
            fontFamily: 'Anton',
            fontSize: '21px',
            letterSpacing: '.04em',
            lineHeight: 1
          }}
        >
          SPARK<span style={{ color: '#E01313' }}>.</span>
        </span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        <NavLink
          to="/works"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Works
        </NavLink>
        <NavLink
          to="/services"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/directors"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Directors
        </NavLink>
        <Link
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            background: '#100D0B',
            color: '#F1ECE3',
            padding: '11px 18px',
            borderRadius: '2px',
            textDecoration: 'none'
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
