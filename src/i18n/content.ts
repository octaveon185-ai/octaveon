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
      tagline: 'AN IMMERSIVE EXPERIENCE OF PRESENCE',
      scroll: 'Scorri',
    },
    manifesto: {
      title: 'Octave On',
      intro:
        'is a cultural and experiential platform that creates mindful events, immersive encounters, and transformative festivals for a new generation of conscious gatherings.',
      vision: 'Our vision is to restore celebration to its original meaning:',
      body:
        "a space for authentic connection and collective awakening, where music, art, elixirs, and nourishment become vehicles of profound impressions that naturally elevate one's state of being and deepen the quality of presence.",
    },
    experience: {
      title: 'THE EXPERIENCE',
      rituals: [
        {
          num: '01',
          name: 'ENTERING THE CIRCLE',
          sub: 'The Opening Ritual',
          desc: 'A gentle transition from the ordinary into a shared field of presence.',
        },
        {
          num: '02',
          name: 'SONIC ALCHEMY',
          sub: 'Music as a Bridge to Awakening',
          desc: 'An immersive dialogue between electronic soundscapes, ancestral instruments, and living voices.',
        },
        {
          num: '03',
          name: 'LIVING VISUALS',
          sub: 'Light as a Gateway to Perception',
          desc: 'Living projections by a visual artist transform the space into a living organism. Light, movement, and form dissolve the boundary between the observer and the experience.',
        },
        {
          num: '04',
          name: 'NOURISHMENT',
          sub: 'Food & Natural Elixirs as Rituals of Presence',
          desc: 'A living table, created by an intuitive chef with thoughtful hands. Seasonal ingredients, handcrafted natural elixirs, vibrant colours, and edible flowers awaken the senses long before the first taste, inviting a slower, more conscious way of gathering.',
        },
        {
          num: '05',
          name: 'CELEBRATION',
          sub: 'Where Presence Becomes Movement',
          desc: 'After a journey through sound, light, and conscious nourishment, the celebration unfolds naturally. Live musicians and DJs weave together an evolving soundscape where movement becomes an expression of presence, connection, and joy.',
        },
      ],
    },
    whoFor: {
      body:
        'No alcohol. No artificial stimulants. Only handcrafted botanical elixirs that naturally elevate the experience, allowing clarity, vitality, and genuine connection to emerge.',
      closing:
        'A seamless flow between connection with others and a return to yourself',
    },
    interlude: {
      lead: 'An immersive experience.',
      text: "A story you'll carry with you long after the night is over.",
    },
    difference: {
      quote: 'What you seek is seeking you.',
      author: 'Rumi',
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
      eyebrow: 'Il luogo · The place',
      title: 'Altea, tra mare e montagna.',
      tiles: [
        'Tra mare e pietra',
        'Vicoli che scendono al mare',
        'Tetti sul Mediterraneo',
        'L’ombra del pino',
        'Bianco e palme',
        'Il borgo bianco',
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
      tagline: 'AN IMMERSIVE EXPERIENCE OF PRESENCE',
      scroll: 'Scroll',
    },
    manifesto: {
      title: 'Octave On',
      intro:
        'is a cultural and experiential platform that creates mindful events, immersive encounters, and transformative festivals for a new generation of conscious gatherings.',
      vision: 'Our vision is to restore celebration to its original meaning:',
      body:
        "a space for authentic connection and collective awakening, where music, art, elixirs, and nourishment become vehicles of profound impressions that naturally elevate one's state of being and deepen the quality of presence.",
    },
    experience: {
      title: 'THE EXPERIENCE',
      rituals: [
        {
          num: '01',
          name: 'ENTERING THE CIRCLE',
          sub: 'The Opening Ritual',
          desc: 'A gentle transition from the ordinary into a shared field of presence.',
        },
        {
          num: '02',
          name: 'SONIC ALCHEMY',
          sub: 'Music as a Bridge to Awakening',
          desc: 'An immersive dialogue between electronic soundscapes, ancestral instruments, and living voices.',
        },
        {
          num: '03',
          name: 'LIVING VISUALS',
          sub: 'Light as a Gateway to Perception',
          desc: 'Living projections by a visual artist transform the space into a living organism. Light, movement, and form dissolve the boundary between the observer and the experience.',
        },
        {
          num: '04',
          name: 'NOURISHMENT',
          sub: 'Food & Natural Elixirs as Rituals of Presence',
          desc: 'A living table, created by an intuitive chef with thoughtful hands. Seasonal ingredients, handcrafted natural elixirs, vibrant colours, and edible flowers awaken the senses long before the first taste, inviting a slower, more conscious way of gathering.',
        },
        {
          num: '05',
          name: 'CELEBRATION',
          sub: 'Where Presence Becomes Movement',
          desc: 'After a journey through sound, light, and conscious nourishment, the celebration unfolds naturally. Live musicians and DJs weave together an evolving soundscape where movement becomes an expression of presence, connection, and joy.',
        },
      ],
    },
    whoFor: {
      body:
        'No alcohol. No artificial stimulants. Only handcrafted botanical elixirs that naturally elevate the experience, allowing clarity, vitality, and genuine connection to emerge.',
      closing:
        'A seamless flow between connection with others and a return to yourself',
    },
    interlude: {
      lead: 'An immersive experience.',
      text: "A story you'll carry with you long after the night is over.",
    },
    difference: {
      quote: 'What you seek is seeking you.',
      author: 'Rumi',
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
      eyebrow: 'The place',
      title: 'Altea, between sea and mountain.',
      tiles: [
        'Between sea and stone',
        'Alleys down to the sea',
        'Rooftops on the Mediterranean',
        'The pine’s shade',
        'White walls and palms',
        'The white village',
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
