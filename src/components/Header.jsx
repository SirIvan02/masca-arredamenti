import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NAV } from '../data/site.js';
import { useLang } from '../hooks/useLang.jsx';

const DARK_TOP = ['/', '/contatti'];

export default function Header() {
  const { en, toggle, t } = useLang();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const overHero = DARK_TOP.includes(pathname) || pathname.startsWith('/realizzazioni/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const dark = overHero && !scrolled;
  const shell = scrolled
    ? overHero
      ? 'bg-ink/70 backdrop-blur-md text-cream shadow-[0_1px_0_rgba(20,17,13,.08)]'
      : 'bg-cream/90 backdrop-blur-md text-ink shadow-[0_1px_0_rgba(20,17,13,.08)]'
    : dark
      ? 'text-cream'
      : 'text-ink';

  return (
    <header className={'fixed inset-x-0 top-0 z-70 flex items-center justify-between gap-6 px-[30px] py-5 transition-colors duration-500 ' + shell}>
      <Link to="/" className="flex flex-col gap-[3px]">
        <span className="font-serif text-[26px] leading-none tracking-[0.18em]">MASCA</span>
        <span className="text-[9px] uppercase tracking-[0.32em] opacity-70">
          {t('Arredamenti su misura dal 1952', 'Bespoke furniture since 1952')}
        </span>
      </Link>

      <nav className="flex flex-wrap items-center justify-end gap-x-[22px] gap-y-[10px] text-[10.5px] uppercase tracking-[0.2em]">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100')}
          >
            {t(item.it, item.en)}
          </NavLink>
        ))}
        <button
          onClick={toggle}
          className="rounded-full border border-current px-3 py-2 uppercase tracking-[0.2em] opacity-80 hover:opacity-100"
        >
          {en ? 'IT' : 'EN'}
        </button>
        <Link
          to="/contatti"
          className="rounded-full border border-current px-[19px] py-[11px] transition-colors hover:border-ink hover:bg-ink hover:text-cream"
        >
          {t('Sopralluogo', 'Book a survey')}
        </Link>
      </nav>
    </header>
  );
}
