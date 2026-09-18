import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { OFFERS } from '../data/projects.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Offers() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-[1200px] px-[30px] pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
      <Reveal as="p" className="mb-5.5 text-[11px] uppercase tracking-[0.32em] text-muted">
        {t('Offerte', 'Offers')}
      </Reveal>
      <Reveal as="h1" className="max-w-[16em] font-serif text-[clamp(36px,5.2vw,84px)] leading-none tracking-[-0.02em] text-balance">
        {t('Pezzi del laboratorio, pronti da ritirare', 'Pieces from the workshop, ready to go')}
      </Reveal>
      <Reveal as="p" className="mt-6.5 max-w-[36em] text-[16px] leading-[1.75] text-body">
        {t(
          'Prototipi, pezzi da esposizione e manufatti nati per un progetto che \u00e8 cambiato. Stessi materiali, stessa costruzione, una sola misura disponibile.',
          'Prototypes, showroom pieces and one-offs built for a project that changed. Same materials, same build, a single size available.'
        )}
      </Reveal>

      <Reveal className="mt-[clamp(40px,5vw,70px)] grid gap-[2px] bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {OFFERS.map((o) => (
          <div key={o.it} className="bg-cream p-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={o.img.src} alt={t(o.it, o.en)} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="px-1 pb-1 pt-4">
              <h3 className="font-serif text-[24px] leading-tight">{t(o.it, o.en)}</h3>
              <p className="mt-1.5 text-[13px] text-muted">{t('Un pezzo disponibile', 'One piece available')}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <div className="mt-11 flex justify-center">
        <Link
          to="/contatti"
          className="rounded-full border border-ink px-[30px] py-[15px] text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-cream"
        >
          {t('Chiedi disponibilit\u00e0', 'Ask about availability')}
        </Link>
      </div>
    </div>
  );
}
