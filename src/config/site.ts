type ExperienceVisual =
  | {
      kind: 'graphic';
      variant: 'circle' | 'toroid';
      label: string;
    }
  | {
      kind: 'image';
      src: string;
      width: number;
      height: number;
      alt: string;
      credit: string;
      source: string;
    }
  | {
      kind: 'placeholder';
      plannedSrc: string;
      label: string;
      composition: string;
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
    kind: 'placeholder',
    plannedSrc: '/media/location/jacaranda/jacaranda-logo.svg',
  },
} as const;

export const experienceVisuals: Record<'01' | '02' | '03' | '04' | '05', ExperienceVisual> = {
  '01': {
    kind: 'graphic',
    variant: 'circle',
    label: 'Resonance circles',
  },
  '02': {
    kind: 'placeholder',
    plannedSrc: '/media/statues/sonic-alchemy.webp',
    label: 'Original Sonic Alchemy statue',
    composition: 'MUSICIAN · MONOCHROME',
  },
  '03': {
    kind: 'graphic',
    variant: 'toroid',
    label: 'Concentric waves suggesting projection and perception',
  },
  '04': {
    kind: 'placeholder',
    plannedSrc: '/media/statues/nourishment.webp',
    label: 'Original Nourishment statue',
    composition: 'NOURISHMENT · MONOCHROME',
  },
  '05': {
    kind: 'placeholder',
    plannedSrc: '/media/statues/celebration.webp',
    label: 'Original Celebration statue',
    composition: 'MOVEMENT · MONOCHROME',
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
  kind: 'placeholder',
  plannedSrc: '/media/statues/closing-warrior.webp',
  label: 'Original reclining warrior statue',
  composition: 'RECLINING WARRIOR · MONOCHROME',
} as const;
