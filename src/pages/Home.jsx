import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Parallax from '../components/Parallax.jsx';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { HERO_IMAGE, PROJECTS } from '../data/projects.js';
import { useLang } from '../hooks/useLang.jsx';

const FEATURED = ['cucina-s', 'appartamento-milano', 'palazzo-venezia'];

export default function Home() {
  const { t } = useLang();
  const featured = FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug));

  return (
    <>
      <Parallax src={HERO_IMAGE} alt="" strength={14} className="h-[100svh] min-h-[540px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,13,.6)_0%,rgba(20,17,13,.1)_40%,rgba(20,17,13,.8)_100%)]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-8 text-cream min-[640px]:inset-x-[30px] min-[640px]:bottom-[58px]">
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.7, 0.2, 1] }}
            className="mb-3.5 max-w-[22em] text-[10px] uppercase leading-[1.5] tracking-[0.22em] opacity-75 min-[640px]:mb-5 min-[640px]:text-[11px] min-[640px]:tracking-[0.32em]"
          >
            {t('Mogliano Veneto \u2014 tre generazioni di falegnameria su misura', 'Mogliano Veneto \u2014 three generations of bespoke joinery')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: [0.22, 0.7, 0.2, 1] }}
            className="max-w-[15em] font-serif text-[clamp(38px,8.4vw,120px)] leading-[0.98] tracking-[-0.02em] text-balance min-[640px]:leading-[0.95]"
          >
            {t("Ci occupiamo dell'arredamento che non \u00e8 standard.", "We make the furniture that isn't standard.")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.42, ease: [0.22, 0.7, 0.2, 1] }}
            className="mt-6 flex flex-wrap items-end justify-between gap-[26px] min-[640px]:mt-[34px]"
          >
            <p className="max-w-[34em] text-[15px] leading-[1.65] opacity-85 text-pretty min-[640px]:text-[16px] min-[640px]:leading-[1.7]">
              {t(
                'Ogni lavoro \u00e8 unico: fattezze, materiali, tecnologie e finiture pensati ogni volta intorno alla stanza e a chi la abita.',
                'Every piece is one of a kind: shapes, materials, techniques and finishes designed each time around the room and the people who live in it.'
              )}
            </p>
            <span className="hidden text-[11px] uppercase tracking-[0.3em] opacity-60 min-[640px]:inline">{t('Scorri', 'Scroll')}</span>
          </motion.div>
        </div>
      </Parallax>

      <section className="mx-auto max-w-[1440px] px-5 py-[clamp(56px,9vw,130px)] min-[640px]:px-[30px]">
        <div className="grid items-start gap-[clamp(30px,5vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          <Reveal as="h2" className="font-serif text-[clamp(27px,3.6vw,56px)] leading-[1.08] tracking-[-0.015em] text-balance">
            {t('Tre generazioni in laboratorio, un progetto alla volta.', 'Three generations in the workshop, one project at a time.')}
          </Reveal>
          <Reveal className="flex max-w-[40em] flex-col gap-4.5 text-[16px] leading-[1.75] text-body">
            <p>
              {t(
                'Manteniamo viva una tradizione artigiana e restiamo curiosi verso materiali e componenti nuovi. Cucine, librerie, scale, armadi, negozi, allestimenti: disegnati, costruiti e installati dalle stesse mani.',
                'We keep a craft tradition alive and stay curious about new materials and hardware. Kitchens, bookcases, staircases, wardrobes, shops, exhibition fittings: drawn, built and installed by the same hands.'
              )}
            </p>
            <Link to="/chi-siamo" className="self-start border-b border-[#C9BFAB] pb-1.5 text-[11px] uppercase tracking-[0.2em] hover:border-brass hover:text-brass">
              {t('Scopri il laboratorio \u2192', 'Read about the workshop \u2192')}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-[clamp(56px,9vw,130px)] min-[640px]:px-[30px]">
        <Reveal className="grid gap-[2px] bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={{ ...p, span: i === 0 }} showArrow={i === 0} />
          ))}
        </Reveal>
        <div className="mt-9 flex justify-center min-[640px]:mt-11">
          <Link
            to="/realizzazioni"
            className="rounded-full border border-ink px-[30px] py-[15px] text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream active:bg-ink active:text-cream"
          >
            {t('Tutte le realizzazioni', 'All work')}
          </Link>
        </div>
      </section>

      <section className="bg-ink px-5 py-[clamp(56px,9vw,130px)] text-cream min-[640px]:px-[30px]">
        <Reveal as="blockquote" className="mx-auto max-w-[1100px] font-serif text-[clamp(24px,3.4vw,54px)] leading-[1.25] tracking-[-0.01em] text-balance min-[640px]:leading-[1.2]">
          {t(
            '\u201cLa cucina, la libreria, la scala, il negozio a cui stai pensando: lo possiamo fare esattamente come lo desideri, al millimetro.\u201d',
            '\u201cThe kitchen, the bookcase, the staircase, the shop you have in mind: we can build it exactly as you want it \u2014 to the millimetre.\u201d'
          )}
        </Reveal>
      </section>
    </>
  );
}
