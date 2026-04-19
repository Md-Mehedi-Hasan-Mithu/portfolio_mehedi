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

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#12121a', border: '1px solid rgba(240,237,232,0.12)',
        borderRadius: 4, padding: 40, maxWidth: 600, width: '100%',
        animation: 'fadeUp 0.3s ease',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#e8c547', marginBottom: 8 }}>Project {project.num}</div>
            <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.01em' }}>{project.title}</h3>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: '1px solid rgba(240,237,232,0.1)', color: '#a09c94',
            width: 36, height: 36, borderRadius: 2, fontSize: 16, cursor: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>✕</button>
        </div>

        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: '#a09c94', lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
          {project.desc}
        </p>

        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4ecdc4', letterSpacing: '0.14em', marginBottom: 12 }}>TECH STACK</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#4ecdc4', border: '1px solid rgba(78,205,196,0.25)', padding: '5px 12px', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{
              padding: '11px 24px', background: '#e8c547', color: '#0a0a0f',
              fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', borderRadius: 2,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0a0a0f', animation: 'pulse 2s infinite' }} />
              View Live Site
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{
              padding: '11px 24px', background: 'transparent', color: '#f0ede8',
              fontSize: 13, letterSpacing: '0.06em', border: '1px solid rgba(240,237,232,0.14)', borderRadius: 2,
            }}>
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const visible = useVisible(ref);
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" ref={ref} style={{ background: '#12121a', padding: 'clamp(70px,10vw,100px) clamp(24px,6vw,80px)' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>03 — Built By Me</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(240,237,232,0.08)', maxWidth: 80 }} />
        </div>
        <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56, lineHeight: 1.1 }}>
          Selected Projects
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data.projects.map((project, i) => (
            <div key={i}
              onClick={() => setSelected(project)}
              style={{
                background: '#0a0a0f', border: '1px solid rgba(240,237,232,0.08)',
                padding: 'clamp(24px,4vw,36px) clamp(20px,4vw,40px)',
                display: 'grid', gridTemplateColumns: 'clamp(50px,8vw,80px) 1fr auto',
                gap: 'clamp(16px,3vw,32px)', alignItems: 'start',
                cursor: 'none',
                opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease, border-color 0.2s, background 0.2s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8c547'; e.currentTarget.style.background = '#1a1a26'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,237,232,0.08)'; e.currentTarget.style.background = '#0a0a0f'; }}>

              <div style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, color: 'rgba(240,237,232,0.06)', lineHeight: 1 }}>
                {project.num}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 700, letterSpacing: '-0.01em' }}>{project.title}</h3>
                  {project.featured && (
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4ecdc4', border: '1px solid rgba(78,205,196,0.3)', padding: '2px 8px', borderRadius: 2 }}>
                      LIVE
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#a09c94', lineHeight: 1.7, fontWeight: 300, marginBottom: 14, maxWidth: 560 }}>
                  {project.desc}
                </p>
                {project.live && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ecdc4', animation: 'pulse 2s infinite' }} />
                    <a href={project.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.06em' }}>
                      {project.live.replace('https://', '')}
                    </a>
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4ecdc4', border: '1px solid rgba(78,205,196,0.2)', padding: '3px 10px', borderRadius: 2 }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ color: '#5a5650', fontSize: 22, alignSelf: 'center', transition: 'all 0.2s' }}>↗</div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}