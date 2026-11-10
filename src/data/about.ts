// About, approach and FAQ copy. Lines marked [placeholder] need your real details.

export const about = {
  /** Cut-out portrait with a transparent background (WebP with alpha). */
  photo: '/about/me.webp',
  intro: [
    "I'm a freelance web developer who works only on WordPress and Shopify. Keeping to two platforms means I know them properly: how they're built, where they break, and how to make them fast and easy to run.",
    'You deal with me directly from the first email to launch and after. No account managers, no hand-offs to someone you have never spoken to.',
    "I build sites as part of an agency team and take on my own freelance clients, so I'm used to working from a design, a deadline and a round of feedback, and to looking after sites long after launch.",
  ],
  facts: [
    { label: 'Based in', value: '[placeholder] Your city', icon: 'map-pin' },
    { label: 'Works with', value: 'Businesses worldwide, remotely', icon: 'globe' },
    { label: 'Experience', value: '[placeholder] Years building sites', icon: 'briefcase-business' },
  ],
  /** brand = Simple Icons slug; tools without a brand mark show a code icon. */
  toolkit: [
    { name: 'WordPress', brand: 'wordpress' },
    { name: 'WooCommerce', brand: 'woocommerce' },
    { name: 'Shopify', brand: 'shopify' },
    { name: 'Elementor', brand: 'elementor' },
    { name: 'Divi' },
    { name: 'Liquid' },
    { name: 'PHP', brand: 'php' },
    { name: 'JavaScript', brand: 'javascript' },
    { name: 'HTML & CSS', brand: 'html5' },
    { name: 'Next.js', brand: 'nextdotjs' },
  ],
};

export const approach = [
  {
    title: 'You talk to the developer',
    icon: 'message-square-text',
    detail: 'Every message goes to the person writing the code, so nothing gets lost in translation.',
  },
  {
    title: 'Built to be edited',
    icon: 'square-pen',
    detail: 'Pages, products and content are set up so you can change them yourself without breaking the layout.',
  },
  {
    title: 'Speed is part of the build',
    icon: 'gauge',
    detail: 'Images, scripts and apps are kept lean from the start rather than patched later.',
  },
  {
    title: 'Clear quotes',
    icon: 'file-check-2',
    detail: 'You know what is included before any work starts, and anything extra is agreed first.',
  },
  {
    title: 'You own everything',
    icon: 'key-round',
    detail: 'Your site, your accounts, your code. Logins and files are handed over at the end.',
  },
  {
    title: 'Help after launch',
    icon: 'life-buoy',
    detail: 'Updates, fixes and small changes when you need them, from someone who knows the build.',
  },
];

export const faqs = [
  {
    q: 'Do you work with businesses outside your country?',
    a: 'Yes. I work remotely with clients anywhere. We keep in touch by email and calls at times that suit both time zones.',
  },
  {
    q: 'WordPress or Shopify: which one do I need?',
    a: "If selling products is the main job, Shopify is usually the better fit. If the site is mostly content, services or bookings, WordPress usually is. If you're not sure, pick \"Not sure\" on the form and I'll recommend one.",
  },
  {
    q: 'Can you fix or improve a site someone else built?',
    a: 'Yes. Rebuilds, speed work, broken layouts and moving off old themes or page builders are a big part of what I do.',
  },
  {
    q: 'Will I be able to update the site myself?',
    a: "That's the aim of every build. You'll be able to edit pages, products and posts, and I'll show you how before handing over.",
  },
  {
    q: 'How does pricing work?',
    a: 'Every project is quoted after we talk through what you need. Send the form with a rough idea and I will reply with questions or a quote.',
  },
];
