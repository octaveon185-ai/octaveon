export const eventDetails = {
  name: 'OPENING EXPERIENCE',
  date: 'JULY 4',
  location: 'COSTA BLANCA',
  place: 'Altea · Costa Blanca',
  time: '19:00 — TILL NIGHT',
  venue: 'Restaurante Jacaranda @ Altea Golf',
  venueName: 'Restaurante Jacaranda',
  venueArea: 'Altea Golf',
  image: {
    src: '/images/altea-event.webp',
    srcSet: '/images/altea-event-960.webp 960w, /images/altea-event.webp 1920w',
    width: 1920,
    height: 2688,
    alt: 'Mediterranean landscape around Altea on the Costa Blanca',
  },
  venueLogo: {
    kind: 'placeholder',
    key: 'venue-jacaranda-logo',
  },
} as const;

export const experienceVisuals = {
  '01': {
    kind: 'graphic',
    variant: 'circle',
    label: 'Resonance circles',
  },
  '02': {
    kind: 'image',
    src: '/images/museum/sonic-alchemy-met.webp',
    width: 447,
    height: 625,
    alt: 'Ancient Cypriot limestone flute-player',
    credit: 'The Metropolitan Museum of Art · Open Access',
    source: 'https://www.metmuseum.org/art/collection/search/242059',
  },
  '03': {
    kind: 'graphic',
    variant: 'toroid',
    label: 'Concentric waves suggesting projection and perception',
  },
  '04': {
    kind: 'image',
    src: '/images/museum/nourishment-met.webp',
    width: 600,
    height: 600,
    alt: 'Ancient Greek cobalt-blue glass bowl',
    credit: 'The Metropolitan Museum of Art · Open Access',
    source: 'https://www.metmuseum.org/art/collection/search/250533',
  },
  '05': {
    kind: 'image',
    src: '/images/museum/celebration-met.webp',
    width: 468,
    height: 624,
    alt: 'Ancient Greek bronze statuette of a veiled and masked dancer',
    credit: 'The Metropolitan Museum of Art · Open Access',
    source: 'https://www.metmuseum.org/art/collection/search/255408',
  },
} as const;

export const galleryAssets = [
  {
    kind: 'image',
    src: '/images/altea-1.webp',
    srcSet: '/images/altea-1-640.webp 640w, /images/altea-1.webp 1100w',
    width: 1100,
    height: 619,
    alt: 'Costa Blanca landscape between sea and mountains',
  },
  {
    kind: 'image',
    src: '/images/altea-2.webp',
    srcSet: '/images/altea-2-640.webp 640w, /images/altea-2.webp 1100w',
    width: 1100,
    height: 1650,
    alt: 'A Mediterranean street in Altea',
  },
  {
    kind: 'image',
    src: '/images/altea-3.webp',
    srcSet: '/images/altea-3-640.webp 640w, /images/altea-3.webp 1100w',
    width: 1100,
    height: 619,
    alt: 'Approaching Altea on the Costa Blanca',
  },
  {
    kind: 'placeholder',
    key: 'venue-exterior-day',
    label: 'Client venue exterior · day',
  },
  {
    kind: 'placeholder',
    key: 'venue-interior',
    label: 'Client venue interior',
  },
  {
    kind: 'placeholder',
    key: 'venue-exterior-evening',
    label: 'Client venue exterior · evening',
  },
] as const;

export const closingVisual = {
  src: '/images/museum/closing-philosopher-met.webp',
  width: 468,
  height: 624,
  alt: 'Ancient marble head of a philosopher',
  credit: 'The Metropolitan Museum of Art · Open Access',
  source: 'https://www.metmuseum.org/art/collection/search/252887',
} as const;
