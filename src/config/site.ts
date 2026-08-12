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
    src: '/media/location/jacaranda/jacaranda-logo-v2.webp',
    width: 1254,
    height: 1254,
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
    src: '/media/location/altea/altea-3.webp',
    srcSet: '/media/location/altea/altea-3-640.webp 640w, /media/location/altea/altea-3.webp 1100w',
    width: 1100,
    height: 619,
    alt: 'Approaching Altea on the Costa Blanca',
  },
  {
    kind: 'image',
    src: '/media/location/altea/altea-4.webp',
    srcSet: '/media/location/altea/altea-4-640.webp 640w, /media/location/altea/altea-4.webp 4096w',
    width: 4096,
    height: 2304,
    alt: 'Altea rooftops and the Mediterranean horizon from a balcony',
  },
  {
    kind: 'image',
    src: '/media/location/altea/altea-5.webp',
    srcSet: '/media/location/altea/altea-5-640.webp 640w, /media/location/altea/altea-5.webp 3934w',
    width: 3934,
    height: 2950,
    alt: 'Panoramic view across Altea, the bay and the mountains',
  },
  {
    kind: 'image',
    src: '/media/location/altea/terrace-2.webp',
    srcSet: '/media/location/altea/terrace-2-640.webp 640w, /media/location/altea/terrace-2.webp 4096w',
    width: 4096,
    height: 3075,
    alt: 'Mediterranean outdoor dining with warm light and a mountain view',
  },
  {
    kind: 'image',
    src: '/media/location/altea/terrace-1.webp',
    srcSet: '/media/location/altea/terrace-1-640.webp 640w, /media/location/altea/terrace-1.webp 4096w',
    width: 4096,
    height: 5457,
    alt: 'Mediterranean terrace dining with a wide view across the water',
  },
] as const;

export const closingVisual = {
  kind: 'image',
  src: '/media/statues/closing-warrior.webp',
  srcSet: '/media/statues/closing-warrior-768.webp 768w, /media/statues/closing-warrior.webp 1200w',
  width: 1200,
  height: 1800,
  alt: 'Warm-marble classical warrior resting after a completed journey',
} as const;

export const differenceVisual = {
  kind: 'image',
  src: '/media/statues/closing-hero.png',
  srcSet: '/media/statues/closing-hero.png 1536w',
  width: 1536,
  height: 1024,
  alt: 'Golden classical warrior statue reclining in dramatic light against a dark background',
} as const;
