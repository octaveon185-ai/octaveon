type ExperienceVisual =
  {
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

export const journalMedia = {
  src: '/media/journal/goccia-journal.webp',
  srcSet: '/media/journal/goccia-journal-640.webp 640w, /media/journal/goccia-journal.webp 945w',
  width: 945,
  height: 710,
  alt: 'A single drop meeting dark water and creating warm concentric ripples',
} as const;

export const eventDetails = {
  name: 'OPENING EXPERIENCE',
  date: 'OCTOBER 2',
  location: 'COSTA BLANCA',
  place: 'Altea · Costa Blanca',
  time: '19:00 — TILL NIGHT',
  venue: 'Restaurante Jacaranda @ Altea Golf',
  venueName: 'RESTAURANTE JACARANDA',
  venueArea: 'ALTEA GOLF',
  image: {
    src: '/media/event/altea-event-v2.webp',
    srcSet: '/media/event/altea-event-v2-640.webp 640w, /media/event/altea-event-v2.webp 960w',
    width: 960,
    height: 1200,
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
    kind: 'image',
    src: '/media/statues/entering-circle-v2.webp',
    srcSet: '/media/statues/entering-circle-v2-768.webp 768w, /media/statues/entering-circle-v2.webp 1024w',
    width: 1024,
    height: 1536,
    alt: 'Warm-marble classical figure welcoming entry into a shared field of presence',
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
    kind: 'image',
    src: '/media/statues/living-visuals-v2.webp',
    srcSet: '/media/statues/living-visuals-v2-768.webp 768w, /media/statues/living-visuals-v2.webp 1024w',
    width: 1024,
    height: 1536,
    alt: 'Warm-marble classical figure turning through light and movement',
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
    src: '/media/gallery/venue-mountain.webp',
    srcSet: '/media/gallery/venue-mountain-640.webp 640w, /media/gallery/venue-mountain.webp 1342w',
    width: 1342,
    height: 1601,
    alt: 'Altea venue and mountain landscape',
  },
  {
    kind: 'image',
    src: '/media/gallery/terrace-day.webp',
    srcSet: '/media/gallery/terrace-day-640.webp 640w, /media/gallery/terrace-day.webp 719w',
    width: 719,
    height: 960,
    alt: 'Sunlit terrace ready for a gathering in Altea',
  },
  {
    kind: 'image',
    src: '/media/gallery/botanical-food.webp',
    srcSet: '/media/gallery/botanical-food-640.webp 640w, /media/gallery/botanical-food.webp 945w',
    width: 945,
    height: 1574,
    alt: 'Colourful botanical food and flowers prepared for guests',
  },
  {
    kind: 'image',
    src: '/media/gallery/shared-table.webp',
    srcSet: '/media/gallery/shared-table-640.webp 640w, /media/gallery/shared-table.webp 945w',
    width: 945,
    height: 1084,
    alt: 'Abundant shared table with natural food and flowers',
  },
  {
    kind: 'image',
    src: '/media/gallery/dj-night.webp',
    srcSet: '/media/gallery/dj-night-640.webp 640w, /media/gallery/dj-night.webp 960w',
    width: 960,
    height: 640,
    alt: 'DJ performing beneath immersive blue projections',
  },
  {
    kind: 'image',
    src: '/media/gallery/live-saxophone.webp',
    srcSet: '/media/gallery/live-saxophone-640.webp 640w, /media/gallery/live-saxophone.webp 1800w',
    width: 1800,
    height: 1200,
    alt: 'Live saxophone performance in an intimate room',
  },
  {
    kind: 'image',
    src: '/media/gallery/visual-installation.webp',
    srcSet: '/media/gallery/visual-installation-640.webp 640w, /media/gallery/visual-installation.webp 1800w',
    width: 1800,
    height: 662,
    alt: 'Living visual installation transforming the event space',
  },
  {
    kind: 'image',
    src: '/media/gallery/crowd-dancefloor.webp',
    srcSet: '/media/gallery/crowd-dancefloor-640.webp 640w, /media/gallery/crowd-dancefloor.webp 1800w',
    width: 1800,
    height: 831,
    alt: 'A crowd gathered beneath vivid projections and music',
  },
] as const;

export const differenceVisual = {
  kind: 'image',
  src: '/media/statues/closing-hero.webp',
  srcSet: '/media/statues/closing-hero-768.webp 768w, /media/statues/closing-hero.webp 1536w',
  width: 1536,
  height: 1024,
  alt: 'Golden classical warrior statue reclining in dramatic light against a dark background',
} as const;
