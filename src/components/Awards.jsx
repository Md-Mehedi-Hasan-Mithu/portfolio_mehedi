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

export default function Awards() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section id="awards" ref={ref} style={{ background: '#0a0a0f', padding: 'clamp(70px,10vw,100px) clamp(24px,6vw,80px)' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>04 — Recognition</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(240,237,232,0.08)', maxWidth: 80 }} />
        </div>
        <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56, lineHeight: 1.1 }}>
          Awards & Achievements
        </h2>

        <div>
          {data.awards.map((award, i) => (
            <div key={i} style={{
              display: 'flex', gap: 'clamp(16px,4vw,32px)', alignItems: 'flex-start',
              padding: 'clamp(20px,3vw,28px) 0',
              borderBottom: i < data.awards.length - 1 ? '1px solid rgba(240,237,232,0.06)' : 'none',
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)',
              transition: `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s ease`,
            }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#5a5650', minWidth: 44, paddingTop: 2 }}>{award.year}</span>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{award.icon}</span>
              <div>
                <div style={{ fontSize: 'clamp(14px,2vw,16px)', fontWeight: 600, color: '#f0ede8', marginBottom: 4 }}>{award.title}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#5a5650', fontWeight: 300 }}>{award.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}