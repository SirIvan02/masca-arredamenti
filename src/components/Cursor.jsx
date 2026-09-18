import { useEffect, useRef, useState } from 'react';
import { useLang } from '../hooks/useLang.jsx';

/** Difference-blend dot that grows over links and reads "Apri" over project cards. */
export default function Cursor() {
  const dot = useRef(null);
  const [label, setLabel] = useState('');
  const [size, setSize] = useState(14);
  const { en } = useLang();

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.body.classList.add('has-custom-cursor');
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const cur = { ...pos };
    let raf;

    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      if (dot.current) dot.current.style.transform = 'translate3d(' + cur.x + 'px,' + cur.y + 'px,0)';
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dot.current) dot.current.style.opacity = '1';
      const card = e.target.closest('[data-cursor="view"]');
      const link = e.target.closest('a, button');
      // only the project cards get the big dot: a 48px difference-blend disc over a
      // filled pill inverts its label and reads as a black blob
      if (card) { setSize(62); setLabel(en ? 'View' : 'Apri'); }
      else if (link) { setSize(20); setLabel(''); }
      else { setSize(14); setLabel(''); }
    };
    const onOut = () => { if (dot.current) dot.current.style.opacity = '0'; };

    addEventListener('mousemove', onMove, { passive: true });
    addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(loop);
    return () => {
      document.body.classList.remove('has-custom-cursor');
      removeEventListener('mousemove', onMove);
      removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, [en]);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-90 hidden items-center justify-center rounded-full bg-cream text-[9px] uppercase tracking-[0.18em] text-ink opacity-0 mix-blend-difference transition-[width,height,margin] duration-300 [@media(pointer:fine)]:flex"
      style={{ width: size, height: size, margin: -size / 2 + 'px 0 0 ' + -size / 2 + 'px' }}
    >
      {label}
    </div>
  );
}
