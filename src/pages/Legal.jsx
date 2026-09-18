import { Link } from 'react-router-dom';
import { LEGAL } from '../data/legal.js';
import { useLang } from '../hooks/useLang.jsx';

const H2 = 'mt-[clamp(40px,5vw,64px)] font-serif text-[clamp(26px,2.3vw,32px)] leading-[1.2] tracking-[-0.01em]';
const H3 = 'mt-6.5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.22em]';
const P = 'mt-3.5 text-[15.5px] leading-[1.85] text-body';
const A = 'border-b border-[#C9BFAB] hover:border-brass hover:text-brass';

/** Turns [[testo|url]] markers into real anchors. */
function withLinks(text) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[\[(.+)\|(.+)\]\]$/);
    if (!m) return part;
    return (
      <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className={A}>
        {m[1]}
      </a>
    );
  });
}

export default function Legal({ doc }) {
  const { t } = useLang();
  const page = LEGAL[doc];

  return (
    <div className="mx-auto max-w-[820px] px-[30px] pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
      <p className="mb-5.5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.32em] text-muted">{t(page.kickerIt, page.kickerEn)}</p>
      <h1 className="font-serif text-[clamp(39px,4.6vw,72px)] leading-none tracking-[-0.02em]">{t(page.it, page.en)}</h1>
      <p className="mt-5.5 text-[14px] min-[640px]:text-[13px] leading-[1.7] text-muted">
        {t('Testi pubblicati nella loro versione originale italiana.', 'These legal texts are published in Italian only.')}
      </p>

      {page.blocks.map(([tag, content], i) => {
        if (tag === 'h2') return <h2 key={i} className={H2}>{content}</h2>;
        if (tag === 'h3') return <h3 key={i} className={H3}>{content}</h3>;
        if (tag === 'links')
          return (
            <ul key={i} className="mt-4 grid list-none gap-2.5 p-0 text-[15px] min-[640px]:text-[14px] leading-[1.6]">
              {content.map(([label, href, text]) => (
                <li key={href} className="flex flex-wrap gap-2.5">
                  <span className="min-w-[110px] text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.2em] text-muted">{label}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={A}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          );
        return <p key={i} className={P}>{withLinks(content)}</p>;
      })}

      <p className="mt-[clamp(44px,5vw,70px)] border-t border-line pt-6 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.2em]">
        <Link to="/" className="hover:text-brass">{t('\u2190 Torna alla home', '\u2190 Back to home')}</Link>
      </p>
    </div>
  );
}
