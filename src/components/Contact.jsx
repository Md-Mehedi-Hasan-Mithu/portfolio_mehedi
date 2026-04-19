import { useState } from 'react';
import { data } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens user's email client with pre-filled content
    const subject = encodeURIComponent(`Hiring Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Mehedi,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nBest regards,\n${form.name}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputStyle = {
    width: '100%', background: '#12121a', border: '1px solid rgba(240,237,232,0.1)',
    borderRadius: 2, padding: '14px 16px', color: '#f0ede8',
    fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300,
    outline: 'none', transition: 'border-color 0.2s',
  };

  const onFocus = (e) => { e.target.style.borderColor = 'rgba(232,197,71,0.5)'; };
  const onBlur = (e) => { e.target.style.borderColor = 'rgba(240,237,232,0.1)'; };

  return (
    <section id="contact" style={{ background: '#12121a', padding: 'clamp(70px,10vw,100px) clamp(24px,6vw,80px)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,197,71,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4ecdc4', letterSpacing: '0.18em', textTransform: 'uppercase' }}>05 — Contact</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(240,237,232,0.08)', maxWidth: 80 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64 }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 20 }}>
              Ready to<br /><span style={{ color: '#e8c547' }}>hire me?</span>
            </h2>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: 16, color: '#a09c94', lineHeight: 1.7, marginBottom: 36 }}>
              Let's build something great together. I'm open to full-time roles, freelance projects, and remote work.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉', label: 'Email', value: data.email, href: `mailto:${data.email}` },
                { icon: '📱', label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
                { icon: '📍', label: 'Location', value: data.location, href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: '#0a0a0f', border: '1px solid rgba(240,237,232,0.06)', borderRadius: 2 }}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#5a5650', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#e8c547', textDecoration: 'none' }}>{item.value}</a>
                    ) : (
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#a09c94' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: data.social.github },
                { label: 'LinkedIn', href: data.social.linkedin },
                { label: 'LeetCode', href: data.social.leetcode },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#a09c94',
                  border: '1px solid rgba(240,237,232,0.08)', padding: '9px 18px', borderRadius: 2, transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = '#e8c547'; e.target.style.color = '#e8c547'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,237,232,0.08)'; e.target.style.color = '#a09c94'; }}>
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#5a5650', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>YOUR NAME</label>
                <input
                  type="text" required placeholder="John Smith"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#5a5650', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>YOUR EMAIL</label>
                <input
                  type="email" required placeholder="john@company.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#5a5650', letterSpacing: '0.12em', display: 'block', marginBottom: 8 }}>MESSAGE</label>
                <textarea
                  required rows={5} placeholder="Hi Mehedi, I'd like to discuss a project..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={onFocus} onBlur={onBlur}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                />
              </div>
              <button type="submit" style={{
                padding: '15px 32px', background: status === 'sent' ? '#4ecdc4' : '#e8c547',
                color: '#0a0a0f', fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase',
                border: 'none', borderRadius: 2, cursor: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; }}>
                {status === 'sent' ? '✓ Opening Your Email App...' : 'Send Message →'}
              </button>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5a5650', lineHeight: 1.6 }}>
                This will open your email app with a pre-filled message to Mehedi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}