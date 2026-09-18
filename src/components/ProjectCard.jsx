import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLang } from '../hooks/useLang.jsx';

export default function ProjectCard({ project, showArrow = false }) {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
      className={project.span ? 'sm:col-span-2' : ''}
      style={{ minWidth: 0 }}
    >
      <Link
        to={'/realizzazioni/' + project.slug}
        data-cursor="view"
        className="group block h-full bg-cream p-4 transition-colors hover:bg-[#F3EDE1]"
      >
        <div className={'relative overflow-hidden ' + project.ratio}>
          <img
            src={project.thumb.src}
            alt={t(project.title, project.titleEn)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.22,.7,.2,1)] group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex justify-between gap-[18px] px-1 pb-1 pt-[18px]">
          <div>
            <h3 className="font-serif text-[26px] leading-tight">{t(project.title, project.titleEn)}</h3>
            <p className="mt-1.5 text-[13px] text-muted">{t(project.meta, project.metaEn)}</p>
          </div>
          {showArrow && (
            <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-muted">
              {t('Scheda \u2192', 'Project \u2192')}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
