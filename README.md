# Masca — Arredamenti su misura

Restyling del sito arredamentimasca.it. Vite + React 18 + Tailwind CSS v4, animazioni con Motion (scroll reveal, transizioni di pagina, filtri della galleria) e GSAP ScrollTrigger (parallasse delle immagini a piena larghezza).

## Avvio

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview
\`\`\`

## Deploy su Vercel

Framework preset **Vite**, build \`npm run build\`, output \`dist\`. Il \`vercel.json\` incluso riscrive tutte le rotte su \`index.html\` (necessario per il routing lato client).

\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

## Struttura

\`\`\`
src/
  main.jsx            entry, BrowserRouter + LangProvider
  App.jsx             rotte, transizioni di pagina, form e mappa in coda a ogni pagina
  index.css           Tailwind v4 + @theme con i token del progetto
  data/
    site.js           contatti, social, voci di menu, credit
    projects.js       gli 8 progetti con testi IT/EN, specifiche e gallerie
    legal.js          note legali e privacy, verbatim dal sito
  hooks/useLang.jsx   switch IT/EN, persistito in localStorage
  components/
    Header, Footer, Cursor, ScrollProgress, ScrollToTop
    Reveal            fade + rise all'ingresso in viewport (Motion)
    Parallax          immagine full-bleed con GSAP ScrollTrigger
    ProjectCard       card della galleria, con layout animation
    ContactForm       form sopralluogo (da collegare)
    LocationBand      indirizzo + mappa OpenStreetMap desaturata
    SocialIcon        icone monolinea 1.5px
  pages/
    Home, Studio, Work, Project, Process, Offers, Contact, Legal
\`\`\`

## Design system

Definito come \`@theme\` in \`src/index.css\`: \`ink\` #14110D, \`cream\` #FBF8F2, \`sand\` #EFE9DD, \`line\` #E5DDCD, \`brass\` #A9803F, \`brass-light\` #C9A063, \`muted\` #6B6257, \`body\` #3B352C. Tipografia: Instrument Serif per i titoli, Work Sans per il testo; le etichette sono maiuscoletto 10–11px con \`tracking\` 0.2–0.32em.

## Da completare prima della pubblicazione

- **Fotografie.** Gli URL in \`src/data/projects.js\` puntano ancora al server di arredamentimasca.it. Scaricare gli originali in alta risoluzione, metterli in \`public/img/<progetto>/\` e sostituire la costante \`A\` con \`/img/\`. Le immagini online sono compresse per il vecchio layout e su un hero a schermo pieno si vedono.
- **Form di contatto.** \`ContactForm.jsx\` fa \`console.info\` e mostra il messaggio di conferma; non invia nulla. Collegare un endpoint (Vercel Serverless Function, Resend, Formspark) nel gestore \`onSubmit\`.
- **Privacy.** \`src/data/legal.js\` \u00e8 la trascrizione fedele del sito attuale: cita il D.Lgs 196/2003 e non il GDPR, e non menziona il form. Da far aggiornare.
- **Traduzioni inglesi.** Scritte da zero, da far rileggere. Le pagine legali restano volutamente in italiano.
- **Logo.** Il marchio \u00e8 composto tipograficamente in Instrument Serif. Se esiste il vettoriale, sostituirlo in \`Header.jsx\`.
- **Cucina S. e Cucina C.** non hanno testo descrittivo nemmeno sul sito originale: mostrano una nota al posto della scheda. Servono i testi.

## Crediti

Design e sviluppo: [Ivan Camassa](https://www.ivancamassa.com)
