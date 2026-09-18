import { Link } from 'react-router-dom';
import { CONTACT, CREDIT, SOCIAL } from '../data/site.js';
import SocialIcon from './SocialIcon.jsx';
import { useLang } from '../hooks/useLang.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-cream/10 bg-ink px-[30px] py-[34px] text-[13px] min-[640px]:text-[12px] leading-[1.8] text-cream/60">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
        <p>
          \u00a9 {CONTACT.company} \u2014 {CONTACT.vat} \u2014 {CONTACT.street}, {CONTACT.city}
        </p>
        <p className="flex flex-wrap items-center gap-[18px]">
          <span className="inline-flex items-center gap-3.5">
            {SOCIAL.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex transition-colors hover:text-brass-light"
              >
                <SocialIcon id={s.id} />
              </a>
            ))}
          </span>
          <Link to="/note-legali">{t('Note legali', 'Legal notice')}</Link>
          <Link to="/privacy">{t('Privacy e cookies', 'Privacy and cookies')}</Link>
          <span>{CONTACT.rea}</span>
        </p>
      </div>
      <p className="mt-[30px] flex items-center justify-center gap-[11px] text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.22em] text-cream/35">
        <span className="h-px w-[26px] bg-cream/20" />
        <span>{t('Design e sviluppo', 'Design and development')}</span>
        <a
          href={CREDIT.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-[16px] min-[640px]:text-[15px] normal-case tracking-[0.04em] text-cream/70 transition-colors hover:text-brass-light"
        >
          {CREDIT.name}
        </a>
        <span className="h-px w-[26px] bg-cream/20" />
      </p>
    </footer>
  );
}
