import { CONTACT } from '../data/site.js';
import { useLang } from '../hooks/useLang.jsx';

export default function LocationBand() {
  const { t } = useLang();
  const bbox = [CONTACT.lon - 0.015, CONTACT.lat - 0.007, CONTACT.lon + 0.015, CONTACT.lat + 0.007].join('%2C');
  const embed =
    'https://www.openstreetmap.org/export/embed.html?bbox=' +
    bbox +
    '&layer=mapnik&marker=' +
    CONTACT.lat +
    '%2C' +
    CONTACT.lon;

  return (
    <section className="bg-ink">
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <div className="ml-auto grid w-full max-w-[620px] content-center gap-[26px] px-[30px] py-[clamp(50px,6vw,90px)] text-cream">
          <div>
            <p className="mb-[18px] text-[11px] uppercase tracking-[0.32em] text-[#9A9086]">
              {t('Dove siamo', 'Where we are')}
            </p>
            <h2 className="font-serif text-[clamp(30px,3.6vw,52px)] leading-[1.04] tracking-[-0.015em]">
              Mogliano Veneto
            </h2>
          </div>
          <p className="text-[16px] leading-[1.8] text-cream/80">
            {CONTACT.street}
            <br />
            {CONTACT.city}
            <br />
            {CONTACT.region}
          </p>
          <p className="text-[15px] leading-[1.75] text-cream/60">
            {t(
              'Il laboratorio \u00e8 il posto dove tutto viene disegnato, costruito e provato. Visite su appuntamento, dal luned\u00ec al venerd\u00ec. Venti minuti da Venezia, quindici da Treviso.',
              'The workshop is where everything is drawn, built and tested. Visits by appointment, Monday to Friday. Twenty minutes from Venice, fifteen from Treviso.'
            )}
          </p>
          <div className="flex flex-wrap gap-2.5 text-[11px] uppercase tracking-[0.2em]">
            <a
              href={'https://www.openstreetmap.org/?mlat=' + CONTACT.lat + '&mlon=' + CONTACT.lon + '#map=16/' + CONTACT.lat + '/' + CONTACT.lon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-cream/55 px-[22px] py-[13px] font-medium text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink active:border-cream active:bg-cream active:text-ink"
            >
              {t('Apri la mappa', 'Open the map')}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center rounded-full border border-cream/55 px-[22px] py-[13px] font-medium text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="relative min-h-[380px] bg-[#0F0D0A]">
          <iframe
            title={t('Mappa del laboratorio', 'Workshop map')}
            src={embed}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0 grayscale contrast-[.92] brightness-[.82]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent to-32%" />
        </div>
      </div>
    </section>
  );
}
