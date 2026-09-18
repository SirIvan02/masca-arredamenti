import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import LocationBand from '../components/LocationBand.jsx';
import SocialIcon from '../components/SocialIcon.jsx';
import { CONTACT, SOCIAL } from '../data/site.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Contact() {
  const { t } = useLang();
  const whatsapp = SOCIAL.find((s) => s.id === 'whatsapp');

  return (
    <>
      <div className="bg-ink px-[30px] pb-[clamp(70px,9vw,120px)] pt-[calc(clamp(70px,9vw,130px)+60px)] text-cream">
        <div className="mx-auto grid max-w-[1440px] gap-[clamp(36px,6vw,90px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr))]">
          <div>
            <Reveal as="p" className="mb-5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.32em] text-[#9A9086]">
              {t('04 \u2014 Contatti', '04 \u2014 Contact')}
            </Reveal>
            <Reveal as="h1" className="font-serif text-[clamp(41px,5.2vw,86px)] leading-none tracking-[-0.02em] text-balance">
              {t('Parliamo del vostro spazio.', "Let's talk about your space.")}
            </Reveal>
            <Reveal as="p" className="mt-6.5 max-w-[32em] text-[17px] min-[640px]:text-[16px] leading-[1.75] text-cream/80">
              {t(
                'Mandateci una foto e una misura approssimativa: vi diciamo se \u00e8 un lavoro per noi. Il sopralluogo \u00e8 gratuito.',
                "Send us a photo and a rough measurement and we'll tell you whether it's something for us. The site visit is free."
              )}
            </Reveal>
            <Reveal className="mt-9 flex flex-wrap gap-2.5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.2em]">
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[9px] rounded-full border border-cream/55 px-[26px] py-[15px] font-medium text-cream transition-colors hover:border-brass-light hover:text-brass-light active:border-brass-light active:text-brass-light"
              >
                <SocialIcon id="whatsapp" />
                <span>{t('Scrivi su WhatsApp', 'Message on WhatsApp')}</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center rounded-full border border-cream/55 px-[26px] py-[15px] font-medium text-cream transition-colors hover:border-brass-light hover:text-brass-light"
              >
                {CONTACT.phone}
              </a>
            </Reveal>
          </div>

          <Reveal className="grid content-start gap-6.5 text-[16px] min-[640px]:text-[15px] leading-[1.8]">
            <div>
              <p className="mb-2 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.26em] text-[#9A9086]">{t('Laboratorio', 'Workshop')}</p>
              <p>
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.26em] text-[#9A9086]">{t('Visite', 'Visits')}</p>
              <p>{t('Dal luned\u00ec al venerd\u00ec, su appuntamento', 'Monday to Friday, by appointment')}</p>
            </div>
            <div>
              <p className="mb-2 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.26em] text-[#9A9086]">Email</p>
              <p>
                <a href={'mailto:' + CONTACT.email} className="border-b border-cream/30 hover:border-brass-light hover:text-brass-light">
                  {CONTACT.email}
                </a>
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] min-[640px]:text-[10px] uppercase tracking-[0.26em] text-[#9A9086]">{t('Altrove', 'Elsewhere')}</p>
              <p className="flex flex-wrap gap-4">
                {SOCIAL.filter((s) => s.id !== 'whatsapp').map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-b border-cream/30 pb-0.5 hover:border-brass-light hover:text-brass-light"
                  >
                    <SocialIcon id={s.id} size={14} />
                    {s.label}
                  </a>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <ContactForm />
      <LocationBand />
    </>
  );
}
