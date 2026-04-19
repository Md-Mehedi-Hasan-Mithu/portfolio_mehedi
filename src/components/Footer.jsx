import { data } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(240,237,232,0.08)',
      padding: 'clamp(20px,3vw,28px) clamp(24px,6vw,80px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: '#0a0a0f', flexWrap: 'wrap', gap: 16,
    }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#5a5650', fontWeight: 300 }}>
        © 2026 MD Mehedi Hasan. Built with React.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ecdc4' }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#5a5650' }}>
          Open to opportunities · {data.location}
        </span>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
        background: 'none', border: '1px solid rgba(240,237,232,0.08)',
        color: '#a09c94', fontFamily: "'DM Mono', monospace", fontSize: 11,
        padding: '7px 14px', borderRadius: 2, cursor: 'none', transition: 'all 0.2s',
      }}
        onMouseEnter={e => { e.target.style.borderColor = '#e8c547'; e.target.style.color = '#e8c547'; }}
        onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,237,232,0.08)'; e.target.style.color = '#a09c94'; }}>
        ↑ Back to top
      </button>
    </footer>
  );
}