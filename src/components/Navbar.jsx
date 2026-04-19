import { useState, useEffect } from 'react';
import { data } from '../data';

const s = {
  nav: (scrolled, open) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 48px',
    backdropFilter: 'blur(16px)',
    background: scrolled || open ? 'rgba(10,10,15,0.92)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(240,237,232,0.08)' : '1px solid transparent',
    transition: 'all 0.3s',
  }),
  logo: {
    fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700,
    letterSpacing: '0.12em', color: '#e8c547', textDecoration: 'none',
  },
  links: {
    display: 'flex', gap: 36, listStyle: 'none',
  },
  link: (active) => ({
    fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: active ? '#e8c547' : '#a09c94', textDecoration: 'none',
    transition: 'color 0.2s', cursor: 'none',
  }),
  cta: {
    fontSize: 12, letterSpacing: '0.08em', color: '#0a0a0f',
    background: '#e8c547', padding: '9px 22px', borderRadius: 2,
    fontWeight: 700, transition: 'all 0.2s', fontFamily: "'Syne', sans-serif",
    border: 'none',
  },
  hamburger: (open) => ({
    display: 'none', background: 'none', border: 'none',
    color: '#f0ede8', fontSize: 22, cursor: 'none', padding: 4,
  }),
};

const NAV_ITEMS = ['about', 'skills', 'projects', 'awards', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Highlight active section
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={s.nav(scrolled, mobileOpen)}>
        <a href="#home" style={s.logo}>&lt;MH/&gt;</a>

        {/* Desktop links */}
        <ul style={{ ...s.links, '@media(max-width:768px)': { display: 'none' } }} className="nav-desktop">
          {NAV_ITEMS.map(id => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}
                style={{ ...s.link(active === id), background: 'none', border: 'none', fontFamily: "'Syne',sans-serif" }}>
                {id}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href={`mailto:${data.email}`} style={s.cta}
            onMouseEnter={e => { e.target.style.background = '#c4a832'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = '#e8c547'; e.target.style.transform = 'translateY(0)'; }}>
            Hire Me
          </a>
          {/* Hamburger for mobile */}
          <button className="hamburger" onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: '#f0ede8', fontSize: 24, display: 'none' }}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,15,0.97)', borderBottom: '1px solid rgba(240,237,232,0.08)',
          padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {NAV_ITEMS.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', textAlign: 'left',
              fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700,
              color: active === id ? '#e8c547' : '#f0ede8', letterSpacing: '0.06em',
              padding: '8px 0', borderBottom: '1px solid rgba(240,237,232,0.06)',
            }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}