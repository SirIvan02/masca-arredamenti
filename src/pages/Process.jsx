import Reveal from '../components/Reveal.jsx';
import { useLang } from '../hooks/useLang.jsx';

const STEPS = [
  {
    it: 'Contatto e sopralluogo', en: 'Contact and site visit',
    bodyIt: 'Veniamo a vedere l\u2019ambiente, prendiamo le misure, annotiamo le esigenze e mettiamo gi\u00f9 una prima ipotesi su materiali, finiture e realizzazione.',
    bodyEn: 'We come and look at the room, take the measurements, note down what you need and sketch a first hypothesis on materials, finishes and how it can be built.',
  },
  {
    it: 'Progettazione', en: 'Design',
    bodyIt: 'Studiamo spazi e misure per proporre la soluzione pi\u00f9 vicina ai vostri desideri, abbinando materiali, finiture e soluzioni tecniche. Spesso fianco a fianco con architetti e interior designer.',
    bodyEn: 'We study the space and the measurements to propose the solution closest to what you had in mind, matching materials, finishes and technical details. Often side by side with architects and interior designers.',
  },
  {
    it: 'Realizzazione', en: 'Making',
    bodyIt: 'Il progetto prende forma: i materiali vengono lavorati nel nostro laboratorio dal grezzo al finito. Ogni manufatto viene assemblato e provato nei dettagli prima di uscire.',
    bodyEn: 'The drawing takes shape: materials are worked in our own workshop from rough to finished. Every piece is assembled and tested in detail before it leaves.',
  },
  {
    it: 'Installazione', en: 'Installation',
    bodyIt: 'Trasporto e montaggio sono curati dalle nostre mani, con la stessa attenzione al dettaglio con cui il manufatto \u00e8 stato costruito.',
    bodyEn: 'Transport and fitting are handled by our own hands, with the attention to detail the piece was built with.',
  },
  {
    it: 'Post vendita', en: 'After the install',
    bodyIt: 'Le stesse mani che hanno curato l\u2019installazione tornano per gli eventuali aggiustamenti e regolazioni, anche a distanza di anni.',
    bodyEn: 'The same hands that fitted the piece come back for any adjustment it needs, years later included.',
  },
];

export default function Process() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-[1440px] px-[30px] pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+60px)]">
      <Reveal as="p" className="mb-5.5 text-[11px] uppercase tracking-[0.32em] text-muted">
        {t('03 \u2014 Servizi', '03 \u2014 Process')}
      </Reveal>
      <Reveal as="h1" className="max-w-[18em] font-serif text-[clamp(36px,5.2vw,84px)] leading-none tracking-[-0.02em] text-balance">
        {t('Dalla prima telefonata alla stanza finita', 'From the first phone call to the finished room')}
      </Reveal>

      <div className="mt-[clamp(44px,6vw,90px)] border-t border-line">
        {STEPS.map((s, i) => (
          <Reveal key={s.it} className="grid gap-[clamp(18px,5vw,70px)] border-b border-line px-1 py-8 [grid-template-columns:auto_minmax(0,1fr)]">
            <span className="font-serif text-[19px] text-brass">{String(i + 1).padStart(2, '0')}</span>
            <div className="grid gap-[clamp(14px,4vw,50px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]">
              <h3 className="font-serif text-[clamp(24px,2.5vw,36px)] leading-[1.1]">{t(s.it, s.en)}</h3>
              <p className="text-[16px] leading-[1.75] text-body">{t(s.bodyIt, s.bodyEn)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
