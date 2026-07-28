import type { ProductPageData } from './types';

import headerBg from '../../assets/product/unipak/909b234de91e484bec3dd2c6db8c85360df551fe.png';
import productMain from '../../assets/product/unipak/6324929b6ffd966af7a2778ee189f60b599310e9.png';
import thumb2 from '../../assets/product/unipak/08ed64caa4cd3f6cc3603a0674112fe21ff59cb0.png';
import thumb3 from '../../assets/product/unipak/1918f31ce621bf28f7480b1ae348b2719b6042b3.png';
import thumb4 from '../../assets/product/unipak/5d87381ed07e5be9064d1cde61f4fe72de662b5b.png';
import thumb5 from '../../assets/product/unipak/7f22fe45b7456250ec554c33f5d6ccecf21dc47a.png';

import featMultipleFootprints from '../../assets/product/unipak/907c0072e49e6b569ee1d804e2be3ea275cd63d7.png';
import featLocators from '../../assets/product/unipak/c6f795a095982f78de9a503eed234334f3cc4bc0.png';
import featNestable from '../../assets/product/unipak/be23002afef0e4b1c54d9a10e5af337060dd57eb.png';
import featCollapsible from '../../assets/product/unipak/26866c073e586c9c6fa9f2385eb336152dd25f7c.png';
import featSlidelock from '../../assets/product/unipak/59ae2dae9989e866553a8ccdaa9f841ff4c0755a.png';
import featCastling from '../../assets/product/unipak/ab50ba856ec245d33afdb88b49bac17ea02cfb80.png';
import featSplitConfig from '../../assets/product/unipak/bf3cbb6703ab7723357249d7ec9f13463a50ad48.png';

import relatedUniPakIi from '../../assets/product/unipak/1f33178a0228a5eee17d27db2787893e839ba77b.png';
import relatedBulkPak from '../../assets/product/unipak/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedSnapPak from '../../assets/product/unipak/42abb03618e39d7822c880009fe09f28262fea42.png';

