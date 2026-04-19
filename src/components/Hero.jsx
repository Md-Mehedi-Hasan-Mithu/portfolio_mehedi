import { useState, useEffect } from 'react';
import { data } from '../data';
import heroImage from '../assets/FB_IMG_1749873261583-removebg-preview.png';

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Backend Architect",
  "React Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: 'clamp(120px, 15vw, 140px) clamp(24px, 6vw, 80px) 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(78,205,196,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(232,197,71,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(240,237,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,232,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1240, margin: '0 auto' }}>
        <div className="hero-grid" style={{ width: '100%', alignItems: 'center' }}>
          <div className="hero-copy">
            {/* Available tag */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28,
              animation: 'fadeUp 0.6s 0.1s ease both',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ecdc4', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#4ecdc4', letterSpacing: '0.14em' }}>
                {data.available ? 'Available for opportunities' : 'Currently busy'}
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontSize: 'clamp(56px, 10vw, 120px)', fontWeight: 900,
              lineHeight: 0.9, letterSpacing: '-0.06em', marginBottom: 16,
              textTransform: 'uppercase', animation: 'fadeUp 0.7s 0.2s ease both',
            }}>
              {data.name.split(' ')[0]}<br />
              <span style={{ color: '#e8c547' }}>{data.name.split(' ')[1]}</span><br />
              {data.name.split(' ')[2]}
            </h1>

            {/* Typing role */}
            <div style={{
              fontFamily: "'Lora', serif", fontStyle: 'italic',
              fontSize: 'clamp(18px, 3vw, 28px)', color: '#a09c94',
              marginBottom: 32, minHeight: 40,
              animation: 'fadeUp 0.7s 0.35s ease both',
            }}>
              {displayed}
              <span style={{ borderRight: '2px solid #e8c547', animation: 'blink 1s infinite', marginLeft: 2 }} />
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300,
              color: '#a09c94', lineHeight: 1.9, maxWidth: 540, marginBottom: 48,
              animation: 'fadeUp 0.7s 0.5s ease both',
            }}>
              BSc CSE from <strong style={{ color: '#f0ede8', fontWeight: 400 }}>RUET</strong> ·{' '}
              <strong style={{ color: '#f0ede8', fontWeight: 400 }}>350+ competitive problems</strong> solved ·{' '}
              Full-stack apps shipped to production.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.65s ease both' }}>
              <a href="#projects"
                style={{ padding: '14px 32px', background: '#e8c547', color: '#0a0a0f', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 2, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.background = '#c4a832'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = '#e8c547'; e.target.style.transform = 'translateY(0)'; }}>
                View My Work
              </a>
              <a href={`mailto:${data.email}`}
                style={{ padding: '14px 32px', background: 'transparent', color: '#f0ede8', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(240,237,232,0.14)', borderRadius: 2, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.borderColor = '#e8c547'; e.target.style.color = '#e8c547'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,237,232,0.14)'; e.target.style.color = '#f0ede8'; e.target.style.transform = 'translateY(0)'; }}>
                Get In Touch
              </a>
              <a href="/resume.pdf" download
                style={{ padding: '14px 32px', background: 'transparent', color: '#4ecdc4', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(78,205,196,0.25)', borderRadius: 2, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.background = 'rgba(78,205,196,0.08)'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}>
                ↓ Download CV
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 48, marginTop: 64, animation: 'fadeUp 0.7s 0.8s ease both', flexWrap: 'wrap' }}>
              {data.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#e8c547', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5a5650', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: center;
        }
       
      
        @media (max-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-image-card {
            margin-top: 40px;
          }
        }
        @media (max-width: 640px) {
          .hero-grid {
            gap: 32px;
          }
          .hero-image-card img {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', color: '#5a5650', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(#e8c547, transparent)', animation: 'scrollPulse 1.8s ease-in-out infinite' }} />
      </div>
    </section>
  );
}