// Live client projects. Screenshots live in /public/listings/ and were captured
// from each site's homepage. `via: 'Agency'` marks work done as part of an agency
// team (the agency is not named); everything else is freelance.

export type Platform = 'Shopify' | 'WordPress' | 'Next.js';

export interface Listing {
  name: string;
  url: string;
  platform: Platform;
  /** Builder or extras on top of the platform, e.g. "Elementor" or "WooCommerce + Elementor". */
  stack?: string;
  type: string;
  /** What Franz did on the project. */
  role: string;
  via: 'Freelance' | 'Agency';
  scope: string;
  image?: string;
  sample: boolean;
  /** Shown on the drawn sample preview when there is no screenshot. */
  previewHeadline?: string;
  previewArt?: 'goods' | 'calendar' | 'fashion' | 'dining' | 'practice';
  /** Background tone behind the preview while the screenshot loads. */
  swatch: { ground: string; ink: string; accent: string };
}

const dark = { ground: '#15181d', ink: '#eceef1', accent: '#3ddc97' };
const light = { ground: '#f4f5f7', ink: '#14161a', accent: '#3ddc97' };

/** Featured in the main work grid, lead first. */
export const listings: Listing[] = [
  {
    name: 'Forza Supplements',
    url: 'https://forzasupplement.co.uk/',
    platform: 'Shopify',
    type: 'Supplement brand, UK',
    role: 'Full store build',
    via: 'Freelance',
    scope: 'Shopify store for a UK shilajit and supplement brand, built end to end: theme, product pages, collections and checkout.',
    image: '/listings/forza.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'Aspire Mortgage Services',
    url: 'https://aspiremortgageservices.com.au/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Mortgage broker, Perth',
    role: 'Full site build',
    via: 'Agency',
    scope: 'Lead-focused site for a Perth mortgage broker, built in WordPress with Elementor.',
    image: '/listings/aspire.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'Perth Therapy',
    url: 'https://perththerapy.com.au/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Psychology practice, Perth',
    role: 'Full site build',
    via: 'Agency',
    scope: 'Calm, trust-first site for a Perth psychologist, built in WordPress with Elementor.',
    image: '/listings/perththerapy.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'Woofix',
    url: 'https://woofix.nl/',
    platform: 'WordPress',
    stack: 'WooCommerce + Elementor',
    type: 'Natural dog treats, Netherlands',
    role: 'Store build',
    via: 'Agency',
    scope: 'WooCommerce shop for natural dog snacks and snack boxes, built with Elementor.',
    image: '/listings/woofix.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'PIYO Studios',
    url: 'https://piyostudios.com.au/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Reformer Pilates studio, Bacchus Marsh',
    role: 'Full site build',
    via: 'Agency',
    scope: 'Class, timetable and booking-led site for a reformer Pilates studio, built in WordPress with Elementor.',
    image: '/listings/piyo.webp',
    sample: false,
    swatch: light,
  },
];

/** Shorter list under the grid. */
export const moreProjects: Listing[] = [
  {
    name: 'Smart Asia Travel',
    url: 'https://smartasiatravel.com/',
    platform: 'WordPress',
    stack: 'Divi',
    type: 'Travel agency, Asia tours',
    role: 'Build and redesign work',
    via: 'Freelance',
    scope: 'Destination-led travel site in WordPress and Divi, with a written guide so the team can add new itineraries themselves.',
    image: '/listings/smartasia.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'Prestige Cleaning Melbourne',
    url: 'https://prestigecleaningmelb.com.au/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Cleaning company, Melbourne',
    role: 'Design, plus part of the build',
    via: 'Agency',
    scope: '',
    image: '/listings/prestige.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'Trusted Digital',
    url: 'https://trusteddigital.com.au/',
    platform: 'Next.js',
    stack: 'Custom code',
    type: 'Marketing agency for trades',
    role: 'Site build',
    via: 'Agency',
    scope: '',
    image: '/listings/trusteddigital.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'Moesé',
    url: 'https://moese.com/',
    platform: 'WordPress',
    stack: 'WooCommerce + Elementor',
    type: 'Self-care journals, Netherlands',
    role: 'Store build',
    via: 'Agency',
    scope: '',
    image: '/listings/moese.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'Handy Stairs',
    url: 'https://shop.handystairs.nl/',
    platform: 'WordPress',
    stack: 'WooCommerce + Elementor',
    type: 'Staircase kits, Netherlands',
    role: 'Store build',
    via: 'Agency',
    scope: '',
    image: '/listings/handystairs.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'De Verandaboer',
    url: 'https://deverandaboer.nl/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Verandas and canopies, Netherlands',
    role: 'Site build',
    via: 'Agency',
    scope: '',
    image: '/listings/verandaboer.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'Detachering Direct',
    url: 'https://detacheringdirect.nl/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Staffing agency, Netherlands',
    role: 'Site build',
    via: 'Agency',
    scope: '',
    image: '/listings/detachering.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'Sushi at de Schuimspaan',
    url: 'https://sushiatdeschuimspaan.nl/',
    platform: 'WordPress',
    stack: 'Elementor',
    type: 'Sushi restaurant, Netherlands',
    role: 'Site build',
    via: 'Agency',
    scope: '',
    image: '/listings/sushi.webp',
    sample: false,
    swatch: dark,
  },
  {
    name: 'We Can Book That Travel',
    url: 'https://wecanbookthattravel.com/',
    platform: 'WordPress',
    stack: 'Divi',
    type: 'Travel agency, Wilmington US',
    role: 'Redesign and mobile optimisation',
    via: 'Freelance',
    scope: '',
    image: '/listings/wecanbook.webp',
    sample: false,
    swatch: light,
  },
  {
    name: 'Cultivating Connections',
    url: 'https://cultivatingconnectionstravelplanners.com/',
    platform: 'WordPress',
    stack: 'Divi',
    type: 'Luxury travel planners, US',
    role: 'Build, feedback rounds and lead magnets',
    via: 'Freelance',
    scope: '',
    image: '/listings/cultivating.webp',
    sample: false,
    swatch: light,
  },
];

/** Ongoing care and security work (freelance), from routine checks and clean-ups. */
export const careSites = [
  { name: 'Chima Travel', url: 'https://chima.travel/' },
  { name: 'JSG Travel', url: 'https://traveljsg.com/' },
  { name: 'Smart Asia Travel', url: 'https://smartasiatravel.com/' },
  { name: 'Travel by Maeghan', url: 'https://travelbymaeghan.com/' },
  { name: 'Team Thompson Travel', url: 'https://teamthompsontravel.com/' },
  { name: 'Go Luxury Cruiser', url: 'https://www.goluxurycruiser.com/' },
  { name: 'Storymakers Travel', url: 'https://storymakerstravel.com/' },
  { name: 'Labbé Travel', url: 'https://labbetravel.com/' },
  { name: 'Lemon Lane Vacations', url: 'https://lemonlanevacations.com/' },
  { name: 'Cultivating Connections', url: 'https://cultivatingconnectionstravelplanners.com/' },
  { name: 'MK Travel', url: 'https://mktravelinc.com/' },
  { name: 'Guiding Star Travel', url: 'https://guidingstartravel.net/' },
  { name: 'Charming Vacations', url: 'https://charmingvacations.com/' },
  { name: 'Mont Blanc Travel', url: 'https://montblanctravel.net/' },
  { name: 'We Can Book That Travel', url: 'https://wecanbookthattravel.com/' },
  { name: 'Cash Home Buyer Akron', url: 'https://cashhomebuyerakron.com/' },
];