import videoPoster from '../../assets/product/unipak/15cb59f98f68de15e42f349656b61c3e3c4ecbb0.png';
import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29”x23” — 90”x48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const uniPak: ProductPageData = {
  title: 'Uni-Pak',
  name: 'uni-pak',
  showRegMark: true,
  crumbLabel: 'UNI-PAK',
  headerDims: {
    imperial: '29”x23”  —  90”x48”',
    metric: '737 × 584 mm — 2286 × 1219 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT UNI-PAK',
  aboutText:
    'As the original sleeve-pack system introduced to the market—setting the standard for many of today’s designs—Uni-Pak is a reusable, collapsible container system designed for storage and transport in closed-loop systems. Engineered for operations where space constraints, return efficiency, and product protection are critical, it provides a systems-based alternative to wood pallets, corrugated boxes, fiber drums, nylon bags, and other limited-life returnable packaging.',
  thumbnails: [
    { img: productMain, alt: 'Uni-Pak product view 1' },
    { img: thumb2, alt: 'Uni-Pak product view 2' },
    { img: thumb3, alt: 'Uni-Pak product view 3' },
    { img: thumb4, alt: 'Uni-Pak product view 4' },
    { img: thumb5, alt: 'Uni-Pak product view 5' },
  ],
  accordionItems: [
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
      tag: 'Nestable',
      img: featNestable,
      desc: 'A design that allows units to partially fit within one another when empty, reducing storage volume and improving warehouse utilization and return ratio.',
    },
    {
      tag: 'Collapsible',
      img: featCollapsible,
      desc: 'A structure capable of folding down quickly for efficient return and storage without full disassembly, improving warehouse utilization and increasing return ratio.',
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
    {
      tag: 'Split Configuration',
      img: featSplitConfig,
      desc: 'A sleeve design consisting of separable sections that allow partial removal for easier access while maintaining structural performance.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  systemDataRows: [
    {
      highlight: true,
      outside: { imperial: '29" x 23"', metric: '737 x 584 mm' },
      inside: { imperial: '26.94" x 20.94"', metric: '684 x 532 mm' },
      cover: { imperial: '4.68 lbs.', metric: '2.12 kg' },
      pallet: { imperial: '6.88 lbs.', metric: '3.12 kg' },
    },
    {
      outside: { imperial: '36" x 29"', metric: '914 x 737 mm' },
      inside: { imperial: '32.77" x 26.02"', metric: '832 x 661 mm' },
      cover: { imperial: '7.75 lbs.', metric: '3.52 kg' },
      pallet: { imperial: '14.58 lbs.', metric: '6.61 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '52" x 36"', metric: '1321 x 914 mm' },
      inside: { imperial: '49.52" x 33.52"', metric: '1258 x 851 mm' },
      cover: { imperial: '13.67 lbs.', metric: '6.20 kg' },
      pallet: { imperial: '20.74 lbs.', metric: '9.41 kg' },
    },
    {
      outside: { imperial: '55" x 35"', metric: '1397 x 889 mm' },
      inside: { imperial: '52.19" x 32.19"', metric: '1326 x 818 mm' },
      cover: { imperial: '13.51 lbs.', metric: '6.13 kg' },
      pallet: { imperial: '20.19 lbs.', metric: '9.16 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '48" x 40"', metric: '1219 x 1016 mm' },
      inside: { imperial: '45.315" x 37.315"', metric: '1151 x 948 mm' },
      cover: { imperial: '13.34 lbs.', metric: '6.05 kg' },
      pallet: { imperial: '21.27 lbs.', metric: '9.65 kg' },
    },
    {
      outside: { imperial: '44" x 44"', metric: '1118 x 1118 mm' },
      inside: { imperial: '41.4" x 41.4"', metric: '1052 x 1052 mm' },
      cover: { imperial: '14.2 lbs.', metric: '6.44 kg' },
      pallet: { imperial: '21.33 lbs.', metric: '9.67 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '46" x 46"', metric: '1168 x 1168 mm' },
      inside: { imperial: '43.4" x 43.4"', metric: '1102 x 1102 mm' },
      cover: { imperial: '15.46 lbs.', metric: '7.01 kg' },
      pallet: { imperial: '22.77 lbs.', metric: '10.33 kg' },
    },
    {
      outside: { imperial: '48" x 45"', metric: '1219 x 1143 mm' },
      inside: { imperial: '45.315" x 42.315"', metric: '1151 x 1075 mm' },
      cover: { imperial: '15.51 lbs.', metric: '7.03 kg' },
      pallet: { imperial: '23 lbs.', metric: '10.43 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '57" x 48"', metric: '1448 x 1219 mm' },
      inside: { imperial: '54.556" x 45.556"', metric: '1386 x 1157 mm' },
      cover: { imperial: '19.13 lbs.', metric: '8.68 kg' },
      pallet: { imperial: '28.94 lbs.', metric: '13.13 kg' },
    },
    {
      outside: { imperial: '63" x 47.25"', metric: '1600 x 1200 mm' },
      inside: { imperial: '60.16" x 44.375"', metric: '1528 x 1127 mm' },
      cover: { imperial: '22.03 lbs.', metric: '9.99 kg' },
      pallet: { imperial: '32.91 lbs.', metric: '14.93 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '96" x 76"', metric: '2438 x 1930 mm' },
      inside: { imperial: '93.315" x 73.315"', metric: '2370 x 1862 mm' },
      cover: { imperial: '54.9 lbs.', metric: '24.90 kg' },
      pallet: { imperial: '83.09 lbs.', metric: '37.69 kg' },
    },
    {
      outside: { imperial: '48" x 40" MI', metric: '1219 x 1016 mm MI' },
      inside: { imperial: '45.25" x 37.25"', metric: '1149 x 946 mm' },
      cover: { imperial: '20.2 lbs.', metric: '9.16 kg' },
      pallet: { imperial: '20.2 lbs.', metric: '9.16 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '54" x 44" MI', metric: '1372 x 1118 mm MI' },
      inside: { imperial: '51.59" x 41.59"', metric: '1310 x 1056 mm' },
      cover: { imperial: '20.8 lbs.', metric: '9.43 kg' },
      pallet: { imperial: '20.8 lbs.', metric: '9.43 kg' },
    },
    {
      outside: { imperial: '1200mm x 800mm', metric: '1200 x 800 mm' },
      inside: { imperial: '44.40" x 28.65"', metric: '1128 x 728 mm' },
      cover: { imperial: '10.53 lbs.', metric: '4.78 kg' },
      pallet: { imperial: '14.35 lbs.', metric: '6.51 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '1240mm x 835mm', metric: '1240 x 835 mm' },
      inside: { imperial: '47.56" x 31.62"', metric: '1208 x 803 mm' },
      cover: { imperial: '11.25 lbs.', metric: '5.10 kg' },
      pallet: { imperial: '16.9 lbs.', metric: '7.67 kg' },
    },
    {
      outside: { imperial: '1200mm x 1000mm', metric: '1200 x 1000 mm' },
      inside: { imperial: '44.54" x 36.57"', metric: '1131 x 929 mm' },
      cover: { imperial: '13.07 lbs.', metric: '5.93 kg' },
      pallet: { imperial: '20.39 lbs.', metric: '9.25 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '1600mm x 1200mm', metric: '1600 x 1200 mm' },
      inside: { imperial: '60.16" x 44.38"', metric: '1528 x 1127 mm' },
      cover: { imperial: '20.19 lbs.', metric: '9.16 kg' },
      pallet: { imperial: '30.93 lbs.', metric: '14.03 kg' },
    },
  ],
  related: [
    {
      name: 'uni-pak II',
      size: {
        imperial: '30”x29” — 90”x48.75”',
        metric: '762 × 737 mm — 2286 × 1238 mm',
      },
      img: relatedUniPakIi,
      href: '/products/uni-pak-II',
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
      name: 'snap-pak',
      size: sizeRange,
      img: relatedSnapPak,
      href: '/products/snap-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  video: {
    // Drop in an mp4 import with `?url` when ready, e.g. `src: uniPakVideo`
    poster: videoPoster,
    label: 'Uni-Pak product video',
  },
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
