import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { CATEGORIES, PROJECTS } from '../data/projects.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Work() {
  const { t } = useLang();
  const [cat, setCat] = useState('tutti');
  const shown = cat === 'tutti' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);

  return (
    <div className="mx-auto max-w-[1600px] px-[30px] pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
      <div className="flex flex-wrap items-end justify-between gap-[26px] border-b border-line pb-6">
        <div>
          <Reveal as="p" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-muted">
            {t('02 \u2014 Realizzazioni', '02 \u2014 Work')}
          </Reveal>
          <Reveal as="h1" className="font-serif text-[clamp(34px,4.4vw,70px)] leading-[1.02] tracking-[-0.02em]">
            {t('Progetti, uno alla volta', 'Projects, one at a time')}
          </Reveal>
        </div>
        <div className="flex flex-wrap gap-2 text-[10.5px] uppercase tracking-[0.2em]">
          {CATEGORIES.map((c) => {
            const active = c.id === cat;
            return (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={
                  'rounded-full border px-4 py-2.5 transition-colors ' +
                  (active ? 'border-ink bg-ink text-cream' : 'border-[#D9D0BE] hover:border-brass hover:text-brass')
                }
              >
                {t(c.it, c.en)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[2px] grid gap-[2px] bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
        <AnimatePresence initial={false}>
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} showArrow={p.span} />
          ))}
        </AnimatePresence>

        {cat === 'tutti' && (
          <Link
            to="/contatti"
            data-cursor="view"
            className="flex min-h-[320px] flex-col justify-between gap-10 bg-ink p-[34px] text-cream transition-colors hover:bg-ink-soft"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#9A9086]">
              {t('Prossimo progetto', 'Next project')}
            </p>
            <div>
              <h3 className="font-serif text-[clamp(26px,2.4vw,34px)] leading-[1.12] tracking-[-0.01em] text-balance">
                {t('Il vostro, misurato sulla stanza che deve occupare.', 'Yours, measured on the room it has to fit.')}
              </h3>
              <p className="mt-3.5 text-[14px] leading-[1.7] text-cream/60">
                {t('Sopralluogo gratuito in Veneto e Friuli.', 'Free site visit across Veneto and Friuli.')}
              </p>
              <span className="mt-[26px] inline-block border-b border-cream/35 pb-1.5 text-[11px] uppercase tracking-[0.2em]">
                {t('Richiedi un sopralluogo \u2192', 'Book a site visit \u2192')}
              </span>
            </div>
          </Link>
        )}
      </div>

      {shown.length === 0 && (
        <p className="mt-14 text-center text-[14px] text-muted">
          {t('Nessun progetto in questa categoria, per ora.', 'No projects in this category yet.')}
        </p>
      )}
    </div>
  );
}
