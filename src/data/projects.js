// Descriptions only state what is visible in the artwork. Add year, client and location when confirmed.
export const filters = [
  { id: 'all', label: 'All Work' },
  { id: 'brand', label: 'Brand Identity' },
  { id: 'social', label: 'Posters & Social Media' },
]

export const projects = [
  {
    id: '001',
    slug: 'omer-digital-studio',
    title: 'OMER Digital Studio',
    filter: 'brand',
    category: 'Logo Design / Signage Mockup',
    shortDescription: 'Logo for a digital studio, shown as a 3D sign on an office wall.',
    cover: {
      src: '/projects/omer-digital-studio.jpg',
      alt: 'OMER Digital Studio logo mounted on a wood-panelled office wall',
      ratio: '4 / 3',
      tone: 'dark',
    },
  },
  {
    id: '002',
    slug: 'peakfit-fitness',
    title: 'PeakFit Fitness',
    filter: 'brand',
    category: 'Brand Identity / Logo / Colors & Type',
    shortDescription:
      'Logo, color palette, typeface, pattern, and app icon for a fitness brand.',
    cover: {
      src: '/projects/peakfit-fitness.jpg',
      alt: 'PeakFit Fitness brand board with logo variations, colors, typeface, pattern, and app icon',
      ratio: '8 / 7',
      tone: 'light',
    },
  },
  {
    id: '003',
    slug: 'urban-wear-ethiopia',
    title: 'Urban Wear Ethiopia',
    filter: 'social',
    category: 'Poster / Social Media',
    shortDescription:
      'Product poster for a clothing brand, listing its categories and how to order.',
    cover: {
      src: '/projects/urban-wear-ethiopia.jpg',
      alt: 'Urban Wear Ethiopia poster with product categories and outfit photos',
      ratio: '4 / 5',
      tone: 'dark',
    },
  },
  {
    id: '004',
    slug: 'eey-digital-agency',
    title: 'E.E.Y Digital Marketing Agency',
    filter: 'social',
    category: 'Poster / Social Media',
    shortDescription:
      'Service poster for a digital marketing agency, with a dashboard mockup and contact details.',
    cover: {
      src: '/projects/eey-digital-agency.jpg',
      alt: 'E.E.Y Digital Marketing Agency poster listing web, content, social media, video, and design services',
      ratio: '4 / 5',
      tone: 'dark',
    },
  },
  {
    id: '005',
    slug: 'go4-delivery',
    title: 'GO4 Delivery',
    filter: 'brand',
    category: 'Logo / App Icon / Colors',
    shortDescription:
      'Logo, app icon, color palette, and storefront sign for a delivery brand.',
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
    shortDescription: 'Logo for a healthcare management system.',
    cover: {
      src: '/projects/carecentral.jpg',
      alt: 'CareCentral healthcare management system logo',
      ratio: '768 / 409',
      tone: 'light',
    },
  },
  {
    id: '007',
    slug: 'starmed-trading',
    title: 'StarMed Trading PLC',
    filter: 'brand',
    category: 'Logo Design',
    shortDescription: 'Logo for StarMed Trading PLC, built from a star and a medical cross.',
    cover: {
      src: '/projects/starmed-trading.jpg',
      alt: 'StarMed Trading PLC logo with a blue star and a green medical cross',
      ratio: '5 / 3',
      tone: 'light',
    },
  },
  {
    id: '008',
    slug: 'bonroyal-hotel',
    title: 'Bonroyal Hotel',
    filter: 'social',
    category: 'Social Media / Promotional Post',
    shortDescription:
      'Weekend offer post for a hotel, with room and gym photos and booking details.',
    cover: {
      src: '/projects/bonroyal-hotel.jpg',
      alt: 'Bonroyal Hotel weekend luxury getaway promotional post',
      ratio: '1 / 1',
      tone: 'dark',
    },
  },
]
