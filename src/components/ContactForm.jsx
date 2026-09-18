import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOCIAL } from '../data/site.js';
import SocialIcon from './SocialIcon.jsx';
import Reveal from './Reveal.jsx';
import { useLang } from '../hooks/useLang.jsx';

const FIELD =
  'w-full border-0 bg-transparent p-0 py-0.5 font-sans text-[18px] min-[640px]:text-[17px] text-ink outline-none placeholder:text-muted/60';
const LABEL = 'text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.26em] text-muted';

const TYPES = [
  { it: 'Cucina su misura', en: 'Bespoke kitchen' },
  { it: 'Libreria, armadio, scala', en: 'Bookcase, wardrobe, staircase' },
  { it: 'Arredo completo di casa', en: 'Full home fit-out' },
  { it: 'Negozio o retail', en: 'Shop or retail' },
  { it: 'Allestimento o museo', en: 'Exhibition or museum fittings' },
  { it: 'Altro', en: 'Something else' },
];

export default function ContactForm() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);
  const [tipo, setTipo] = useState(0);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // TODO collegare un endpoint reale (Vercel Serverless Function, Resend, Formspark).
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.info('richiesta sopralluogo', data);
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
  };

  return (
    <section className="bg-sand px-[30px] py-[clamp(70px,9vw,120px)]">
      <div className="mx-auto grid max-w-[1440px] items-start gap-[clamp(36px,6vw,90px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div>
          <Reveal as="p" className="mb-5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.32em] text-muted">
            {t('Richiedi un sopralluogo', 'Request a site visit')}
          </Reveal>
          <Reveal as="h2" className="max-w-[16em] font-serif text-[clamp(36px,4.2vw,64px)] leading-[1.02] tracking-[-0.02em] text-balance">
            {t('Raccontateci cosa avete in mente.', 'Tell us what you have in mind.')}
          </Reveal>
          <Reveal as="p" className="mt-6 max-w-[32em] text-[17px] min-[640px]:text-[16px] leading-[1.75] text-body">
            {t(
              'Una foto dell\u2019ambiente e una misura approssimativa bastano per iniziare. Rispondiamo entro due giorni lavorativi.',
              'A photo of the room and a rough measurement are enough to start. We reply within two working days.'
            )}
          </Reveal>
          <Reveal className="mt-[34px] flex flex-wrap gap-2.5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.2em]">
            {SOCIAL.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[9px] rounded-full border border-[#C9BFAB] px-[22px] py-[13px] transition-colors hover:border-brass hover:text-brass active:border-brass active:text-brass"
              >
                <SocialIcon id={s.id} />
                <span>{s.label}</span>
              </a>
            ))}
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border-t border-line-warm py-10"
            >
              <p className="font-serif text-[32px] leading-tight">
                {t('Grazie, richiesta ricevuta.', 'Thank you, request received.')}
              </p>
              <p className="mt-3.5 text-[16px] min-[640px]:text-[15px] leading-[1.7] text-muted">
                {t(
                  'Rispondiamo entro due giorni lavorativi. Se \u00e8 urgente, WhatsApp \u00e8 pi\u00f9 veloce.',
                  'We reply within two working days. For something urgent, WhatsApp is faster.'
                )}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 0.7, 0.2, 1] }}
              exit={{ opacity: 0 }}
              className="grid content-start"
            >
              <label className="grid gap-2 border-b border-line-warm py-4 focus-within:border-brass">
                <span className={LABEL}>{t('Nome e cognome', 'Name and surname')}</span>
                <input name="nome" required placeholder="Maria Rossi" className={FIELD} />
              </label>
              <label className="grid gap-2 border-b border-line-warm py-4 focus-within:border-brass">
                <span className={LABEL}>Email</span>
                <input name="email" type="email" required placeholder="maria@studio.it" className={FIELD} />
              </label>
              <label className="grid gap-2 border-b border-line-warm py-4 focus-within:border-brass">
                <span className={LABEL}>{t('Telefono (facoltativo)', 'Phone (optional)')}</span>
                <input name="telefono" type="tel" placeholder="+39 ..." className={FIELD} />
              </label>
              <div className="grid gap-3.5 border-b border-line-warm pb-5 pt-4">
                <span className={LABEL}>{t('Di cosa si tratta', 'What is it about')}</span>
                <input type="hidden" name="tipo" value={t(TYPES[tipo].it, TYPES[tipo].en)} readOnly />
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((opt, i) => {
                    const on = i === tipo;
                    return (
                      <button
                        key={opt.it}
                        type="button"
                        onClick={() => setTipo(i)}
                        aria-pressed={on}
                        className={
                          'min-h-[42px] rounded-full border px-[17px] py-[11px] text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.16em] transition-colors duration-[350ms] ' +
                          (on ? 'border-ink bg-ink text-cream' : 'border-line-warm hover:border-brass hover:text-brass')
                        }
                      >
                        {t(opt.it, opt.en)}
                      </button>
                    );
                  })}
                </div>
              </div>
              <label className="grid gap-2 border-b border-line-warm py-4 focus-within:border-brass">
                <span className={LABEL}>{t('Messaggio', 'Message')}</span>
                <textarea
                  name="messaggio"
                  rows={3}
                  placeholder={t('Stanza, misure indicative, tempi.', 'Room, rough measurements, timing.')}
                  className={FIELD + ' resize-y'}
                />
              </label>
              <div className="mt-[26px] flex flex-wrap items-center gap-[18px]">
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full border border-ink px-8 py-4 text-[12px] min-[640px]:text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-brass hover:text-brass active:border-brass active:text-brass disabled:opacity-60"
                >
                  {sending ? t('Invio in corso\u2026', 'Sending\u2026') : t('Invia richiesta', 'Send request')}
                </button>
                <p className="m-0 text-[13px] min-[640px]:text-[12px] leading-[1.6] text-muted">
                  {t('Usiamo i vostri dati solo per rispondere.', 'We only use your details to reply.')}
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
