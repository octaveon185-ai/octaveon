import type { Lang } from './content';

export const journalArticlePaths: Record<Lang, string> = {
  en: '/journal/what-is-octave-on/',
  it: '/it/diario/che-cos-e-octave-on/',
  es: '/es/diario/que-es-octave-on/',
};

export const journalArticleHref = (lang: Lang): string => journalArticlePaths[lang];

export const journalArticle = {
  en: {
    eyebrow: 'FIRST ARTICLE · MANIFESTO',
    title: 'What Is Octave On? A Mindful Way to Celebrate',
    seoTitle: 'What Is Octave On? A Mindful Way to Celebrate | Octave On',
    seoDescription:
      'Discover Octave On: mindful events in Mediterranean settings where sound, visual art, conscious nourishment and movement create a deeper way to celebrate.',
    ogAlt: 'Octave On — a mindful celebration shaped by sound, art, nature and presence',
    publishedTime: '2026-08-12',
    modifiedTime: '2026-08-12',
    author: 'Octave On',
    readTime: '6 min read',
    intro:
      'Octave On is a cultural and experiential platform for a new generation of conscious gatherings. We bring together musicians, visual artists, chefs and curious people to create events where celebration becomes a practice of presence.',
    heroAlt: 'A drop meeting dark water and creating concentric ripples',
    sections: [
      {
        id: 'a-different-kind-of-celebration',
        title: 'A different kind of celebration',
        paragraphs: [
          'Modern life is full of stimulation, yet very few moments invite us to truly arrive. Octave On begins with a simple question: what if a celebration could leave us clearer, more connected and more alive?',
          'Our gatherings are designed as a gentle transition from the ordinary into a shared field of attention. There is no pressure to perform and no script to follow. You are invited to listen, notice, meet others and let the evening unfold at its own rhythm.',
        ],
      },
      {
        id: 'sound-as-a-bridge-to-presence',
        title: 'Sound as a bridge to presence',
        paragraphs: [
          'Music is the first language of an Octave On experience. Electronic soundscapes meet ancestral instruments and living voices in an evolving dialogue that can move from stillness to dance without losing its sense of depth.',
          'Rather than using music as background, we treat sound as a way to shape attention. A pulse can gather a room. A breath between notes can make space for awareness. The result is an immersive musical journey that welcomes both movement and quiet listening.',
        ],
      },
      {
        id: 'visual-art-that-changes-the-room',
        title: 'Visual art that changes the room',
        paragraphs: [
          'Light and image transform a venue into a living landscape. Visual artists create projections, shadows and shifting forms that respond to the music and invite us to see familiar spaces differently.',
          'This is not decoration added after the fact. It is an atmosphere carefully composed with sound, architecture and the natural world. The boundary between observer and artwork becomes softer, making perception itself part of the experience.',
        ],
      },
      {
        id: 'culinary-rituals-and-botanical-elixirs',
        title: 'Culinary rituals and botanical elixirs',
        paragraphs: [
          'Conscious celebration includes the way we nourish the body. An intuitive chef creates a living table with seasonal ingredients, vibrant colours, edible flowers and handcrafted botanical elixirs that awaken the senses before the first taste.',
          'Octave On events are alcohol-free. Instead of artificial stimulants, natural ingredients support clarity, vitality and genuine connection. Eating becomes slower, more attentive and more social — a ritual that brings people back to the present moment.',
        ],
      },
      {
        id: 'the-experience-continues',
        title: 'The experience continues after the night',
        paragraphs: [
          'An Octave On gathering does not end when the last song fades. The intention is to create meaningful impressions that stay with you: a new connection, a different way of listening, a moment of courage on the dance floor or a renewed appreciation for beauty in everyday life.',
          'This is our wider mission: to restore celebration to its original meaning. Music, art, nature, nourishment and movement become vehicles for presence — and presence becomes something we can carry into the days that follow.',
        ],
      },
    ],
    faqTitle: 'Frequently asked questions about Octave On',
    faq: [
      {
        question: 'What is Octave On?',
        answer:
          'Octave On is a cultural platform creating mindful events, immersive encounters and transformative festivals. Each gathering combines music, visual art, conscious nourishment and movement to create a deeper way to celebrate.',
      },
      {
        question: 'Where do Octave On events take place?',
        answer:
          'Our first gatherings are rooted in Mediterranean settings, including the Costa Blanca and Altea. Each venue is chosen for its atmosphere, natural surroundings and ability to support connection.',
      },
      {
        question: 'What happens at an Octave On event?',
        answer:
          'The experience moves through sound, visual art, botanical elixirs, seasonal food and conscious celebration. The evening is shaped as a journey, moving from arrival and listening into connection, movement and joy.',
      },
      {
        question: 'Are Octave On events alcohol-free?',
        answer:
          'Yes. Octave On focuses on handcrafted botanical elixirs and natural ingredients, creating an atmosphere of clarity, vitality and genuine connection without alcohol or artificial stimulants.',
      },
      {
        question: 'Who are Octave On gatherings for?',
        answer:
          'They are for people curious about conscious culture, music, art, nature and meaningful connection. No special experience is required — only an openness to be present and participate in your own way.',
      },
    ],
    cta: 'Request an invitation',
    ctaHref: '#invito',
  },
  it: {
    eyebrow: 'PRIMO ARTICOLO · MANIFESTO',
    title: 'Cos’è Octave On? Un nuovo modo consapevole di celebrare',
    seoTitle: 'Cos’è Octave On? Un nuovo modo consapevole di celebrare | Octave On',
    seoDescription:
      'Scopri Octave On: eventi consapevoli nel Mediterraneo dove suono, arte visiva, nutrimento e movimento creano un modo più profondo di celebrare.',
    ogAlt: 'Octave On — una celebrazione consapevole tra suono, arte, natura e presenza',
    publishedTime: '2026-08-12',
    modifiedTime: '2026-08-12',
    author: 'Octave On',
    readTime: '6 min di lettura',
    intro:
      'Octave On è una piattaforma culturale ed esperienziale per una nuova generazione di incontri consapevoli. Riuniamo musicisti, artisti visivi, chef e persone curiose per creare eventi in cui la celebrazione diventa una pratica di presenza.',
    heroAlt: 'Una goccia incontra l’acqua scura creando cerchi concentrici',
    sections: [
      {
        id: 'una-celebrazione-diversa',
        title: 'Una celebrazione diversa',
        paragraphs: [
          'La vita contemporanea è piena di stimoli, ma offre pochi momenti in cui arrivare davvero. Octave On nasce da una domanda semplice: e se una celebrazione potesse lasciarci più lucidi, connessi e vitali?',
          'I nostri incontri sono pensati come una transizione gentile dall’ordinario a un campo condiviso di attenzione. Non c’è bisogno di esibirsi né un copione da seguire: puoi ascoltare, osservare, incontrare gli altri e lasciare che la serata si sviluppi al proprio ritmo.',
        ],
      },
      {
        id: 'il-suono-come-presenza',
        title: 'Il suono come ponte verso la presenza',
        paragraphs: [
          'La musica è la prima lingua di un’esperienza Octave On. Paesaggi elettronici incontrano strumenti ancestrali e voci vive in un dialogo che passa dalla quiete alla danza senza perdere profondità.',
          'Non usiamo la musica come semplice sottofondo: la consideriamo un modo per orientare l’attenzione. Un ritmo può raccogliere una sala, una pausa tra due note può creare spazio per la consapevolezza. Nasce così un viaggio sonoro immersivo, aperto sia al movimento sia all’ascolto.',
        ],
      },
      {
        id: 'larte-visiva-che-trasforma-lo-spazio',
        title: 'L’arte visiva che trasforma lo spazio',
        paragraphs: [
          'Luce e immagini trasformano il luogo in un paesaggio vivente. Gli artisti visivi creano proiezioni, ombre e forme in movimento che dialogano con la musica e invitano a guardare gli spazi familiari con occhi nuovi.',
          'Non è decorazione aggiunta alla fine: è un’atmosfera composta insieme a suono, architettura e natura. Il confine tra osservatore e opera si fa più sottile, e la percezione diventa parte dell’esperienza.',
        ],
      },
      {
        id: 'rituali-culinari-ed-elisir-botanici',
        title: 'Rituali culinari ed elisir botanici',
        paragraphs: [
          'Celebrare con consapevolezza significa anche prendersi cura del corpo. Uno chef intuitivo crea una tavola viva con ingredienti stagionali, colori vibranti, fiori edibili ed elisir botanici artigianali che risvegliano i sensi prima ancora del primo assaggio.',
          'Gli eventi Octave On sono senza alcol. Al posto degli stimolanti artificiali, ingredienti naturali sostengono chiarezza, vitalità e connessione autentica. Mangiare diventa più lento, attento e conviviale: un rituale che riporta al momento presente.',
        ],
      },
      {
        id: 'lesperienza-continua',
        title: 'L’esperienza continua dopo la notte',
        paragraphs: [
          'Un incontro Octave On non finisce quando sfuma l’ultima canzone. L’intenzione è creare impressioni profonde che restano: una nuova connessione, un modo diverso di ascoltare, un gesto di libertà sulla pista da ballo o un rinnovato senso della bellezza quotidiana.',
          'Questa è la nostra missione più ampia: restituire alla celebrazione il suo significato originario. Musica, arte, natura, nutrimento e movimento diventano veicoli di presenza — e la presenza diventa qualcosa da portare nei giorni successivi.',
        ],
      },
    ],
    faqTitle: 'Domande frequenti su Octave On',
    faq: [
      {
        question: 'Che cos’è Octave On?',
        answer:
          'Octave On è una piattaforma culturale che crea eventi consapevoli, incontri immersivi e festival trasformativi. Ogni appuntamento unisce musica, arte visiva, nutrimento consapevole e movimento per un modo più profondo di celebrare.',
      },
      {
        question: 'Dove si svolgono gli eventi Octave On?',
        answer:
          'I primi incontri nascono in luoghi mediterranei, tra cui la Costa Blanca e Altea. Ogni venue viene scelta per l’atmosfera, il contesto naturale e la capacità di favorire la connessione.',
      },
      {
        question: 'Cosa succede durante un evento Octave On?',
        answer:
          'L’esperienza attraversa suono, arte visiva, elisir botanici, cucina stagionale e celebrazione consapevole. La serata è un viaggio che parte dall’arrivo e dall’ascolto e conduce verso connessione, movimento e gioia.',
      },
      {
        question: 'Gli eventi Octave On sono senza alcol?',
        answer:
          'Sì. Octave On propone elisir botanici artigianali e ingredienti naturali per creare un’atmosfera di chiarezza, vitalità e connessione autentica, senza alcol né stimolanti artificiali.',
      },
      {
        question: 'A chi sono rivolti gli incontri Octave On?',
        answer:
          'A chi è curioso di cultura consapevole, musica, arte, natura e connessioni significative. Non serve un’esperienza particolare: basta la disponibilità a essere presenti e partecipare a modo proprio.',
      },
    ],
    cta: 'Richiedi un invito',
    ctaHref: '#invito',
  },
  es: {
    eyebrow: 'PRIMER ARTÍCULO · MANIFIESTO',
    title: '¿Qué es Octave On? Una nueva forma consciente de celebrar',
    seoTitle: '¿Qué es Octave On? Una nueva forma consciente de celebrar | Octave On',
    seoDescription:
      'Descubre Octave On: eventos conscientes en el Mediterráneo donde el sonido, el arte visual, la nutrición y el movimiento crean una forma más profunda de celebrar.',
    ogAlt: 'Octave On — una celebración consciente entre sonido, arte, naturaleza y presencia',
    publishedTime: '2026-08-12',
    modifiedTime: '2026-08-12',
    author: 'Octave On',
    readTime: '6 min de lectura',
    intro:
      'Octave On es una plataforma cultural y experiencial para una nueva generación de encuentros conscientes. Reunimos a músicos, artistas visuales, chefs y personas curiosas para crear eventos donde celebrar se convierte en una práctica de presencia.',
    heroAlt: 'Una gota encuentra el agua oscura y crea círculos concéntricos',
    sections: [
      {
        id: 'una-celebracion-diferente',
        title: 'Una celebración diferente',
        paragraphs: [
          'La vida contemporánea está llena de estímulos, pero ofrece pocos momentos para llegar de verdad. Octave On nace de una pregunta sencilla: ¿y si una celebración pudiera dejarnos más claros, conectados y vivos?',
          'Nuestros encuentros están pensados como una transición amable de lo cotidiano a un campo compartido de atención. No hay presión por actuar ni un guion que seguir. Puedes escuchar, observar, conocer a otras personas y dejar que la noche avance a su propio ritmo.',
        ],
      },
      {
        id: 'el-sonido-como-presencia',
        title: 'El sonido como puente hacia la presencia',
        paragraphs: [
          'La música es el primer lenguaje de una experiencia Octave On. Paisajes electrónicos se encuentran con instrumentos ancestrales y voces vivas en un diálogo que pasa de la quietud al baile sin perder profundidad.',
          'No usamos la música como simple fondo: la tratamos como una forma de guiar la atención. Un pulso puede reunir una sala; el espacio entre dos notas puede abrir lugar para la conciencia. El resultado es un viaje sonoro inmersivo, abierto tanto al movimiento como a la escucha.',
        ],
      },
      {
        id: 'el-arte-visual-que-transforma-el-espacio',
        title: 'El arte visual que transforma el espacio',
        paragraphs: [
          'La luz y la imagen transforman el lugar en un paisaje vivo. Los artistas visuales crean proyecciones, sombras y formas cambiantes que dialogan con la música e invitan a mirar los espacios conocidos de otra manera.',
          'No es decoración añadida al final. Es una atmósfera compuesta junto al sonido, la arquitectura y la naturaleza. El límite entre observador y obra se vuelve más suave, y la percepción pasa a formar parte de la experiencia.',
        ],
      },
      {
        id: 'rituales-culinarios-y-elixires-botanicos',
        title: 'Rituales culinarios y elixires botánicos',
        paragraphs: [
          'Celebrar con conciencia también significa nutrir el cuerpo. Un chef intuitivo crea una mesa viva con ingredientes de temporada, colores vibrantes, flores comestibles y elixires botánicos artesanales que despiertan los sentidos antes del primer bocado.',
          'Los eventos de Octave On no llevan alcohol. En lugar de estimulantes artificiales, los ingredientes naturales favorecen la claridad, la vitalidad y una conexión genuina. Comer se vuelve más lento, atento y compartido: un ritual que nos devuelve al presente.',
        ],
      },
      {
        id: 'la-experiencia-continua',
        title: 'La experiencia continúa después de la noche',
        paragraphs: [
          'Un encuentro Octave On no termina cuando se apaga la última canción. La intención es crear impresiones profundas que permanezcan: una nueva conexión, otra forma de escuchar, un momento de libertad en la pista o una renovada sensibilidad hacia la belleza cotidiana.',
          'Esta es nuestra misión más amplia: devolver a la celebración su significado original. La música, el arte, la naturaleza, la nutrición y el movimiento se convierten en vehículos de presencia — y la presencia en algo que llevamos a los días siguientes.',
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes sobre Octave On',
    faq: [
      {
        question: '¿Qué es Octave On?',
        answer:
          'Octave On es una plataforma cultural que crea eventos conscientes, encuentros inmersivos y festivales transformadores. Cada reunión combina música, arte visual, nutrición consciente y movimiento para ofrecer una forma más profunda de celebrar.',
      },
      {
        question: '¿Dónde tienen lugar los eventos de Octave On?',
        answer:
          'Nuestros primeros encuentros nacen en entornos mediterráneos, como la Costa Blanca y Altea. Elegimos cada espacio por su atmósfera, su entorno natural y su capacidad para favorecer la conexión.',
      },
      {
        question: '¿Qué ocurre en un evento de Octave On?',
        answer:
          'La experiencia recorre sonido, arte visual, elixires botánicos, cocina de temporada y celebración consciente. La noche se plantea como un viaje que va de la llegada y la escucha a la conexión, el movimiento y la alegría.',
      },
      {
        question: '¿Los eventos de Octave On son sin alcohol?',
        answer:
          'Sí. Octave On ofrece elixires botánicos artesanales e ingredientes naturales para crear una atmósfera de claridad, vitalidad y conexión genuina, sin alcohol ni estimulantes artificiales.',
      },
      {
        question: '¿Para quién son los encuentros de Octave On?',
        answer:
          'Para personas interesadas en la cultura consciente, la música, el arte, la naturaleza y las conexiones significativas. No se necesita experiencia previa: solo apertura para estar presente y participar a tu manera.',
      },
    ],
    cta: 'Solicita una invitación',
    ctaHref: '#invito',
  },
} as const;

export type JournalArticle = (typeof journalArticle)[Lang];
