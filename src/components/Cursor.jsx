import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const grow = () => {
      if (ringRef.current) { ringRef.current.style.width = '54px'; ringRef.current.style.height = '54px'; ringRef.current.style.borderColor = '#e8c547'; }
      if (dotRef.current) { dotRef.current.style.opacity = '0.5'; }
    };
    const shrink = () => {
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.borderColor = 'rgba(232,197,71,0.5)'; }
      if (dotRef.current) { dotRef.current.style.opacity = '1'; }
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: 10, height: 10, background: '#e8c547',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)', transition: 'opacity 0.2s',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 36, height: 36,
        border: '1.5px solid rgba(232,197,71,0.5)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%,-50%)',
        transition: 'width 0.25s, height 0.25s, border-color 0.2s',
      }} />
    </>
  );
}