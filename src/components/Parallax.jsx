import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Full-bleed image that drifts slower than the scroll. */
export default function Parallax({ src, alt = '', strength = 12, className = '', children }) {
  const wrap = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    const el = inner.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, [strength, src]);

  return (
    <div ref={wrap} className={'relative overflow-hidden bg-ink ' + className}>
      <div ref={inner} className="absolute inset-[-14%_0]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
      {children}
    </div>
  );
}
