export type Project = {
  title: string;
  description: string;
  url?: string;
  urlLabel?: string;
  year?: string;
  details?: string;
  image?: string;
  imageAlt?: string;
  open?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Hold Fast Studio',
    description: 'My independent design practice.',
    year: '2019-Present',
    image: '/projects/p-hfs.png',
    imageAlt: 'Hold Fast Studio',  // optional
    url: 'https://holdfast.studio',
    urlLabel: 'Hold Fast Studio',
    details:
      'A one-person studio for 0→1 work focusing connected hardware, AI tooling, real-time data viz, subscription apps. I partner with startups and Fortune 50 teams when they need a principal-level designer without the overhead of a full-time hire. Most of the projects below since 2019 came through here.',
  },
  {
    title: 'Adobe/Frame.io',
    description: 'Senior Staff Designer working across sharing and review.',
    year: '2025',
    url: 'https://frame.io',
    image: '/projects/p-frame.png',
    imageAlt: 'Frame.io',  // optional
    urlLabel: 'Frame.io',
    details:
      'Hired as the only Senior Staff Designer on the Frame.io team. I lead and contribute to initiatives across asset share/review, generative AI features, and third-party integrations.',
  },
  {
    title: 'Simular',
    description: 'Multi-agent platform where agents do real work on their own computers.',
    year: '2024–2025',
    image: '/projects/p-simular.png',
    imageAlt: 'Simular multi-agent computer use platform.',  // optional
    details:
      'Embedded early, designing the surfaces where humans and agents co-operate: task handoff, inspection, interruption, repair. The hard part isn\'t the clicking — it\'s making agents comprehensible enough that people trust them without babysitting every step. Legibility is the product. If you can\'t see what it\'s about to do and why, you can\'t let it run.',
  },
  {
    title: 'Superpilot',
    description: 'AI search visibility and landing page generation for ecommerce.',
    year: '2024–Present',
    image: '/projects/p-superpilot.png',
    imageAlt: 'AI search visibility and landing page generation for ecommerce.',
    details:
      'Superpilot helps brands show up in AI search. The product analyzes how a site performs across both traditional SEO and AI engines like ChatGPT and Gemini, then generates landing pages tied to real product catalogs and brand systems. Connected to Salesforce Commerce Cloud and Shopify, with ongoing monitoring of visibility and opportunities across terms. I work on V1 product design and ongoing optimization of the platform.',
  },

  {
    title: 'Onboard AI',
    description: 'Multi-stakeholder workflows for a medical AI governance platform.',
    year: '2024–2025',
    image: '/projects/p-onboard.png',
    imageAlt: 'Multi-stakeholder workflows for a medical AI platform.',  // optional
    details:
      'Onboard helps health systems document and stand behind their AI decisions across the full lifecycle: intake, committee review, ongoing oversight. Built for cross-functional committees (IT, legal, clinical, compliance) working asynchronously against frameworks like CHAI and NIST. Less compliance questionnaire, more living governance record. Used by Cedars-Sinai, VNS Health, and others.',
  },
  {
    title: 'Google Pixel Watch',
    description: 'Freelance UX for next-gen AI features on Pixel Watch.',
    year: '2023–2024',
    image: '/projects/p-pixel-watch.png',
    imageAlt: 'Freelance UX for next-gen AI features on Pixel Watch.',  // optional
    details:
      'Early concept work for the first Pixel Watch, well before it shipped. AI features on the wrist: what helps, what gets in the way, what a screen that small can hold without becoming useless. NDA on the specifics. Enough of the thinking ended up in the product that it\'s worth listing.',
  },
  {
    title: 'Branch Furniture',
    description: 'Native iOS desk-connected posture sensing app.',
    year: '2023–2024',
    image: '/projects/p-branch.png',
    imageAlt: 'Native iOS desk-connected posture sensing app.',  // optional
    details:
      'Branch makes furniture with sensors in them. I designed the iOS app that makes the sensor data worth having: real-time posture feedback via AirPods, standing cues, gentle streaks that don\'t guilt you into submission. First time I\'ve designed for a desk. Ship-shape gamification without the dystopian nudge. Released and in active use.',
  },
  {
    title: 'GoPro Hero11 Black Mini',
    description: 'On the on-device UX for a new compact camera.',
    year: '2022',
    image: '/projects/p-gopro.png',
    imageAlt: 'On the on-device UX for a new compact camera.',  // optional
    url: 'https://www.holdfast.studio/work/gopro',
    urlLabel: 'Case Study @ Hold Fast Studio',
    details:
      'GoPro wanted to ship a smaller, more durable Hero: no touchscreen, two buttons, 72×32 pixel two-color screen. The design problem was a full-featured camera UX on 8-bit hardware that a snowboarder in whiteout conditions could operate without looking. I led the UX end to end.',
  },
  {
    title: 'Katalyst',
    description: 'Out-of-box experience and first-run flow for an EMS workout suit.',
    year: '2021-2022',
    image: '/projects/p-katalyst.png',
    imageAlt: 'Out-of-box experience and first-run flow for an EMS workout suit',  // optional
    details:
      'Katalyst is a four-piece electrical muscle stimulation suit paired with an iPad app. The kind of product where every step from unbox to first workout has to land or the user bails. I worked on that arc: opening the box, getting into the suit, pairing it to the iPad, the calibration ramp, and walking a first-time user through their first session. Onboarding for hardware where the cost of a single rough step is "That hurt, I never wear it again."',
  },
  {
    title: 'Mapbox',
    description: 'Multi-stop navigation and dispatch console for delivery fleets.',
    year: '2020–2021',
    image: '/projects/p-mapbox.png',
    imageAlt: 'Multi-stop navigation and dispatch console for delivery fleets.',  // optional
    url: 'https://www.holdfast.studio/work/mapbox',
    urlLabel: 'Case Study @ Hold Fast Studio',
    details:
      'Straightaway was Mapbox\'s bet on a better experience for professional drivers. I designed the driver app and the planning/dispatch surface that fed it. Clients included FedEx, UPS, and USPS — the kind of users who notice every extra tap because they\'re doing it five hundred times a day.',
  },
  {
    title: 'Google Fonts',
    description: 'Lead Product Designer on the Google Fonts redesign.',
    year: '2020–2022',
    image: '/projects/p-googlefonts.png',
    imageAlt: 'Lead Product Designer on the Google Fonts redesign.',  // optional
    url: 'https://www.holdfast.studio/work/googlefonts',
    urlLabel: 'Case Study @ Hold Fast Studio',
    details:
      'Redesign of the Google Fonts browse, specimen, and pairing experience. Tens of millions of designers and developers come through every month. The old surface was a grid of cards that hadn\'t kept up with variable fonts, icon fonts, or non-Latin scripts.',
  },
  {
    title: 'Moment Pro Camera',
    description: 'Design Director and Head of Apps Products.',
    year: '2017–2019',
    image: '/projects/p-moment.png',
    imageAlt: 'Design Director and Head of Apps Products.',  // optional
    url: 'https://www.holdfast.studio/work/moment',
    urlLabel: 'Case Study @ Hold Fast Studio',
    details:
      'Moment was a hardware company that needed a software business. I led that zero to one: a pro camera app built around the thesis that creators wanted real tools, not filters. Manual controls, RAW, focus peaking, zebras, a histogram that didn\'t lie. SLR feel on a phone screen without making the phone screen feel like an SLR.',
  },
  {
    title: 'Spare5',
    description: 'A skilled-labor alternative to Mechanical Turk for ML training data.',
    year: '2017',
    image: '/projects/p-spare5.png',
    imageAlt: 'A skilled-labor alternative to Mechanical Turk for ML training data.',  // optional
    details:
      'Spare5 swapped MTurk\'s anonymous crowd for vetted, skilled contributors — writers, photographers, video editors, native speakers — earning small payouts on real work: writing image descriptions for Getty, trimming GoPro footage, calling hotels to verify Expedia listings. The design problem was making short, skilled tasks feel respectful and worth doing on both sides. The company later rebranded as Mighty AI and was acquired by Uber for its self-driving training-data work.',
  },
  {
    title: 'Microsoft Research',
    description: 'Design on Microsoft\'s first conversational AI platform.',
    year: '2015–2017',
    image: '/projects/p-msft.png',
    imageAlt: 'Design on Microsoft\'s first conversational AI platform.',  // optional
    details:
      'I helped design the work that became the Azure Bot Framework. Turn-taking, clarification, disambiguation, graceful failure, memory across turns. A lot of the patterns the industry rediscovered in 2023 were being fought about in that lab a decade earlier.',
  },
  {
    title: 'Google Android',
    description: 'Staff UX Designer on core Android OS features.',
    year: '2013–2015',
    image: '/projects/p-dialer.png',
    imageAlt: 'Staff UX Designer on core Android OS features.',  // optional
    details:
      'Staff designer on core Android — phone and contacts, primarily. Shipped to the better part of a billion devices. Material Design era, when the platform was still figuring out what it wanted to be. Not glamorous. Bread-and-butter OS surfaces used billions of times a day. The kind of design that disappears when it\'s right.',
  },
  {
    title: 'Contour Cameras',
    description: 'Head of Product Design for a connected action camera.',
    year: '2011–2013',
    image: '/projects/p-contour.png',
    imageAlt: 'Head of Product Design for a connected action camera.',  // optional
    url: 'https://www.holdfast.studio/work/contour',
    urlLabel: 'Case Study @ Hold Fast Studio',
    details:
      'Before "connected hardware" was a common term, Contour created one of the first action cameras. The problem? The camera had no screen and only three buttons, forcing users to connect to a computer to change any settings — a non-starter in the field. The challenge was to solve this by creating one of the first-ever connected camera and mobile app experiences.',
  },
  {
    title: 'Kindle Fire Tablet',
    description: 'Principal UX Designer on the original Amazon Fire Tablet.',
    year: '2010–2011',
    image: '/projects/p-fire.png',
    imageAlt: 'Principal UX Designer on the original Amazon Fire Tablet.',  // optional
    details:
      'On the design team for the original Kindle Fire. Amazon\'s first tablet, first color e-reader, first pass at a full-device operating system skinned over Android. Hardware and software shipping together on a deadline nobody wanted.',
  },
  {
    title: 'Google',
    description: 'Design on AdWords, Analytics, and Website Optimizer.',
    year: '2006–2010',
    image: '/projects/p-googleads.png',
    imageAlt: 'Design on AdWords, Analytics, and Website Optimizer.',  // optional
    details:
      'I led design initiatives on some of the company\'s most complex and highest-revenue tools. AdWords when AdWords was the business. Analytics when Analytics was new. Experimentation surfaces inside Ads. And Google Website Optimizer, a separate 0→1 project: the landing page experimentation framework for the rest of the web.',
  },
  {
    title: 'Microsoft.com',
    description: 'Lead UX Designer on Microsoft.com\'s global design system.',
    year: '2002–2006',
    details:
      'Led UX for Microsoft.com\'s global design system, taxonomy, and editorial standards across 37 countries. Designed community platforms, search interfaces, and RSS-based experiences (it was the mid-2000s — RSS was a thing).',
  },
  {
    title: 'Renaissance iMedia',
    description: 'Leading Design team at a fast-growing Tokyo agency.',
    year: '2000–2002',
    details:
      'Joined a small Tokyo agency that grew, while I was there, from a handful of people into a 70+ person consultancy working with brands from Timex to Bloomberg and mult-national startups. Led the design team across both Japanese and English-language work — running a bilingual studio is its own kind of design problem, and you learn quickly that the same brief lands very differently in two cultures.',
  },
  {
    title: 'Prov Communications',
    description: 'Copywriter and designer at a small boutique studio in Tokyo.',
    year: '1998',
    details:
      'The only foreigner at a Japanese design and communications studio, working in two languages, doing both the words and the design on small, careful projects. Learning Japanese craft sensibility from people who didn\'t soften it for me was the best apprenticeship I could have asked for.',
  },
];