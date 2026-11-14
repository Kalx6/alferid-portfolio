// Descriptions and deliverables supplied by the designer.
// Add year, client, and location per project once confirmed.
export const filters = [
  { id: 'all', label: 'All Work' },
  { id: 'brand', label: 'Brand Identity' },
  { id: 'social', label: 'Posters & Social Media' },
]

export const projects = [
  {
    id: '001',
    slug: 'omer-digital-studio',
    title: 'Omer Digital Studio',
    filter: 'brand',
    category: 'Logo & Brand Identity Design',
    shortDescription:
      'A minimalist logo for a digital studio, with a circular symbol and clean typography, shown as a dimensional wall sign.',
    description:
      'A modern and minimalist logo design created for Omer Digital Studio, focusing on creativity, digital communication, and professionalism. The design combines clean typography with a distinctive circular symbol and a subtle framing element, creating a recognizable visual identity. The white lettering contrasts with the dark circular detail, while the dimensional wall-sign mockup demonstrates how the logo could appear in a professional studio environment.',
    deliverables: ['Logo Design', 'Typography', 'Symbol Development', 'Brand Presentation Mockup'],
    cover: {
      src: '/projects/omer-digital-studio.jpg',
      alt: 'Omer Digital Studio logo mounted on a wood-panelled office wall',
      ratio: '4 / 3',
      tone: 'dark',
    },
  },
  {
    id: '002',
    slug: 'peakfit-fitness',
    title: 'PeakFit Fitness',
    filter: 'brand',
    category: 'Logo & Brand Identity Design',
    shortDescription:
      'A bold \u201cP\u201d mark with a dumbbell detail, plus colors, typography, a brand pattern, and an app icon for a fitness brand.',
    description:
      'A fitness brand identity developed to communicate strength, energy, and performance through a bold, distinctive symbol and clean typography. The custom-style \u201cP\u201d mark incorporates a fitness-inspired dumbbell element, connecting the logo directly to the brand\u2019s industry. A strong red, off-white, and dark color palette establishes a confident visual presence. The branding presentation includes logo variations, typography selection, a repeating brand pattern, and a mobile app icon concept.',
    deliverables: ['Logo Design', 'Brand Colors', 'Typography', 'Pattern Design', 'Logo Variations', 'App Icon'],
    cover: {
      src: '/projects/peakfit-fitness.jpg',
      alt: 'PeakFit Fitness brand board with logo variations, colors, typeface, pattern, and app icon',
      ratio: '8 / 7',
      tone: 'light',
    },
  },
  {
    id: '003',
    slug: 'clothing-brand',
    title: 'Clothing Brand',
    filter: 'social',
    category: 'Promotional Poster Design',
    shortDescription:
      'A promotional poster that showcases a clothing brand\u2019s products with fashion imagery and clear messaging.',
    description:
      'A promotional poster designed to showcase a clothing brand\u2019s products through an engaging and visually appealing layout. The design combines fashion-focused imagery, typography, and promotional messaging to highlight the brand\u2019s style and attract potential customers. The goal was to create an eye-catching advertisement that presents the clothing professionally and strengthens the brand\u2019s visual presence across digital platforms.',
    deliverables: [
      'Promotional Poster Design',
      'Fashion Advertising',
      'Typography',
      'Visual Composition',
      'Social Media Marketing Graphics',
    ],
    cover: {
      src: '/projects/urban-wear-ethiopia.jpg',
      alt: 'Clothing brand promotional poster with product categories and outfit photos',
      ratio: '4 / 5',
      tone: 'dark',
    },
  },
  {
    id: '004',
    slug: 'technology-company',
    title: 'Technology Company',
    filter: 'social',
    category: 'Promotional Poster Design',
    shortDescription:
      'A promotional poster for a technology company\u2019s digital services, including web design, graphic design, and video editing.',
    description:
      'A promotional poster designed for a technology company offering digital services, including web design, graphic design, video editing, and other creative solutions. The design focuses on presenting the company\u2019s services in a clear, modern, and visually engaging way. Through a balanced layout, technology-inspired visuals, and effective typography, the poster aims to capture attention, communicate the company\u2019s capabilities, and attract potential clients.',
    deliverables: [
      'Promotional Poster Design',
      'Digital Services Advertising',
      'Visual Composition',
      'Typography',
      'Social Media Marketing Graphics',
    ],
    cover: {
      src: '/projects/eey-digital-agency.jpg',
      alt: 'Technology company promotional poster listing web, content, social media, video, and design services',
      ratio: '4 / 5',
      tone: 'dark',
    },
  },
  {
    id: '005',
    slug: 'go4-delivery',
    title: 'GO4 Delivery',
    filter: 'brand',
    category: 'Logo & Brand Identity Design',
    shortDescription:
      'A bold, custom-style logo and an orange, black, and white palette for a delivery service, with an app icon and signage mockups.',
    description:
      'A modern brand identity designed for a delivery service, featuring a bold, custom-style GO4 logo and a vibrant orange color palette. The branding combines orange, black, and white to create a recognizable and energetic visual identity. The project includes logo variations, a defined color palette, an app icon concept, and real-world signage mockups, demonstrating how the brand can maintain consistency across digital and physical applications.',
    deliverables: ['Logo Design', 'Color Palette', 'Logo Variations', 'App Icon', 'Brand Mockups'],
    cover: {
      src: '/projects/go4-delivery.jpg',
      alt: 'GO4 Delivery logo in several colorways with app icon, color palette, and storefront sign',
      ratio: '1080 / 1130',
      tone: 'light',
    },
  },
  {
    id: '006',
    slug: 'carecentral',
    title: 'CareCentral',
    filter: 'brand',
    category: 'Logo Design',
    shortDescription:
      'A blue gradient logo for a healthcare management system, built from a stylized \u201cC\u201d and a speech-bubble form.',
    description:
      'A clean, technology-focused logo designed for a healthcare management system. The visual identity combines a blue gradient symbol with modern typography to communicate care, trust, and professionalism. The symbol integrates a stylized \u201cC\u201d with a speech-bubble-inspired form, suggesting communication and connected healthcare services. The blue color palette reinforces a calm, reliable, and professional brand image suitable for healthcare technology.',
    deliverables: ['Logo Design', 'Symbol Development', 'Typography', 'Color Selection'],
    cover: {
      src: '/projects/carecentral.jpg',
      alt: 'CareCentral healthcare management system logo',
      ratio: '768 / 409',
      tone: 'light',
    },
  },
  {
    id: '007',
    slug: 'star-med',
    title: 'Star Med',
    filter: 'brand',
    category: 'Logo Redesign',
    shortDescription:
      'A cleaner, more balanced redesign of the Star Med logo for digital, official, and printed use.',
    description:
      'A logo redesign project focused on refining Star Med\u2019s visual identity to create a cleaner, more professional, and recognizable brand image. The redesign aims to improve the logo\u2019s visual clarity and balance while maintaining its relevance to the healthcare field. The goal was to develop a polished identity suitable for use across digital platforms, official documents, and printed materials.',
    deliverables: ['Logo Redesign', 'Visual Identity Refinement', 'Brand Presentation'],
    cover: {
      src: '/projects/starmed-trading.jpg',
      alt: 'Star Med logo with a blue star and a green medical cross',
      ratio: '5 / 3',
      tone: 'light',
    },
  },
  {
    id: '008',
    slug: 'hotel-weekend-package',
    title: 'Hotel Weekend Package',
    filter: 'social',
    category: 'Promotional Poster Design',
    shortDescription:
      'A promotional poster presenting a hotel weekend package in a clear, appealing layout.',
    description:
      'A promotional poster designed to showcase a hotel\u2019s weekend package and attract potential guests. The design focuses on presenting the offer in an appealing and organized layout, combining visual elements, typography, and promotional information to communicate the package clearly. The goal is to capture attention, highlight the hotel\u2019s offering, and encourage customers to consider a relaxing weekend stay.',
    deliverables: [
      'Promotional Poster Design',
      'Typography',
      'Visual Layout',
      'Hotel Marketing Graphics',
    ],
    cover: {
      src: '/projects/bonroyal-hotel.jpg',
      alt: 'Hotel weekend luxury getaway promotional poster with room and gym photos',
      ratio: '1 / 1',
      tone: 'dark',
    },
  },
]
