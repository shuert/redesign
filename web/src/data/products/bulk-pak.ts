import type { ProductPageData } from './types';

import headerBg from '../../assets/product/bulkpak/259c9bdcdb238c1771dea7de9b2929304415730b.png';
import productMain from '../../assets/product/bulkpak/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import thumb2 from '../../assets/product/bulkpak/58f62c3211f617be370d1308b95b96a04c4d49f2.png';
import thumb3 from '../../assets/product/bulkpak/ee85d38ea644974f53a0ee1be60350167d1aeaeb.png';
import thumb4 from '../../assets/product/bulkpak/e99f7092f3bc7644f4af943bdfd66ecbb45be0c4.png';

import featLocators from '../../assets/product/bulkpak/d280539f1e956a7dca9fab036dd9648ff1e73d44.png';
import featBulkContainment from '../../assets/product/bulkpak/c55653fe1ed43409c4faeccbf02cb5344e07dbf5.png';
import featNestable from '../../assets/product/bulkpak/91930c1a1ead196c6b266709e938ba0eae907968.png';
import featSlidelock from '../../assets/product/bulkpak/dc99178ae2ca5ece0c57995b2143ffeb06509eec.png';
import featCastling from '../../assets/product/bulkpak/12f92938ad4da8853a6ddcd6594f98d47cabb7f6.png';

import relatedUniPak from '../../assets/product/bulkpak/6324929b6ffd966af7a2778ee189f60b599310e9.png';
import relatedBulkPak from '../../assets/product/bulkpak/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedSnapPak from '../../assets/product/bulkpak/42abb03618e39d7822c880009fe09f28262fea42.png';

import quoteImage from '../../assets/product/shared/quote.png';

export const bulkPak: ProductPageData = {
  title: 'Bulk-Pak',
  name: 'bulk-pak',
  showRegMark: true,
  crumbLabel: 'BULK-PAK',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT BULK-PAK',
  aboutText:
    'Bulk-Pak is a reusable, collapsible container system designed for the storage and transport of dense, dry flowable materials in closed-loop systems. Based on the Uni-Pak platform and purpose-built for higher load densities, it provides a systems-based alternative to wood pallets, corrugated boxes, fiber drums, nylon bags, and other limited-life returnable packaging.',
  thumbnails: [
    { img: productMain, alt: 'Bulk-Pak product view 1' },
    { img: thumb2, alt: 'Bulk-Pak product view 2' },
    { img: thumb3, alt: 'Bulk-Pak product view 3' },
    { img: thumb4, alt: 'Bulk-Pak product view 4' },
  ],
  accordionItems: [
    {
      title: 'Reinforced construction',
      bodyBefore:
        'Bulk-Pak features a reinforced, double-walled sleeve and a re-engineered twin-sheet thermoformed pallet and cover designed to support bulk densities up to ',
      densityImperial: '80 pounds per cubic foot',
      densityMetric: '1,281 kg/m³',
      bodyAfter:
        ' without deflection. Steel inserts integrated within the pallet structure provide the rigidity needed to maintain load stability under demanding conditions.',
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
      title: 'Load-transferring structure',
      body: 'Designed for dynamic distribution environments, the interaction between the sleeve and pallet allows loads to transfer evenly through the structure, supporting high stacking strength in demanding applications.',
    },
    {
      title: 'Stacking interface',
      body: 'Female details on the pallet, known as locators, engage with corresponding male features on the cover, enabling two containers to stack securely and align properly. This creates a stable, space-efficient unit for storage and transport.',
    },
  ],
  attributes: [
    {
      tag: 'Locators',
      img: featLocators,
      desc: 'An interlocking feature in which female details on the pallet engage corresponding male features on the cover, enabling two containers to stack securely while maintaining alignment and load stability.',
    },
    {
      tag: 'Bulk material containment',
      img: featBulkContainment,
      desc: 'A structure that contains and stabilizes flowable materials during movement, maintaining load control under dynamic conditions.',
    },
    {
      tag: 'Nestable',
      img: featNestable,
      desc: 'A design that allows units to partially fit within one another when empty, reducing storage volume and improving warehouse utilization and return ratio.',
    },
    {
      tag: 'Slidelock (and Uni-Klip)',
      img: featSlidelock,
      desc: 'A locking mechanism that enables fast, tool-free assembly and disassembly—one container, one person, one minute—by securing the sleeve within the track of the pallet and cover.',
    },
    {
      tag: 'Castling',
      img: featCastling,
      desc: 'A sleeve design that extends into pallet leg openings, transferring vertical loads through the corners to improve stacking strength and load distribution.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  systemDataRows: [
    {
      outside: { imperial: '48" x 40"', metric: '1219 x 1016 mm' },
      inside: { imperial: '43.27" x 35.52"', metric: '1099 x 902 mm' },
      cover: { imperial: '17.2 lbs.', metric: '7.80 kg' },
      pallet: { imperial: '26.99 lbs.', metric: '12.24 kg' },
      highlight: true,
    },
    {
      outside: { imperial: '48" x 45"', metric: '1219 x 1143 mm' },
      inside: { imperial: '43.16" x 40.36"', metric: '1096 x 1025 mm' },
      cover: { imperial: '15.76 lbs.', metric: '7.15 kg' },
      pallet: { imperial: '24 lbs.', metric: '10.89 kg' },
      highlight: false,
    },
  ],
  related: [
    {
      name: 'uni-pak',
      size: { imperial: '29”x23” — 90”x48”', metric: '737 × 584 mm — 2286 × 1219 mm' },
      img: relatedUniPak,
      href: '/products/unipak',
    },
    {
      name: 'bulk-pak',
      size: { imperial: '48”x40” — 48”x45”', metric: '1219 × 1016 mm — 1219 × 1143 mm' },
      img: relatedBulkPak,
      href: '/products/bulk-pak',
    },
    {
      name: 'snap-pak',
      size: { imperial: '29”x23” — 90”x48”', metric: '737 × 584 mm — 2286 × 1219 mm' },
      img: relatedSnapPak,
      href: '/products/snap-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
