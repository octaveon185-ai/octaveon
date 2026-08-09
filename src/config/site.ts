type ExperienceVisual =
  | {
      kind: 'motion';
      poster: string;
      width: number;
      height: number;
    }
  | {
      kind: 'graphic';
      variant: 'circle' | 'toroid';
      label: string;
    }
  | {
      kind: 'image';
      src: string;
      srcSet: string;
      width: number;
      height: number;
      alt: string;
      credit?: string;
      source?: string;
    };

export const heroMedia = {
  poster: {
    src: '/media/hero/water-resonance-poster.webp',
    width: 1672,
    height: 937,
    alt: 'A single drop meeting dark water and creating concentric ripples',
  },
  video: {
    enabled: false,
    webm: '/media/hero/water-resonance-loop.webm',
    mp4: '/media/hero/water-resonance-loop.mp4',
  },
} as const;

export const eventDetails = {
  name: 'OPENING EXPERIENCE',
  date: 'JULY 4',
  location: 'COSTA BLANCA',
  place: 'Altea · Costa Blanca',
  time: '19:00 — TILL NIGHT',
  venue: 'Restaurante Jacaranda @ Altea Golf',
  venueName: 'RESTAURANTE JACARANDA',
  venueArea: 'ALTEA GOLF',
  image: {
    src: '/media/event/altea-event.webp',
    srcSet: '/media/event/altea-event-960.webp 960w, /media/event/altea-event.webp 1920w',
    width: 1920,
    height: 2688,
    alt: 'Mediterranean landscape around Altea on the Costa Blanca',
  },
  venueLogo: {
    kind: 'image',
    src: '/media/location/jacaranda/jacaranda-logo.jpeg',
    width: 945,
    height: 2048,
    alt: 'Jacaranda restaurant logo with flowering tree and Altea Golf wordmark',
  },
} as const;

export const experienceVisuals: Record<'01' | '02' | '03' | '04' | '05', ExperienceVisual> = {
  '01': {
    kind: 'motion',
    poster: '/media/experience/entering-circle.png',
    width: 1024,
    height: 1536,
  },
  '02': {
    kind: 'image',
    src: '/media/statues/sonic-alchemy.webp',
    srcSet: '/media/statues/sonic-alchemy-768.webp 768w, /media/statues/sonic-alchemy.webp 1200w',
    width: 1200,
    height: 1800,
    alt: 'Original warm-marble classical figure playing a transverse flute',
  },
  '03': {
    kind: 'graphic',
    variant: 'toroid',
    label: 'Concentric waves suggesting projection and perception',
  },
  '04': {
    kind: 'image',
    src: '/media/statues/nourishment.webp',
    srcSet: '/media/statues/nourishment-768.webp 768w, /media/statues/nourishment.webp 1200w',
    width: 1200,
    height: 1800,
    alt: 'Original warm-marble classical figure holding a simple ritual bowl',
  },
  '05': {
    kind: 'image',
    src: '/media/statues/celebration.webp',
    srcSet: '/media/statues/celebration-768.webp 768w, /media/statues/celebration.webp 1200w',
    width: 1200,
    height: 1800,
    alt: 'Original warm-marble classical figure moving in a controlled dance',
  },
};

export const galleryAssets = [
  {
    kind: 'image',
    src: '/media/location/altea/altea-1.webp',
    srcSet: '/media/location/altea/altea-1-640.webp 640w, /media/location/altea/altea-1.webp 1100w',
    width: 1100,
    height: 619,
    alt: 'Costa Blanca landscape between sea and mountains',
  },
  {
    kind: 'image',
    src: '/media/location/altea/altea-2.webp',
    srcSet: '/media/location/altea/altea-2-640.webp 640w, /media/location/altea/altea-2.webp 1100w',
    width: 1100,
    height: 1650,
    alt: 'A Mediterranean street in Altea',
  },
  {
    kind: 'image',
    src: '/media/location/altea/altea-3.webp',
    srcSet: '/media/location/altea/altea-3-640.webp 640w, /media/location/altea/altea-3.webp 1100w',
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
  kind: 'image',
  src: '/media/statues/closing-warrior.webp',
  srcSet: '/media/statues/closing-warrior-768.webp 768w, /media/statues/closing-warrior.webp 1200w',
  width: 1200,
  height: 1800,
  alt: 'Original warm-marble classical warrior resting after a completed journey',
} as const;
