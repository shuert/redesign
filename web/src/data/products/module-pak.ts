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

import quoteImage from '../../assets/product/shared/quote.png';

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
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
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
