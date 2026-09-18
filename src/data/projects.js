const A = 'https://www.arredamentimasca.it/it/sites/default/files/archivio/';
const img = (file, cap, capEn) => ({ src: A + encodeURI(file), cap: cap || '', capEn: capEn || cap || '' });

/**
 * Dati trascritti dal sito originale arredamentimasca.it.
 * Sostituire gli URL remoti con i file originali in alta risoluzione
 * (es. /img/<progetto>/<file>.jpg) prima della pubblicazione.
 */
export const PROJECTS = [
  {
    slug: 'cucina-s',
    cat: 'cucine',
    title: 'Cucina S.', titleEn: 'Cucina S.',
    kicker: 'Cucina su misura', kickerEn: 'Bespoke kitchen',
    meta: 'Cucina su misura', metaEn: 'Bespoke kitchen',
    span: true, ratio: 'aspect-[16/9]',
    thumb: img('homepage.jpg'),
    hero: A + 'homepage.jpg',
    body: [], bodyEn: [],
    specs: [['Tipologia', 'Type', 'Cucina su misura', 'Bespoke kitchen']],
    images: [img('111111111111111.jpg'), img('33333333333.jpg'), img('777777.jpg'), img('6666666.jpg'), img('555555.jpg'), img('4444444444.jpg')],
  },
  {
    slug: 'appartamento-milano',
    cat: 'appartamenti',
    title: 'Appartamento a Milano', titleEn: 'Apartment in Milan',
    kicker: 'Milano', kickerEn: 'Milan',
    meta: 'Arredo completo', metaEn: 'Full fit-out',
    ratio: 'aspect-[3/4]',
    thumb: img('LET_6928-1024x6811_0.jpg'),
    hero: A + 'LET_6928-1024x6811.jpg',
    body: [
      'Arredamento con serie di librerie ed armadi con finitura laccata ral 7011 opaco, interni armadi in olmo a taglio di sega, particolari in pelle ed ebano makassar.',
      'Il "fiore all\u2019occhiello" di questo lavoro \u00e8 stato la realizzazione di una porta scorrevole a scomparsa, di grandi dimensioni metri 3x3 con binario incassato a filo soffitto.',
    ],
    bodyEn: [
      'A set of bookcases and wardrobes finished in matt RAL 7011 lacquer, wardrobe interiors in saw-cut elm, details in leather and Macassar ebony.',
      'The highlight of this job was a large pocket sliding door, three metres by three, with the track recessed flush into the ceiling.',
    ],
    specs: [
      ['Tipologia', 'Type', 'Arredo completo', 'Full fit-out'],
      ['Materiali', 'Materials', 'Laccato RAL 7011 opaco, olmo, pelle, ebano makassar', 'Matt RAL 7011 lacquer, elm, leather, Macassar ebony'],
      ['Luogo', 'Place', 'Milano', 'Milan'],
    ],
    images: [img('LET_6926-1024x6811.jpg'), img('LET_6925-1024x6811.jpg'), img('LET_6868-1024x6811.jpg'), img('LET_6965-1024x6811.jpg'), img('LET_6918-681x10241.jpg'), img('LET_6996-1024x6811.jpg')],
  },
  {
    slug: 'palazzo-venezia',
    cat: 'palazzi',
    title: 'Palazzo a Venezia', titleEn: 'Palazzo in Venice',
    kicker: 'Venezia, tre piani', kickerEn: 'Venice, three floors',
    meta: 'Arredo su misura', metaEn: 'Bespoke fit-out',
    ratio: 'aspect-[3/4]',
    thumb: img('DSC_3540-HDR-1024x683_0.jpg'),
    hero: A + 'DSC_3485-HDR-1024x683.jpg',
    body: ['L\u2019intervento ha riguardato i 3 piani del palazzo, dove le opere pi\u00f9 significative realizzate sono state: una cucina in noce canaletto con piani in marmo di Carrara, un mobile sottoscala sempre in canaletto, i parapetti in vetro delle scale, un mobile bagno con piani in calacatta, un mobile bagno interamente in corian bianco ed una cucina laccata bianco con piani in corian.'],
    bodyEn: ['The work covered all three floors of the building. The most significant pieces were a Canaletto walnut kitchen with Carrara marble tops, an under-stair unit also in Canaletto, the glass balustrades of the staircases, a bathroom unit with Calacatta tops, a bathroom unit entirely in white Corian, and a white lacquered kitchen with Corian tops.'],
    specs: [
      ['Tipologia', 'Type', 'Arredo su misura, tre piani', 'Bespoke fit-out, three floors'],
      ['Materiali', 'Materials', 'Noce canaletto, marmo di Carrara, calacatta, corian, vetro', 'Canaletto walnut, Carrara marble, Calacatta, Corian, glass'],
      ['Luogo', 'Place', 'Venezia', 'Venice'],
    ],
    images: [
      img('DSC_3550-Modifica-1024x683.jpg', 'Cucina in noce canaletto', 'Canaletto walnut kitchen'),
      img('DSC_3590_b-1024x683.jpg', 'Cucina in noce canaletto con piani in Carrara', 'Canaletto walnut kitchen with Carrara tops'),
      img('DSC_3540-HDRa-1024x683.jpg', 'Mobile sottoscala in noce canaletto', 'Under-stair unit in Canaletto walnut'),
      img('DSC_3495-HDR-1024x683.jpg', 'Parapetti in vetro', 'Glass balustrades'),
      img('DSC_3659_b-Modifica-Modifica-1024x683.jpg', 'Mobile bagno con piano in calacatta', 'Bathroom unit with Calacatta top'),
      img('DSC_3697-1024x683.jpg', 'Cucina laccata con piano e schienale in corian', 'Lacquered kitchen with Corian top and splashback'),
    ],
  },
  {
    slug: 'cucina-b',
    cat: 'cucine',
    title: 'Cucina B.', titleEn: 'Cucina B.',
    kicker: 'Cucina su misura', kickerEn: 'Bespoke kitchen',
    meta: 'Cucina su misura', metaEn: 'Bespoke kitchen',
    ratio: 'aspect-[4/5]',
    thumb: img('DSC09263-Modifica_5_11zon.jpg'),
    hero: A + 'DSC09251-2_2_11zon.jpg',
    body: ['Cucina in noce canaletto con colonne laccate.'],
    bodyEn: ['A Canaletto walnut kitchen with lacquered tall units.'],
    specs: [
      ['Tipologia', 'Type', 'Cucina su misura', 'Bespoke kitchen'],
      ['Materiali', 'Materials', 'Noce canaletto, laccato', 'Canaletto walnut, lacquer'],
    ],
    images: [img('DSC09254-Modifica_1_11zon.jpg'), img('DSC09271-Modifica_1_11zon.jpg'), img('DSC09246_1_11zon.jpg'), img('DSC09263-Modifica_5_11zon_0.jpg'), img('DSC09270-Modifica-2_6_11zon.jpg'), img('DSC09275-Modifica_2_11zon.jpg')],
  },
  {
    slug: 'appartamento-venezia',
    cat: 'appartamenti',
    title: 'Appartamento a Venezia', titleEn: 'Apartment in Venice',
    kicker: 'Venezia, Dorsoduro', kickerEn: 'Venice, Dorsoduro',
    meta: 'Salone e zona giorno', metaEn: 'Living area',
    span: true, ratio: 'aspect-[16/10]',
    thumb: img('salone_0.jpg'),
    hero: A + 'salone2.jpg',
    body: ['L\u2019intervento \u00e8 stato svolto all\u2019ultimo piano di un palazzo nel sestiere di Dorsoduro a Venezia. Sono stati realizzati: una cucina laccata colore grigio al campione con piani in pietra piasentina con frontale libreria, una scala laccata bianco con gradini a sbalzo e parapetto in vetro, gli armadi e letti delle camere ed i mobili dei bagni laccati/corian.'],
    bodyEn: ['The work was carried out on the top floor of a building in the Dorsoduro district of Venice: a kitchen lacquered in a grey matched to sample with Piasentina stone tops and a bookcase front, a white lacquered staircase with cantilevered treads and a glass balustrade, the wardrobes and beds of the bedrooms, and the bathroom units in lacquer and Corian.'],
    specs: [
      ['Tipologia', 'Type', 'Arredo completo', 'Full fit-out'],
      ['Materiali', 'Materials', 'Laccato al campione, pietra piasentina, vetro, corian', 'Lacquer matched to sample, Piasentina stone, glass, Corian'],
      ['Luogo', 'Place', 'Venezia, Dorsoduro', 'Venice, Dorsoduro'],
    ],
    images: [
      img('scala.jpg', 'Scala a sbalzo con parapetto in vetro', 'Cantilevered staircase with glass balustrade'),
      img('cucina.jpg', 'Cucina laccata grigio al campione con piani in pietra piasentina', 'Kitchen lacquered grey to sample, Piasentina stone tops'),
      img('libreria cucina.jpg', 'Libreria retro-cucina', 'Bookcase behind the kitchen'),
      img('letto e camera matrim.jpg', 'Armadio a 3 ante scorrevoli, letto con testiera e vani laterali', 'Three sliding-door wardrobe, bed with headboard and side compartments'),
      img('letti blu.jpg', 'Camera ragazzi', 'Children\u2019s bedroom'),
      img('mobile bagno.jpg', 'Mobile bagno con piani in corian', 'Bathroom unit with Corian tops'),
    ],
  },
  {
    slug: 'cucina-c',
    cat: 'cucine',
    title: 'Cucina C.', titleEn: 'Cucina C.',
    kicker: 'Cucina su misura', kickerEn: 'Bespoke kitchen',
    meta: 'Cucina su misura', metaEn: 'Bespoke kitchen',
    ratio: 'aspect-[3/4]',
    thumb: img('DSC00338-min.jpg'),
    hero: A + 'DSC00339-min.jpg',
    body: [], bodyEn: [],
    specs: [['Tipologia', 'Type', 'Cucina su misura', 'Bespoke kitchen']],
    images: [img('DSC00344-min.jpg'), img('DSC00346-min.jpg'), img('DSC00347-min.jpg'), img('DSC00349-min.jpg'), img('DSC00351-min.jpg'), img('DSC00354-min.jpg'), img('DSC00357-min.jpg'), img('DSC00338-min.jpg')],
  },
  {
    slug: 'attico-gorizia',
    cat: 'palazzi',
    title: 'Attico a Gorizia', titleEn: 'Penthouse in Gorizia',
    kicker: 'Gorizia, centro', kickerEn: 'Gorizia, town centre',
    meta: 'Arredo completo', metaEn: 'Full fit-out',
    ratio: 'aspect-[3/4]',
    thumb: img('IMG_5469-min_0.JPG'),
    hero: A + 'DSC_0794-min.JPG',
    body: [
      'I lavori sono stati realizzati in un grande attico in pieno centro a Gorizia. Siamo particolarmente orgogliosi della grande porta scorrevole laccata "rosso" al campione h. cm. 280x280 realizzata per dividere l\u2019ambiente cucina da quello pranzo/living.',
      'Abbiamo realizzato anche una serie di librerie su misura laccate ral 9010 opaco, per pi\u00f9 ambienti della casa, armadi laccati nella stessa finitura, cabina armadio in zebrano e vari complementi come scrivania su misura su nicchia e mensole di vario tipo.',
    ],
    bodyEn: [
      'The work was carried out in a large penthouse in the centre of Gorizia. We are particularly proud of the large sliding door, lacquered in a red matched to sample and measuring 280 by 280 cm, made to separate the kitchen from the dining and living area.',
      'We also built a series of bespoke bookcases in matt RAL 9010 lacquer for several rooms, wardrobes in the same finish, a walk-in wardrobe in zebrano, and various extras such as a desk made to fit a recess and shelves of different kinds.',
    ],
    specs: [
      ['Tipologia', 'Type', 'Arredo completo', 'Full fit-out'],
      ['Materiali', 'Materials', 'Laccato RAL 9010 opaco, laccato rosso al campione, zebrano', 'Matt RAL 9010 lacquer, red lacquer to sample, zebrano'],
      ['Luogo', 'Place', 'Gorizia', 'Gorizia'],
    ],
    images: [img('DSC_0789-min_1.JPG'), img('DSC_0798-min_0.JPG'), img('IMG_54440000-min_0.JPG'), img('IMG_543600000-min.JPG'), img('DSC_0859.JPG'), img('IMG_5490.JPG')],
  },
  {
    slug: 'appartamento-venezia-0',
    cat: 'appartamenti',
    title: 'Appartamento a Venezia', titleEn: 'Apartment in Venice',
    kicker: 'Venezia, Dorsoduro', kickerEn: 'Venice, Dorsoduro',
    meta: 'Zona notte e armadiature', metaEn: 'Bedrooms and wardrobes',
    ratio: 'aspect-[4/5]',
    thumb: img('IMG_8900_0.JPG'),
    hero: A + 'IMG_8900_1.JPG',
    body: [
      'Un lavoro di cui siamo particolamente fieri, che ci ha coinvolto ed emozionato con l\u2019uso del noce canaletto massello trattato al naturale, leggermente sbiancato.',
      'Le opere pi\u00f9 significative realizzate sono: un tavolo con relative sedute che si prestano a pi\u00f9 funzioni/utilizzi anche per la zona soggiorno, in cui abbiamo realizzato altre sedute ed un mobile-tv.',
      'Blocco cucina che "dialoga" con blocco Alpes-inox, con ante laccate, schienali in canaletto, maniglie in canaletto su misura, piano e schienale in marmo bianco sivec.',
    ],
    bodyEn: [
      'A job we are particularly proud of, and one we enjoyed: solid Canaletto walnut treated naturally, lightly bleached.',
      'The most significant pieces are a table with its seating, which serves several uses including the living area, where we also made further seating and a TV unit.',
      'A kitchen block that converses with an Alpes-inox unit: lacquered fronts, Canaletto walnut backs, bespoke Canaletto handles, top and splashback in white Sivec marble.',
    ],
    specs: [
      ['Tipologia', 'Type', 'Arredo completo', 'Full fit-out'],
      ['Materiali', 'Materials', 'Noce canaletto massello, marmo bianco sivec, laccato', 'Solid Canaletto walnut, white Sivec marble, lacquer'],
      ['Luogo', 'Place', 'Venezia, Dorsoduro', 'Venice, Dorsoduro'],
    ],
    images: [img('IMG_8897.JPG'), img('IMG_8899.JPG'), img('luglio 14 009.jpg'), img('IMG_5471.JPG'), img('IMG_5466.JPG'), img('luglio 14 016.jpg')],
  },
];

export const CATEGORIES = [
  { id: 'tutti', it: 'Tutti', en: 'All' },
  { id: 'cucine', it: 'Cucine', en: 'Kitchens' },
  { id: 'appartamenti', it: 'Appartamenti', en: 'Apartments' },
  { id: 'palazzi', it: 'Palazzi e attici', en: 'Palazzi & penthouses' },
];

export const STUDIO_IMAGES = {
  wide: A + 'DSC_0789-min.JPG',
  finish: A + encodeURI('DSC09263-Modifica_5_11zon.jpg'),
  site: A + 'IMG_5469-min_0.JPG',
};

export const HERO_IMAGE = A + 'salone_1.jpg';

export const OFFERS = [
  { img: img('IMG_8900_0.JPG'), it: 'Tavolo in rovere massello, 240 cm', en: 'Solid oak table, 240 cm' },
  { img: img('IMG_5469-min_0.JPG'), it: 'Madia laccata, pezzo da esposizione', en: 'Lacquered sideboard, showroom piece' },
  { img: img('salone_0.jpg'), it: 'Prototipo di libreria a parete', en: 'Wall bookcase prototype' },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
