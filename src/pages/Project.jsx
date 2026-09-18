import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import Parallax from '../components/Parallax.jsx';
import Reveal from '../components/Reveal.jsx';
import { getProject } from '../data/projects.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Project() {
  const { slug } = useParams();
  const { t, en } = useLang();
  const p = getProject(slug);

  if (!p) {
    return (
      <div className="mx-auto max-w-[820px] px-[30px] pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
        <h1 className="font-serif text-[clamp(36px,4vw,56px)] leading-none">
          {t('Progetto non trovato', 'Project not found')}
        </h1>
        <p className="mt-6 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.2em]">
          <Link to="/realizzazioni" className="border-b border-[#C9BFAB] pb-1.5">
            {t('\u2190 Tutte le realizzazioni', '\u2190 All work')}
          </Link>
        </p>
      </div>
    );
  }

  const body = en ? p.bodyEn : p.body;

  return (
    <>
      <Parallax src={p.hero} alt={t(p.title, p.titleEn)} strength={11} className="h-[72vh] min-h-[440px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,13,.55)_0%,rgba(20,17,13,.08)_45%,rgba(20,17,13,.75)_100%)]" />
        <div className="pointer-events-none absolute inset-x-[30px] bottom-12 text-cream">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.32em] opacity-75"
          >
            {t(p.kicker, p.kickerEn)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.7, 0.2, 1] }}
            className="font-serif text-[clamp(41px,5.6vw,92px)] leading-none tracking-[-0.02em]"
          >
            {t(p.title, p.titleEn)}
          </motion.h1>
        </div>
      </Parallax>

      <div className="mx-auto max-w-[1440px] px-[30px] py-[clamp(60px,8vw,110px)]">
        <div className="grid gap-[clamp(30px,5vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          <Reveal className="flex flex-col gap-4.5">
            {body.length > 0 ? (
              body.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-[19px] min-[640px]:text-[18px] leading-[1.7] text-[#2B261F]' : 'text-[17px] min-[640px]:text-[16px] leading-[1.75] text-body'}>
                  {para}
                </p>
              ))
            ) : (
              <p className="text-[17px] min-[640px]:text-[16px] leading-[1.75] text-muted">
                {t(
                  'La scheda descrittiva di questo progetto \u00e8 in preparazione. Le fotografie qui sotto sono della cucina finita.',
                  'Written notes for this project are in preparation. The photographs below are of the finished kitchen.'
                )}
              </p>
            )}
          </Reveal>

          <Reveal className="grid self-start gap-[2px] bg-line [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
            {p.specs.map(([labelIt, labelEn, valIt, valEn]) => (
              <div key={labelIt} className="bg-cream p-5">
                <p className="mb-1.5 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.24em] text-muted">{t(labelIt, labelEn)}</p>
                <p className="text-[16px] min-[640px]:text-[15px] leading-[1.5]">{t(valIt, valEn)}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-[clamp(36px,5vw,70px)] grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {p.images.map((im, i) => (
            <Reveal key={im.src} as="figure" delay={(i % 3) * 0.06} className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img src={im.src} alt={t(im.cap, im.capEn)} loading="lazy" className="h-full w-full object-cover" />
              </div>
              {im.cap && <figcaption className="text-[14px] min-[640px]:text-[13px] leading-[1.6] text-muted">{t(im.cap, im.capEn)}</figcaption>}
            </Reveal>
          ))}
        </div>

        <div className="mt-[clamp(40px,5vw,70px)] flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.2em]">
          <Link to="/realizzazioni" className="hover:text-brass">{t('\u2190 Tutte le realizzazioni', '\u2190 All work')}</Link>
          <Link to="/contatti" className="hover:text-brass">{t('Iniziamo un progetto \u2192', 'Start a project \u2192')}</Link>
        </div>
      </div>
    </>
  );
}
