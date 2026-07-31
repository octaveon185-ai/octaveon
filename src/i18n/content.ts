export const locales = ['en', 'it'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'it' : 'en');
export const homeHref = (lang: Lang): string => (lang === 'en' ? '/' : '/it/');

const shared = {
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
    lead: 'No alcohol. Only nature.',
    body:
      'Handcrafted botanical elixirs that naturally elevate the experience, allowing clarity, vitality, and genuine connection to emerge.',
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
    eyebrow: 'PRIVATE · BY INVITATION',
    title: 'OPENING EXPERIENCE',
    labels: {
      date: 'DATE',
      place: 'PLACE',
      time: 'TIME',
      venue: 'VENUE',
    },
    note: 'A first gathering shaped around presence, art and the Mediterranean night.',
    cta: 'REQUEST AN INVITATION',
    pendingAsset: 'CLIENT VENUE LOGO · ASSET PENDING',
  },
  gallery: {
    eyebrow: 'THE SETTING',
    title: 'Altea, between sea and mountain.',
    tiles: [
      'The Mediterranean horizon',
      'Streets shaped by light',
      'Between sea and mountain',
      'Jacaranda exterior · day',
      'Jacaranda interior',
      'Jacaranda exterior · evening',
    ],
    pending: 'CLIENT VENUE PHOTOGRAPHY',
  },
  invite: {
    eyebrow: 'PRIVATE ACCESS BEGINS HERE',
    title: 'ENTER THE CIRCLE',
    intro:
      'Octave On is an intimate experience with limited capacity. Leave your details to request an invitation to the opening experience.',
    fields: {
      name: 'Your name',
      email: 'name@email.com',
      whatsapp: '+34 ___ ___ ___',
      whatsappLabel: 'WhatsApp · optional',
    },
    submit: 'REQUEST AN INVITATION',
    reassure: 'No noise. Only the details that matter.',
    sending: 'SENDING…',
    error: 'Something went wrong. Please try again shortly.',
    validation: 'Please enter your name and a valid email address.',
    success: {
      eyebrow: 'REQUEST RECEIVED',
      title: 'THANK YOU',
      body: 'Your request has reached us. We will contact you personally with the next details.',
      reset: 'SEND ANOTHER REQUEST',
    },
  },
  journal: {
    eyebrow: 'JOURNAL',
    title: 'Ideas for a more conscious culture of celebration.',
    all: 'VIEW JOURNAL',
    article: {
      tag: 'FIRST ARTICLE · MANIFESTO',
      title: 'What Is Octave On? A New Way to Celebrate.',
      excerpt:
        'A reflection on why celebration can become a space for presence, meaningful connection, and inner transformation.',
      read: 'READ THE ARTICLE',
    },
  },
  footer: {
    tagline: 'AN IMMERSIVE EXPERIENCE OF PRESENCE',
    links: [
      { label: 'Instagram', href: 'https://instagram.com', external: true },
      { label: 'Contact', href: '#invito', external: false },
      { label: 'Privacy', href: '#', external: false },
    ],
    rights: '© 2026 Octave On',
    location: 'Altea · Costa Blanca',
  },
} as const;

export const content = {
  en: {
    meta: {
      title: 'Octave On — An Immersive Experience of Presence',
      description:
        'Mindful events, immersive encounters and transformative festivals. Opening Experience, July 4 in Costa Blanca.',
      ogAlt: 'Octave On — an immersive experience of presence',
    },
    nav: {
      links: [
        { label: 'Experience', href: '#esperienza' },
        { label: 'Event', href: '#evento' },
        { label: 'Setting', href: '#gallery' },
        { label: 'Journal', href: '#journal' },
      ],
      cta: 'REQUEST AN INVITATION',
      langLabel: 'IT',
    },
    hero: {
      tagline: 'AN IMMERSIVE EXPERIENCE OF PRESENCE',
      explore: 'EXPLORE THE EXPERIENCE',
      scroll: 'Scroll',
    },
    ...shared,
  },
  it: {
    meta: {
      title: 'Octave On — Un’esperienza immersiva di presenza',
      description:
        'Eventi consapevoli, incontri immersivi e festival trasformativi. Opening Experience, 4 luglio in Costa Blanca.',
      ogAlt: 'Octave On — un’esperienza immersiva di presenza',
    },
    nav: {
      links: [
        { label: 'Esperienza', href: '#esperienza' },
        { label: 'Evento', href: '#evento' },
        { label: 'Luogo', href: '#gallery' },
        { label: 'Journal', href: '#journal' },
      ],
      cta: 'RICHIEDI UN INVITO',
      langLabel: 'EN',
    },
    hero: {
      tagline: 'AN IMMERSIVE EXPERIENCE OF PRESENCE',
      explore: 'ESPLORA L’ESPERIENZA',
      scroll: 'Scorri',
    },
    ...shared,
  },
} as const;

export type Content = (typeof content)[Lang];
