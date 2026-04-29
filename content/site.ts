export const site = {
  calendlyUrl: "https://calendly.com/adam-axisbrandsgroup",
  navLinks: [
    { label: "How We Work", href: "#why-axis" },
    { label: "Results", href: "#stats" },
    { label: "Team", href: "#team" },
  ],
};

export const hero = {
  eyebrow: "Amazon · Walmart · Global marketplaces",
  headlineA: "Your Amazon Partner.",
  headlineB: "Not Your Amazon Agency.",
  sub: "Axis Brands is run by operators and investors in consumer product companies. We manage Amazon and Walmart with your P&L in mind — flat monthly fee, no percentage of ad spend, no lock-in contracts.",
  primaryCTA: "Book a Call",
  secondaryCTA: "See Our Results",
};

export const stats = [
  { n: "20", suffix: "+", label: "Brands Managed" },
  { n: "+40%", label: "Avg. Sales Growth" },
  { n: "−12%", label: "Avg. Ad Spend" },
  { n: "−33%", label: "Avg. TACoS Reduction" },
];

export const statsFootnote = "Average client results after the first 3 months.";

export const difference = {
  eyebrow: "The Axis Difference",
  heading: "Why Brands Choose Axis",
  lead: "We built this model because we were frustrated by the same agencies our clients were frustrated by. So we did it differently.",
  pillars: [
    {
      heading: "No Percentage of Ad Spend",
      body: "Most Amazon agencies charge a percentage of your advertising budget. That means they make more money when you spend more — not when you grow more. We charge a flat monthly fee. Your ad budget stays with your brand, where it belongs.",
    },
    {
      heading: "No Lock-In Contracts",
      body: "We earn your business every month. No long-term contracts, no exit penalties, no notice periods. If we're not delivering results, you should be free to walk. We're confident you won't want to.",
    },
    {
      heading: "Operators, Not Account Managers",
      body: "Our team has built, scaled, and invested in consumer brands. We think about your margins, your cash flow, and your channel strategy — not just your campaign metrics. That's a fundamentally different conversation than you'll get from a traditional agency.",
    },
  ],
};

export const clients = {
  label: "Trusted by brands including",
  logos: [
    { slug: "whoosh", name: "Whoosh!" },
    { slug: "hairclub", name: "HairClub" },
    { slug: "sleep-country", name: "Sleep Country" },
    { slug: "endy", name: "Endy" },
    { slug: "world-famous", name: "World Famous", colored: true },
  ],
};

export const services = {
  eyebrow: "Services",
  heading: "What We Do",
  lead: "We work with a focused number of brands at a time. Quality over volume — always.",
  items: [
    {
      heading: "Amazon & Walmart Management",
      body: "Full-service management across the channels that move product. Listings, PPC, catalog management, inventory, brand protection, and compliance — one team, one fee. No percentage of your ad spend. Ever.",
    },
    {
      heading: "International Expansion",
      body: "Most brands leave significant revenue on the table by staying in one market. We manage entry into Europe, Australia, and Latin America — navigating the complexity of each marketplace so you capture the opportunity without the overhead.",
    },
    {
      heading: "Brand Acquisition & Investment",
      body: "For the right brands, we go beyond management. We acquire consumer product companies with strong fundamentals and scale them aggressively on Amazon. If you're looking for a partner with genuine skin in the game, this is what that looks like.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Partnering with Axis has transformed our business. Our Amazon sales grew by 40% in year one, while our TACoS dropped 30%.",
    name: "Mitch Krakower",
    title: "CEO, Whoosh!",
    photo: "/assets/testimonials/mitch-krakower.webp",
  },
  {
    quote:
      "Adam and his team have been a key strategic partner in navigating an increasingly challenging digital landscape.",
    name: "John Chalson",
    title: "SVP, HairClub",
    photo: "/assets/testimonials/john-chalson.webp",
  },
  {
    quote:
      "I strongly recommend Adam and the entire team. They are the best in the business.",
    name: "Phil Besner",
    title: "SVP, Hush & Sleep Country Canada",
    photo: "/assets/testimonials/phil-besner.jpeg",
  },
];

export const team = {
  eyebrow: "Team",
  heading: "The Team Behind the Work",
  lead: "We're a small, senior team — by design. Every brand we work with gets direct access to the people who actually know what they're doing.",
  members: [
    {
      name: "Adam Levinter",
      title: "Co-Founder, Axis Brands Group",
      photo: "/assets/team/adam-levinter.jpg",
      bio: "Adam is an operator and investor in consumer product companies, focused on accelerating growth across Amazon, Walmart, and global markets. He is the author of The Subscription Boom — featured in The New York Times, Washington Post, Forbes, and Axios — and the host of two podcasts at the intersection of ecommerce and entrepreneurship. Over the past decade he has built companies, advised Fortune 500 executives, and worked with some of the world's leading consumer brands.",
    },
    {
      name: "Anshuman Chhabra",
      title: "Co-Founder · Amazon Operations Lead",
      photo: "/assets/team/anshuman-chhabra.jpg",
      bio: "A seasoned ecommerce operator with over a decade of experience scaling brands on Amazon and beyond. Anshuman began his career as a Vendor Manager at Amazon, where he developed deep expertise in marketplace dynamics, product launch strategy, and advertising optimization. His subsequent roles at Live Out There, Sport Chek, and Best Buy Canada sharpened his skills across product, marketing, and digital retail — giving him a rare combination of platform knowledge and brand-side experience.",
    },
    {
      name: "Jeffrey Talajic",
      title: "Co-Founder · Brand Growth Lead",
      photo: "/assets/team/jeffrey-talajic.jpg",
      bio: "Jeff is an ecommerce specialist with a proven track record of scaling consumer brands to over $10 million in annual sales. He combines deep Amazon and marketplace expertise with a hands-on, results-driven approach — drawing on prior roles in direct-to-consumer startups where he led performance marketing, channel strategy, and growth operations.",
    },
  ],
};

export const tacos = {
  eyebrow: "Tools",
  heading: "Not sure if Amazon is right for your brand?",
  body: "Use our free TACoS calculator to validate your product economics before you invest. Enter your selling price, conversion rate, and cost-per-click — we'll tell you if the numbers work.",
  cta: "Try the full calculator",
};

export const finalCTA = {
  heading: "Is Axis the Right Fit for Your Brand?",
  sub: "Most brands we work with already know their Amazon performance could be better. We'll tell you honestly on a quick call whether we can move the needle — and what that would look like.",
  cta: "Book a Call",
};

type FooterIcon = "linkedin";

type FooterLink = { label: string; href: string; icon?: FooterIcon };

export const footer: {
  tag: string;
  columns: { label: string; links: FooterLink[] }[];
  legal: string;
} = {
  tag: "Your Amazon Partner. Not Your Amazon Agency.",
  columns: [
    {
      label: "Company",
      links: [
        { label: "How We Work", href: "#why-axis" },
        { label: "Results", href: "#stats" },
        { label: "Team", href: "#team" },
      ],
    },
    {
      label: "Contact",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/adam-j-levinter-sbase/", icon: "linkedin" },
      ],
    },
  ],
  legal: "© 2026 Axis Brands Group. All rights reserved.",
};
