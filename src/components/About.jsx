import { useRef, useEffect, useState } from 'react';
import { data } from '../data';
import photo from '../assets/FB_IMG_1749873295998.jpg';

function useVisible(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function About() {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <section id="about" ref={ref} style={{ background: '#12121a', padding: 'clamp(70px,10vw,100px) clamp(24px,6vw,80px)' }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>01 — Who I Am</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(240,237,232,0.08)', maxWidth: 80 }} />
        </div>
        <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56, lineHeight: 1.1 }}>
          About me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          {/* Left - Photo placeholder + info card */}
          <div>
            {/* Photo placeholder */}
            <div style={{
              width: '100%', maxWidth: 300, aspectRatio: '4/5',
              border: '1px solid rgba(232,197,71,0.2)', borderRadius: 4,
              marginBottom: 20, position: 'relative', overflow: 'hidden',
            }}>
              <img src={photo} alt="MD Mehedi Hasan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(10,10,15,0.8))', height: 60,
              }} />
              <div style={{
                position: 'absolute', bottom: 12, right: 12,
                background: '#e8c547', color: '#0a0a0f',
                fontFamily: "'DM Mono', monospace", fontSize: 10, padding: '5px 12px', borderRadius: 2,
              }}>
                {data.location}
              </div>
            </div>

            {/* Info chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Problem Solver', 'Quick Learner', 'Open to Remote', 'ICT Trained', 'Team Player'].map(c => (
                <span key={c} style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4',
                  border: '1px solid rgba(78,205,196,0.2)', padding: '5px 14px', borderRadius: 2,
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <blockquote style={{
              fontFamily: "'Lora', serif", fontStyle: 'italic',
              fontSize: 20, lineHeight: 1.6, color: '#f0ede8',
              borderLeft: '2px solid #e8c547', paddingLeft: 20, marginBottom: 28,
            }}>
              "I don't just write code — I engineer solutions that scale, perform, and actually matter."
            </blockquote>

            {data.bio.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300,
                color: '#a09c94', lineHeight: 1.9, marginBottom: 16,
              }}
                dangerouslySetInnerHTML={{ __html: para.replace(/\*(.+?)\*/g, '<strong style="color:#f0ede8;font-weight:400">$1</strong>') }}
              />
            ))}

            {/* Experience card */}
            <div style={{
              marginTop: 36, padding: '20px 24px',
              background: '#0a0a0f', border: '1px solid rgba(240,237,232,0.08)',
              borderRadius: 4,
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4ecdc4', letterSpacing: '0.14em', marginBottom: 10 }}>EXPERIENCE</div>
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{exp.role}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#e8c547', marginBottom: 10 }}>{exp.company} · {exp.period}</div>
                  {exp.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#4ecdc4', marginTop: 7, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#a09c94', fontWeight: 300, lineHeight: 1.7 }}>{p}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginTop: 16, padding: '16px 24px', background: '#0a0a0f', border: '1px solid rgba(240,237,232,0.08)', borderRadius: 4 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4ecdc4', letterSpacing: '0.14em', marginBottom: 8 }}>EDUCATION</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{data.education.degree}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#a09c94', marginTop: 4 }}>{data.education.university}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5a5650', marginTop: 4 }}>{data.education.period} · {data.education.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}