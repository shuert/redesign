import type { ProductPageData } from './types';

import headerBg from '../../assets/product/modulepak/1b533cff13a1f3d323f52146186dbfb11a2a1be2.png';
import productMain from '../../assets/product/modulepak/8a3ddf1c3913dddbff2427e7e435308c4d616728.png';
import thumb2 from '../../assets/product/modulepak/83a5865f6a673f007bf0171479530c52ad33122c.png';
import thumb3 from '../../assets/product/modulepak/a4854ca3ea0cab1acd32dfc1cb43ed26207dd482.png';
import thumb4 from '../../assets/product/modulepak/69e1c54142d8ca052d5421c1e4b54d452c61595c.png';
import thumb5 from '../../assets/product/modulepak/855a541ee9a1ecf41d311a28b604ed7b2df72f62.png';
import thumb6 from '../../assets/product/modulepak/da6760b2a08150cc838bbd04fbbd1d1141749f79.png';

import featSingleSheet from '../../assets/product/modulepak/f0e50fbb3b1fead9218d79e32001a9a38cb7745e.png';
import featFootprint from '../../assets/product/modulepak/c9968450313e61347234ddd3b5bd4b6f1b2cb27f.png';
import featModular from '../../assets/product/modulepak/610b36d0aa04127003cd7c88b7a8a1acf47241be.png';

import videoPoster from '../../assets/product/modulepak/6cf7a17ed226802d27a56356d080be5e706d67ae.png';

import relatedUniPak from '../../assets/product/modulepak/6324929b6ffd966af7a2778ee189f60b599310e9.png';
import relatedBulkPak from '../../assets/product/modulepak/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedUniPakIi from '../../assets/product/modulepak/1f33178a0228a5eee17d27db2787893e839ba77b.png';

import quoteImage from '../../assets/product/shared/quote.jpg';

const uniPakSize = {
  imperial: '29”x23” — 90”x48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const modulePak: ProductPageData = {
  title: 'Module-Pak',
  name: 'module-pak',
  showRegMark: true,
  crumbLabel: 'MODULE-PAK',
  headerBg,
  aboutEyebrow: 'ABOUT MODULE-PAK',
  aboutText:
    'Module-Pak is a reusable, collapsible container system designed for the storage and transport of electric vehicle battery modules in closed-loop systems. Based on the Uni-Pak platform, it is engineered for operations where space constraints, return efficiency, product protection, and weight sensitivity are critical, providing a systems-based alternative to traditional compartmentalized wood crates.',
  thumbnails: [
    { img: productMain, alt: 'Module-Pak product view 1' },
    { img: thumb2, alt: 'Module-Pak product view 2' },
    { img: thumb3, alt: 'Module-Pak product view 3' },
    { img: thumb4, alt: 'Module-Pak product view 4' },
    { img: thumb5, alt: 'Module-Pak product view 5' },
    { img: thumb6, alt: 'Module-Pak product view 6' },
  ],
  accordionItems: [
    {
      title: 'Custom interior dunnage',
      body: 'Module-Pak integrates custom interior dunnage in the form of single-sheet stackable totes, each designed to cradle and secure individual battery modules. The totes align and locate within the container footprint, securing contents in position and maintaining consistent load stability throughout handling and transport.',
    },
    {
      title: 'Integrated lightweight design',
      body: 'Designed for high-density, weight-sensitive applications, Module-Pak minimizes packaging weight to help maximize payload efficiency—supporting improved cube utilization in operations where weight limits are often the primary constraint.',
    },
    {
      title: 'Nestable tote return',
      body: 'The totes follow the same approach—collapsible and nestable when not in use—helping reduce storage volume and improve return efficiency across the system.',
    },
    {
      title: 'Multi-component container system',
      body: 'Uni-Pak combines a twin-sheet thermoformed pallet, heavy-duty sleeve, and twin-sheet thermoformed cover into a single, integrated solution.',
    },
    {
      title: 'Integrated locking mechanism',
      body: 'The integrated slide-lock design secures the sleeve within the track of the pallet and cover, locking the components into a single, stable unit. This enables fast, tool-free assembly and disassembly—one container, one person, one minute—while eliminating the need for external containment and supporting ergonomic, consistent handling across operations.',
    },
    {
      title: 'Knock-down return configuration',
      body: 'Disengage the slide-lock, and the system knocks down efficiently into individual components for maximum space efficiency during storage and transport. Collapsible sleeves fold down, and pallets and covers nest, significantly reducing storage volume and improving space utilization and return ratios.',
    },
    {
      title: 'Tube-cut sleeve',
      body: 'The bottom of the sleeve is straight-cut and sits within the track of the pallet rather than extending into the pallet leg, increasing the internal dimensions (ID) in both length and width and providing additional usable space within the container.',
    },
    {
      title: 'Minimized packaging weight',
      body: 'Design efficiencies reduce the weight handled throughout the distribution cycle, supporting easier handling without sacrificing performance under load. Reinforcement through geometry rather than additional plastic provides the necessary rigidity while avoiding unnecessary mass.',
    },
    {
      title: 'Custom internal dunnage',
      body: 'Uni-Pak can be further customized with internal dunnage designed around the product and application. Options can include custom totes, internal trays for separating and organizing layers, and protective foam for cushioning and positioning, helping protect products, maintain organization, and improve packing and handling efficiency.',
    },
    {
      title: 'Space Saver configuration',
      body: 'The Space Saver configuration uses a dedicated pallet and cover, each with a lower profile than the pallet design used in the Mirror Image configuration. The reduced packaging height minimizes the space occupied by the container, making this configuration ideal for operations where storage and transportation space are limited.',
    },
    {
      title: 'Mirror Image configuration',
      body: 'The Mirror Image configuration uses the same pallet design for both the base and cover. The leg design allows the identical part to function in either orientation: upright or upside down. When upright, with the legs facing down, it functions as the pallet; when upside down, with the legs facing up, it functions as the cover. This interchangeable design reduces the number of unique packaging components required while simplifying inventory and system management.',
    },
  ],
  attributes: [
    {
      tag: 'Single Sheet',
      img: featSingleSheet,
      desc: 'A structure formed from a single sheet of material.',
    },
    {
      tag: 'Footprint compatibility',
      img: featFootprint,
      desc: 'A footprint that aligns with container dimensions, improving cube utilization during storage and transport.',
    },
    {
      tag: 'Modular',
      img: featModular,
      desc: 'A system that uses interchangeable components, allowing individual parts to be replaced without replacing the entire system.',
    },
  ],
  attributesAutoplayMs: 6000,
  optionCols: [
    ['Color', 'Stripe', 'Custom Branding', 'Pockets for Barcoding and RFID'],
    ['Hot Stamping', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  related: [
    {
      name: 'uni-pak',
      size: uniPakSize,
      img: relatedUniPak,
      href: '/products/uni-pak',
    },
    {
      name: 'bulk-pak',
      size: {
        imperial: '48”x40” — 48”x45”',
        metric: '1219 × 1016 mm — 1219 × 1143 mm',
      },
      img: relatedBulkPak,
      href: '/products/bulk-pak',
    },
    {
      name: 'uni-pak II',
      size: {
        imperial: '30”x29” — 90”x48.75”',
        metric: '762 × 737 mm — 2286 × 1238 mm',
      },
      img: relatedUniPakIi,
      href: '/products/uni-pak-II',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  video: {
    // Drop in an mp4 import with `?url` when ready
    poster: videoPoster,
    label: 'Module-Pak product video',
  },
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
