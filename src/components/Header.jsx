import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CONTACT, NAV, SOCIAL } from '../data/site.js';
import { useLang } from '../hooks/useLang.jsx';

const DARK_TOP = ['/', '/contatti'];

export default function Header() {
  const { en, toggle, t } = useLang();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(() => window.matchMedia('(max-width: 980px)').matches);
  const overHero = DARK_TOP.includes(pathname) || pathname.startsWith('/realizzazioni/');
  const whatsapp = SOCIAL.find((s) => s.id === 'whatsapp');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)');
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // close the drawer on navigation and lock the page behind it
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // only the pages that open on a dark hero get cream text; on light pages a narrow
  // viewport was painting cream on cream, which read as "no header at all"
  const onDarkGround = overHero;
  const dark = onDarkGround && !scrolled;
  const shell = open
    ? 'text-cream'
    : scrolled
      ? onDarkGround
        ? 'bg-ink/70 backdrop-blur-md text-cream shadow-[0_1px_0_rgba(20,17,13,.08)]'
        : 'bg-cream/90 backdrop-blur-md text-ink shadow-[0_1px_0_rgba(20,17,13,.08)]'
      : dark
        ? 'text-cream'
        : 'text-ink';

  // over the dark hero / dark bar an ink hover would vanish into the background
  // simple buttons: only the ink changes on hover, no fill
  const onLightBar = scrolled && !onDarkGround && !open;
  const pillHover = onLightBar
    ? 'hover:border-brass hover:text-brass'
    : 'hover:border-brass-light hover:text-brass-light';

  const drawerLink =
    'flex items-baseline gap-4 border-b border-cream/15 py-5 font-serif text-[clamp(34px,8vw,44px)] leading-none';

  return (
    <>
      <header className={'fixed inset-x-0 top-0 z-70 flex items-center justify-between gap-5 px-5 py-4 transition-colors duration-500 min-[640px]:gap-6 min-[640px]:px-[30px] min-[640px]:py-5 ' + shell}>
        <Link to="/" className="flex flex-col gap-[3px]">
          <span className="font-serif text-[26px] leading-none tracking-[0.18em]">MASCA</span>
          <span className="text-[10px] min-[640px]:text-[9px] uppercase tracking-[0.32em] opacity-70">
            {t('Arredamenti su misura dal 1952', 'Bespoke furniture since 1952')}
          </span>
        </Link>

        {/* desktop */}
        <nav className="hidden flex-wrap items-center justify-end gap-x-[22px] gap-y-[10px] text-[11.5px] min-[640px]:text-[10.5px] uppercase tracking-[0.2em] min-[981px]:flex">
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
            className={'rounded-full border border-current px-3 py-2 uppercase tracking-[0.2em] opacity-80 transition-colors duration-[350ms] hover:opacity-100 ' + pillHover}
          >
            {en ? 'IT' : 'EN'}
          </button>
          <Link
            to="/contatti"
            className={'rounded-full border border-current px-[19px] py-[11px] transition-colors ' + pillHover}
          >
            {t('Sopralluogo', 'Book a survey')}
          </Link>
        </nav>

        {/* mobile trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="inline-flex items-center gap-2.5 py-2.5 pl-3.5 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.2em] min-[981px]:hidden"
        >
          <span>{open ? t('Chiudi', 'Close') : 'Menu'}</span>
          <span className="flex w-6 flex-col gap-[5px]">
            <span className={'block h-px bg-current transition-transform duration-[400ms] ' + (open ? 'translate-y-[3px] rotate-[9deg]' : '')} />
            <span className={'block h-px bg-current transition-transform duration-[400ms] ' + (open ? '-translate-y-[3px] -rotate-[9deg]' : '')} />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="fixed inset-0 z-65 flex flex-col justify-between gap-[30px] overflow-y-auto bg-ink px-[30px] pb-[38px] pt-[98px] text-cream min-[981px]:hidden"
          >
            <nav className="flex flex-col border-t border-cream/15">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className={drawerLink}>
                  {t(item.it, item.en)}
                </Link>
              ))}
              <Link to="/contatti" className={drawerLink + ' text-brass-light'}>
                {t('Contatti', 'Contact')}
              </Link>
            </nav>

            <div className="flex flex-col gap-[22px]">
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full border border-cream/55 px-[26px] py-[17px] text-center text-[12px] min-[640px]:text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:border-brass-light hover:text-brass-light active:border-brass-light active:text-brass-light"
              >
                <span>{t('Sopralluogo su WhatsApp', 'Book a site visit on WhatsApp')}</span>
              </a>
              <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] min-[640px]:text-[12px] leading-[1.7] text-cream/60">
                <p>
                  {CONTACT.street}
                  <br />
                  {CONTACT.city}
                </p>
                <button
                  onClick={toggle}
                  className="rounded-full border border-cream/55 px-5 py-3 text-[12px] min-[640px]:text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:border-brass-light hover:text-brass-light"
                >
                  {en ? 'IT' : 'EN'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
