import { useRef, useEffect, useState } from 'react';
import { data } from '../data';

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Skills() {
  const ref = useRef(null);
  const visible = useVisible(ref);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...data.skills.map(s => s.category)];
  const filtered = activeFilter === 'All' ? data.skills : data.skills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" ref={ref} style={{ background: '#0a0a0f', padding: 'clamp(70px,10vw,100px) clamp(24px,6vw,80px)' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>02 — Toolkit</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(240,237,232,0.08)', maxWidth: 80 }} />
        </div>
        <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 36, lineHeight: 1.1 }}>
          What I work with
        </h2>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.08em',
              padding: '7px 16px', borderRadius: 2, border: 'none', cursor: 'none',
              background: activeFilter === cat ? '#e8c547' : 'transparent',
              color: activeFilter === cat ? '#0a0a0f' : '#a09c94',
              outline: activeFilter !== cat ? '1px solid rgba(240,237,232,0.1)' : 'none',
              transition: 'all 0.2s', fontWeight: activeFilter === cat ? 700 : 300,
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 2 }}>
          {filtered.map((group, i) => (
            <div key={group.category} style={{
              background: '#12121a', padding: '28px 24px',
              border: '1px solid rgba(240,237,232,0.08)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease, border-color 0.2s, background 0.2s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(240,237,232,0.16)'; e.currentTarget.style.background = '#1a1a26'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,237,232,0.08)'; e.currentTarget.style.background = '#12121a'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                <div style={{ width: 18, height: 1, background: '#e8c547' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#e8c547', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {group.category}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.items.map(skill => (
                  <span key={skill} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#a09c94',
                    background: '#0a0a0f', border: '1px solid rgba(240,237,232,0.08)',
                    padding: '5px 12px', borderRadius: 2, transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.target.style.color = '#f0ede8'; e.target.style.borderColor = 'rgba(240,237,232,0.18)'; }}
                    onMouseLeave={e => { e.target.style.color = '#a09c94'; e.target.style.borderColor = 'rgba(240,237,232,0.08)'; }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming */}
        <div style={{ marginTop: 60 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32, color: '#f0ede8' }}>
            350+ Problems Solved
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {data.competitive.map((cp, i) => (
              <a key={i} href={cp.link} target="_blank" rel="noreferrer" style={{
                display: 'block', background: '#12121a', padding: '32px 28px',
                border: '1px solid rgba(240,237,232,0.08)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8c547'; e.currentTarget.style.background = '#1a1a26'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,237,232,0.08)'; e.currentTarget.style.background = '#12121a'; }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5a5650', letterSpacing: '0.12em', marginBottom: 14 }}>{cp.platform}</div>
                <div style={{ fontSize: 52, fontWeight: 800, color: '#e8c547', lineHeight: 1, marginBottom: 8 }}>{cp.count}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#a09c94', fontWeight: 300 }}>{cp.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}