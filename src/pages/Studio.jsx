import Parallax from '../components/Parallax.jsx';
import Reveal from '../components/Reveal.jsx';
import { STUDIO_IMAGES } from '../data/projects.js';
import { useLang } from '../hooks/useLang.jsx';

export default function Studio() {
  const { t } = useLang();
  const stats = [
    ['3', t('Generazioni', 'Generations')],
    ['1 mm', t('Tolleranza di posa', 'Fitting tolerance')],
    ['TV \u00b7 VE', t('Laboratorio e posa', 'Workshop and fitting')],
    ['100%', t('Costruito da noi', 'Built in-house')],
  ];

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-[30px] pb-[clamp(44px,5vw,70px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
        <Reveal as="p" className="mb-6 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.32em] text-muted">
          {t('01 \u2014 Chi siamo', '01 \u2014 Studio')}
        </Reveal>
        <Reveal as="h1" className="max-w-[18em] font-serif text-[clamp(41px,5.4vw,88px)] leading-none tracking-[-0.02em] text-balance">
          {t('Un laboratorio che tiene viva la tradizione e continua a imparare.', 'A workshop that keeps tradition alive and keeps learning.')}
        </Reveal>
      </div>

      <Parallax src={STUDIO_IMAGES.wide} alt="" strength={10} className="h-[clamp(300px,52vh,560px)]" />

      <div className="mx-auto max-w-[1440px] px-[30px] py-[clamp(56px,7vw,110px)]">
        <div className="grid items-start gap-[clamp(30px,5vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          <Reveal as="p" className="font-serif text-[clamp(27px,2.6vw,38px)] leading-[1.28] tracking-[-0.01em] text-pretty">
            {t(
              'Da tre generazioni lavoriamo nell\u2019arredamento su misura. Negli anni abbiamo tenuto intatta la cura del prodotto, mantenendo una finestra aperta su come cambiano materiali, componenti e modi di abitare.',
              'Three generations have worked in bespoke furniture here. Over the years we have kept the craft and the care for the product intact, while keeping a window open on how materials, hardware and the way people live keep changing.'
            )}
          </Reveal>
          <Reveal className="flex flex-col gap-4.5 text-[17px] min-[640px]:text-[16px] leading-[1.75] text-body">
            <p>
              {t(
                'Ogni lavoro \u00e8 diverso, quindi nulla arriva da un catalogo: fattezze, materiali, tecnologie e finiture si decidono insieme al cliente o all\u2019architetto, stanza per stanza.',
                'Every job is different, so nothing is picked from a catalogue: shapes, materials, techniques and finishes are decided with the client or the architect, room by room.'
              )}
            </p>
            <p>
              {t(
                'Ci occupiamo anche di opere di falegnameria in cui il su misura \u00e8 determinante: allestimenti e installazioni per mostre e musei.',
                'We also take on joinery where \u201cmade to measure\u201d is the whole point: fittings and installations for exhibitions and museums.'
              )}
            </p>
            <p>
              {t(
                'Disegno, costruzione e posa restano sotto lo stesso tetto: \u00e8 il motivo per cui la tolleranza con cui lavoriamo \u00e8 il millimetro e non il centimetro.',
                'The drawing, the making and the fitting stay under one roof, which is why the tolerance we work to is a millimetre and not a centimetre.'
              )}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-[clamp(50px,6vw,90px)] grid gap-[2px] bg-line [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
          {stats.map(([n, label]) => (
            <div key={label} className="bg-cream px-[22px] py-7">
              <p className="font-serif text-[clamp(39px,3vw,44px)] leading-none">{n}</p>
              <p className="mt-2.5 text-[12px] min-[640px]:text-[11px] uppercase tracking-[0.22em] text-muted">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="bg-sand px-[30px] py-[clamp(56px,7vw,110px)]">
        <div className="mx-auto grid max-w-[1440px] items-stretch gap-[clamp(24px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {[
            [STUDIO_IMAGES.finish, t('Ogni manufatto viene assemblato e provato in laboratorio prima di essere smontato per il trasporto.', 'Every piece is assembled and tested in the workshop before it is taken apart for delivery.')],
            [STUDIO_IMAGES.site, t('Trasporto e montaggio sono curati dalle stesse mani, da Milano a Gorizia.', 'Transport and fitting are done by the same hands, from Milan to Gorizia.')],
          ].map(([src, cap]) => (
            <Reveal key={src} as="figure" className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="text-[15px] min-[640px]:text-[14px] leading-[1.7] text-muted">{cap}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
