/* ============================================================
   Octave On — bilingual content (IT default, EN secondary)
   Single source of truth for copy. Components read
   content[lang].<section>.
   ============================================================ */

export const locales = ['it', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'it';

export const otherLang = (lang: Lang): Lang => (lang === 'it' ? 'en' : 'it');
/** Home URL for a given locale (prefixDefaultLocale: false). */
export const homeHref = (lang: Lang): string => (lang === 'it' ? '/' : '/en/');

export const content = {
  it: {
    meta: {
      title: 'Octave On — Una notte rara sul Mediterraneo',
      description:
        'Un evento immersivo su invito: musica, arte e presenza, dal tramonto all’alba. Altea, Costa Blanca · 02.10.26.',
      ogAlt: 'Octave On — i due anelli d’oro',
    },
    nav: {
      links: [
        { label: 'Esperienza', href: '#esperienza' },
        { label: 'Evento', href: '#evento' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Journal', href: '#journal' },
      ],
      cta: 'Richiedi invito',
      langLabel: 'EN',
    },
    hero: {
      eyebrow: 'Giorno · The Journey Begins',
      title: 'Questa non è una serata qualunque.',
      subtitle:
        'Un’esperienza immersiva di musica, arte e presenza—dal tramonto all’alba, sul Mediterraneo.',
      ctaPrimary: 'Richiedi il tuo invito',
      ctaSecondary: 'Scopri l’esperienza',
      scroll: 'Scorri',
    },
    manifesto: {
      eyebrow: 'Il Manifesto · The Manifesto',
      lines: [
        'Octave On non è un evento da guardare.',
        'È una soglia da attraversare — una notte in cui musica, arte e persone diventano una cosa sola.',
      ],
      signature: 'Vieni come sei. Esci diverso.',
    },
    experience: {
      eyebrow: 'Tramonto · The Golden Hour',
      title: 'Cinque modi di essere presenti.',
      intro:
        'Quando la luce si fa calda, l’esperienza comincia. Cibo, arte e connessione, un rituale alla volta.',
      rituals: [
        {
          num: '01',
          name: 'Cacao',
          sub: 'Cacao Ceremony',
          essence: 'Apertura',
          desc: 'Una tazza calda che apre il petto. Il rituale lento che dà inizio alla notte, prima che tutto cominci.',
        },
        {
          num: '02',
          name: 'Suono',
          sub: 'Sound',
          essence: 'Vibrazione',
          desc: 'Frequenze che attraversano il corpo prima delle orecchie. Ti muovi senza decidere di farlo.',
        },
        {
          num: '03',
          name: 'Arte visiva',
          sub: 'Visual Art',
          essence: 'Visione',
          desc: 'Luce, proiezioni e materia. Lo spazio diventa vivo e respira insieme a chi lo abita.',
        },
        {
          num: '04',
          name: 'Nutrimento',
          sub: 'Nourishment',
          essence: 'Piacere',
          desc: 'Sapori mediterranei condivisi. Il piacere lento come forma di presenza, non di consumo.',
        },
        {
          num: '05',
          name: 'Danza',
          sub: 'Dance',
          essence: 'Libertà',
          desc: 'Nessuna coreografia. Solo corpi liberi sotto la stessa luce, fino a quando torna il giorno.',
        },
      ],
    },
    whoFor: {
      eyebrow: 'Per chi è · Who it’s for',
      title: 'Per chi cerca qualcosa di più vero.',
      points: [
        'Per chi è stanco delle serate che si dimenticano.',
        'Per chi sceglie l’arte, la presenza e le persone autentiche.',
        'Per chi vuole sentirsi parte di qualcosa di raro.',
      ],
      tags: ['Autentico', 'Artistico', 'Significativo'],
    },
    interlude: {
      eyebrow: 'Interludio · The Turning',
      text: 'Quando il sole scompare, qualcosa si accende.',
    },
    difference: {
      eyebrow: 'Notte · Into the Dark',
      title: 'Non una festa. Una celebrazione.',
      notTitle: 'Quello che non siamo',
      not: ['Una serata qualunque', 'Intrattenimento passivo', 'Una notte da dimenticare'],
      isTitle: 'Quello che siamo',
      is: ['Una celebrazione viva', 'Partecipazione e presenza', 'Una notte da ricordare'],
    },
    event: {
      eyebrow: 'L’evento pilota · The pilot event',
      title: 'Una notte. Una sola.',
      facts: [
        { label: 'Data', value: '02.10.26' },
        { label: 'Luogo', value: 'Altea, Costa Blanca' },
        { label: 'Orario', value: 'Dal tramonto all’alba' },
      ],
      coords: '38°34′13.5″N · 0°04′38.1″O',
      note: 'Mediterraneo notturno. Invito privato, posti limitati. I dettagli completi arrivano con il tuo invito.',
      cta: 'Richiedi il tuo invito',
    },
    gallery: {
      eyebrow: 'Mood · Atmosfera',
      title: 'Frammenti di una notte.',
      tiles: [
        'L’ora dorata sull’acqua',
        'La prima tazza',
        'Luce che respira',
        'Corpi sotto la stessa luce',
        'Tavola mediterranea',
        'Fino al ritorno del giorno',
      ],
    },
    invite: {
      eyebrow: 'Waiting list · Richiesta invito',
      title: 'Chiedi la tua soglia d’accesso.',
      intro:
        'I posti sono pochi e per invito. Lasciaci come raggiungerti: risponderemo personalmente.',
      fields: {
        name: 'Il tuo nome',
        email: 'nome@email.com',
        whatsapp: '+39 ___ ___ ____',
        whatsappLabel: 'WhatsApp · opzionale',
      },
      submit: 'Richiedi il tuo invito',
      reassure: 'Nessuno spam. Solo la tua soglia d’accesso.',
      sending: 'Invio in corso…',
      error: 'Qualcosa è andato storto. Riprova tra poco.',
      success: {
        eyebrow: 'Richiesta ricevuta',
        title: 'Grazie',
        body: 'La tua richiesta è arrivata. Quando la notte sarà vicina, ti scriveremo con la tua soglia d’accesso.',
        reset: 'Invia un’altra richiesta',
      },
    },
    journal: {
      eyebrow: 'Journal · Il diario',
      title: 'Parole prima della notte.',
      all: 'Tutti gli articoli',
      article: {
        tag: 'Primo articolo · Manifesto',
        title: 'Cos’è Octave On: una nuova idea di celebrazione.',
        excerpt:
          'Perché abbiamo smesso di chiamarla “festa”, e cosa succede quando musica, arte e presenza si incontrano in una sola notte mediterranea.',
        read: 'Leggi l’articolo →',
      },
    },
    footer: {
      tagline: 'Un invito privato a una notte rara.',
      links: [
        { label: 'Instagram', href: 'https://instagram.com', external: true },
        { label: 'Contatti', href: '#invito', external: false },
        { label: 'Privacy', href: '#', external: false },
      ],
      rights: '© 2026 Octave On',
      coords: '38°34′13.5″N · 0°04′38.1″O · Altea',
    },
  },

  en: {
    meta: {
      title: 'Octave On — A rare night on the Mediterranean',
      description:
        'An invite-only immersive event: music, art and presence, from sunset to dawn. Altea, Costa Blanca · 02.10.26.',
      ogAlt: 'Octave On — the two golden rings',
    },
    nav: {
      links: [
        { label: 'Experience', href: '#esperienza' },
        { label: 'Event', href: '#evento' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Journal', href: '#journal' },
      ],
      cta: 'Request invite',
      langLabel: 'IT',
    },
    hero: {
      eyebrow: 'Day · The Journey Begins',
      title: 'This is not just another night.',
      subtitle:
        'An immersive experience of music, art and presence—from sunset to dawn, on the Mediterranean.',
      ctaPrimary: 'Request your invitation',
      ctaSecondary: 'Discover the experience',
      scroll: 'Scroll',
    },
    manifesto: {
      eyebrow: 'The Manifesto',
      lines: [
        'Octave On is not an event to watch.',
        'It is a threshold to cross — a night where music, art and people become one.',
      ],
      signature: 'Come as you are. Leave changed.',
    },
    experience: {
      eyebrow: 'The Golden Hour',
      title: 'Five ways of being present.',
      intro:
        'When the light turns warm, the experience begins. Food, art and connection, one ritual at a time.',
      rituals: [
        {
          num: '01',
          name: 'Cacao',
          sub: 'Cacao Ceremony',
          essence: 'Opening',
          desc: 'A warm cup that opens the chest. The slow ritual that begins the night, before anything else does.',
        },
        {
          num: '02',
          name: 'Sound',
          sub: 'Suono',
          essence: 'Vibration',
          desc: 'Frequencies that move through the body before the ears. You move without deciding to.',
        },
        {
          num: '03',
          name: 'Visual Art',
          sub: 'Arte visiva',
          essence: 'Vision',
          desc: 'Light, projections and matter. The space comes alive and breathes with those inside it.',
        },
        {
          num: '04',
          name: 'Nourishment',
          sub: 'Nutrimento',
          essence: 'Pleasure',
          desc: 'Shared Mediterranean flavours. Slow pleasure as a form of presence, not of consumption.',
        },
        {
          num: '05',
          name: 'Dance',
          sub: 'Danza',
          essence: 'Freedom',
          desc: 'No choreography. Only free bodies under the same light, until the day returns.',
        },
      ],
    },
    whoFor: {
      eyebrow: 'Who it’s for',
      title: 'For those who seek something more real.',
      points: [
        'For those tired of nights that are forgotten.',
        'For those who choose art, presence and authentic people.',
        'For those who want to feel part of something rare.',
      ],
      tags: ['Authentic', 'Artistic', 'Meaningful'],
    },
    interlude: {
      eyebrow: 'The Turning',
      text: 'When the sun disappears, something ignites.',
    },
    difference: {
      eyebrow: 'Into the Dark',
      title: 'Not a party. A celebration.',
      notTitle: 'What we are not',
      not: ['Just another night', 'Passive entertainment', 'A night to forget'],
      isTitle: 'What we are',
      is: ['A living celebration', 'Participation and presence', 'A night to remember'],
    },
    event: {
      eyebrow: 'The pilot event',
      title: 'One night. Only one.',
      facts: [
        { label: 'Date', value: '02.10.26' },
        { label: 'Place', value: 'Altea, Costa Blanca' },
        { label: 'Hours', value: 'From sunset to dawn' },
      ],
      coords: '38°34′13.5″N · 0°04′38.1″W',
      note: 'A Mediterranean night. Private invitation, limited places. Full details arrive with your invite.',
      cta: 'Request your invitation',
    },
    gallery: {
      eyebrow: 'Mood',
      title: 'Fragments of a night.',
      tiles: [
        'The golden hour on the water',
        'The first cup',
        'Light that breathes',
        'Bodies under the same light',
        'A Mediterranean table',
        'Until the day returns',
      ],
    },
    invite: {
      eyebrow: 'Waiting list · Request invite',
      title: 'Ask for your threshold of access.',
      intro:
        'Places are few and by invitation. Leave us a way to reach you: we’ll reply personally.',
      fields: {
        name: 'Your name',
        email: 'name@email.com',
        whatsapp: '+34 ___ ___ ___',
        whatsappLabel: 'WhatsApp · optional',
      },
      submit: 'Request your invitation',
      reassure: 'No spam. Only your threshold of access.',
      sending: 'Sending…',
      error: 'Something went wrong. Please try again shortly.',
      success: {
        eyebrow: 'Request received',
        title: 'Thank you',
        body: 'Your request has reached us. When the night draws near, we’ll write to you with your threshold of access.',
        reset: 'Send another request',
      },
    },
    journal: {
      eyebrow: 'Journal',
      title: 'Words before the night.',
      all: 'All articles',
      article: {
        tag: 'First article · Manifesto',
        title: 'What Octave On is: a new idea of celebration.',
        excerpt:
          'Why we stopped calling it a “party”, and what happens when music, art and presence meet in a single Mediterranean night.',
        read: 'Read the article →',
      },
    },
    footer: {
      tagline: 'A private invitation to a rare night.',
      links: [
        { label: 'Instagram', href: 'https://instagram.com', external: true },
        { label: 'Contact', href: '#invito', external: false },
        { label: 'Privacy', href: '#', external: false },
      ],
      rights: '© 2026 Octave On',
      coords: '38°34′13.5″N · 0°04′38.1″W · Altea',
    },
  },
} as const;

export type Content = (typeof content)[Lang];
