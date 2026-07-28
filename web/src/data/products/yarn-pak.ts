import type { ProductPageData } from './types';

import headerBg from '../../assets/product/yarnpak/05ce9a533d7c0f6e5d3824f9c97134da3b1932ac.png';
import productMain from '../../assets/product/yarnpak/e9c3bad29049bc104caa12c3c1df6a909ac3c3d7.png';
import thumb2 from '../../assets/product/yarnpak/52b8eb1758f4a866ff8b7b4a0478f9ece2cf48f9.png';
import thumb3 from '../../assets/product/yarnpak/2de473f8654eaca83c27c39289a41ac0a5781742.png';
import thumb4 from '../../assets/product/yarnpak/0f720f9e72a81f5c901c00eae0dc0ef17dbf376d.png';
import thumb5 from '../../assets/product/yarnpak/20448549c3b9d99cbc4e59d678423f411002fe42.png';

import featMultipleFootprints from '../../assets/product/yarnpak/97fb9b72669989c9140dcb5b68ff962b1f4b94e2.png';
import featLocators from '../../assets/product/yarnpak/476327cd89bf74ae3c8a17b32733a5c65a7dcad8.png';
import featFourWay from '../../assets/product/yarnpak/a57f8bfddb87e8e30c86835f1084dfa8afa2892b.png';
import featConveyable from '../../assets/product/yarnpak/93d1c8a2d216bb8c4fd838539aea300c002033c5.png';

import relatedProPak from '../../assets/product/yarnpak/962bc5dea41b9cb8605e747bfd0c533ce2a929fa.png';
import relatedAxlePak from '../../assets/product/yarnpak/56e5e0488ca1226ecb15ba61951c49ae13582380.png';
import relatedUniPak from '../../assets/product/yarnpak/6324929b6ffd966af7a2778ee189f60b599310e9.png';

import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29” x 23”  —  90” x 48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const yarnPak: ProductPageData = {
  title: 'Yarn-Pak',
  name: 'yarn-pak',
  showRegMark: true,
  crumbLabel: 'YARN-PAK',
  headerDims: {
    imperial: '44”x44” - 56”x44”',
    metric: '1118 × 1118 mm — 1422 × 1118 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT YARN-PAK',
  aboutText:
    'Yarn-Pak is a reusable container system designed for the storage and transport of cotton and engineered fibers wound on tubes or cones in closed-loop systems. Engineered for the textile and apparel industry, where product protection is critical, it provides a strategic alternative to loose-packed, one-way corrugated boxes—improving space utilization and handling consistency across operations.',
  thumbnails: [
    { img: productMain, alt: 'Yarn-Pak product view 1' },
    { img: thumb2, alt: 'Yarn-Pak product view 2' },
    { img: thumb3, alt: 'Yarn-Pak product view 3' },
    { img: thumb4, alt: 'Yarn-Pak product view 4' },
    { img: thumb5, alt: 'Yarn-Pak product view 5' },
  ],
  accordionItems: [
    {
      title: 'Multi-component container system',
      body: 'Yarn-Pak features a system comprised of a custom-fitted pallet, cover, and dividers that separate each layer of spools.',
    },
    {
      title: 'Custom-formed spool protection',
      body: 'Each component incorporates a molded surface design that creates a grid pattern of pockets specific to the spool profile. This geometry positions and cradles each unit from both the top and bottom, securing spools in place to prevent interaction, movement, and contamination during storage and transport, while maximizing packing density within the available footprint.',
    },
    {
      title: 'Stacking configuration',
      body: 'Its structured, stackable design improves cube density at both the pallet and container level while supporting consistent, repeatable handling by keeping materials organized and uniformly positioned. These same qualities make it easy to integrate into automated environments.',
    },
    {
      title: 'Consistent tare weight',
      body: 'Because textiles are commonly sold by the pound, the system’s consistent tare weight supports more accurate net-weight calculations for sales and inventory management.',
    },
    {
      title: 'Nestable return configuration',
      body: 'The components nest when empty, reducing return volume and the number of return shipments while supporting more efficient storage and transport in closed-loop systems.',
    },
  ],
  attributes: [
    {
      tag: 'Multiple Footprints',
      img: featMultipleFootprints,
      desc: 'A design that is available in multiple footprint sizes, accommodating varying product dimensions and handling requirements.',
    },
    {
      tag: 'Locators',
      img: featLocators,
      desc: 'An interlocking feature in which female details on the pallet engage corresponding male features on the cover, enabling two containers to stack securely while maintaining alignment and load stability.',
    },
    {
      tag: '4-Way Entry',
      img: featFourWay,
      desc: 'A design that allows access from all four sides, enabling efficient handling with forklifts and material handling equipment.',
    },
    {
      tag: 'Conveyable',
      img: featConveyable,
      desc: 'A design that enables compatibility with conveyor-based material handling systems, maintaining stable and consistent movement during transport.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  systemData: {
    columns: ['Size', 'Type', 'Cover Size', 'Divider', 'Pallet Size', 'Cone Type'],
    rows: [
      {
        highlight: true,
        cells: [
          '44 x 44',
          'Cone',
          '44" x 44" x 4.5"',
          '44" x 22" x 3"',
          '44" x 22" x 7.4"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '52 x 44',
          'Cone',
          '52" x 44" x 4.75"',
          '52" x 44" x 2"',
          '52" x 44" x 7.38"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '47.5 x 47.5',
          'Cone',
          '47.5" x 47.5" x 4"',
          '47.5" x 47.5" x 3"',
          '47.5" x 47.5" x 7.5"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '47.5 x 47.5',
          'Cone',
          '47.5" x 47.5" x 4.38"',
          '47.5" x 47.5" x 3.25"',
          '47.5" x 47.5" x 7.38"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '56 x 45',
          'Cone Tube',
          '56" x 45" x 3.65"',
          '56" x 45" x 2.88"',
          '56" x 45" x 7.65"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '50 x 37.5',
          'Cone Tube',
          '50" x 37.5" x 4.5"',
          '50" x 37.5" x 4"',
          '50" x 37.5" x 8.5"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '47.5 x 47.5',
          'Tube',
          '47.5" x 47.5" x 4.38"',
          '47.5" x 47.5" x 3.25"',
          '47.5" x 47.5" x 7.38"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '48 x 48',
          'Split Cone Tube',
          '48" x 48" x 3.75"',
          '48" x 22" x 3"',
          '48" x 22" x 7.4"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '44 x 44',
          'Split Tube',
          '44" x 44" x 4.5"',
          '44" x 22" x 3"',
          '44" x 22" x 7.4"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '45 x 31',
          'Mirror Image',
          '45" x 31" x 7.5"',
          '45" x 31" x 2.63"',
          '45" x 31" x 7.5"',
          '3, 6, or 9 degrees',
        ],
      },
    ],
  },
  related: [
    {
      name: 'pro-pak',
      size: sizeRange,
      img: relatedProPak,
      href: '/products/pro-pak',
    },
    {
      name: 'axle-pak',
      size: sizeRange,
      img: relatedAxlePak,
      href: '/products/axel-pak',
      crop: {
        width: '197.68%',
        height: '197.68%',
        left: '-29.55%',
        top: '-48.84%',
      },
    },
    {
      name: 'uni-pak',
      size: sizeRange,
      img: relatedUniPak,
      href: '/products/uni-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
