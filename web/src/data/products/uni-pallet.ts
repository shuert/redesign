import type { ProductPageData } from './types';

import headerBg from '../../assets/product/unipallet/7d565b7a0c035d729beb391888f49e0d8e6b6ffc.png';
import productMain from '../../assets/product/unipallet/aa4c71cf6fd121cfe04e6f4f44658228fc24d3dc.png';
import thumb2 from '../../assets/product/unipallet/2972cbe2d517f9842c2f0ef391fd6933f02bc2c4.png';
import thumb3 from '../../assets/product/unipallet/f1aff87a45cd19723376d2155dc0848f8dd0946d.png';
import thumb4 from '../../assets/product/unipallet/c5b574ba59c66bce03fe206e9adb8661943908dc.png';

import featAntiSkid from '../../assets/product/unipallet/e37d5d1e08463613bb8fd953a51eeb78b822900d.png';
import featLip from '../../assets/product/unipallet/b7c16116e5d273b62c06a9f620c27ba2893fbbb0.png';
import featBeveled from '../../assets/product/unipallet/ef8f3ac1b52ec21bcdf603ae805500579dd6a263.png';
import featCleats from '../../assets/product/unipallet/634c2131f2d192946d9f34b78c67a7cefdbcd3f7.png';
import featFourWay from '../../assets/product/unipallet/18204310276d7d6c01455e263f7dcad49c97fd1c.png';
import featNestable from '../../assets/product/unipallet/c60237d4b220920ed38966db977c8e00964fc8c2.png';

import relatedExair from '../../assets/product/unipallet/6d491e071fc9a0e187d505a9422887387b2911e8.png';
import relatedUniDirectional from '../../assets/product/unipallet/7ff131f8858a7b66c45784b5edc74c3a71e37ef2.png';
import relatedPerimeter from '../../assets/product/unipallet/ace628f106d3945cb72725dcdea147e2c7a6eff4.png';

import quoteImage from '../../assets/product/shared/quote.jpg';

export const uniPallet: ProductPageData = {
  title: 'Uni-Pallet',
  name: 'uni-pallet',
  showRegMark: true,
  featuresEyebrow: 'FEATURES',
  attributesEyebrow: 'ATTRIBUTES',
  attributesTitle: 'Technical Features',
  optionsEyebrow: 'CUSTOM',
  crumbLabel: 'UNI-PALLET',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT UNI-PALLET (NESTABLE)',
  aboutText:
    'Uni-Pallet is a lightweight, reusable, nine-leg nestable plastic pallet designed for downstream distribution from distribution centers to retail environments. Engineered for high-volume grocery distribution, where load stability, product protection, and consistent handling are critical, it builds on the functionality of wood pallets without the associated product damage, debris, and ongoing repair requirements.',
  thumbnails: [
    { img: productMain, alt: 'Uni-Pallet, three-quarter view' },
    { img: thumb2, alt: 'Uni-Pallet, underside' },
    { img: thumb3, alt: 'Uni-Pallet, top view' },
    { img: thumb4, alt: 'Uni-Pallet, deck detail' },
  ],
  accordionItems: [
    {
      title: 'Nine-leg construction',
      body: 'The nine-leg design provides a stable platform for high-volume distribution applications.',
    },
    {
      title: 'Four-way fork entry',
      body: 'The four-way entry configuration allows access from all four sides, enabling efficient handling with forklifts and other material handling equipment while supporting faster loading and unloading across operations.',
    },
    {
      title: 'Nestable return configuration',
      body: 'The pallets nest when empty, reducing return volume and the number of return shipments while supporting more efficient storage and transport in closed-loop systems.',
    },
    {
      title: 'Twin-sheet construction',
      body: 'Its twin-sheet construction prioritizes reinforcement through geometry rather than additional plastic, providing the rigidity needed to resist deflection and maintain consistent performance under load.',
    },
    {
      title: 'Minimized packaging weight',
      body: 'Design efficiencies reduce the weight handled throughout the distribution cycle, supporting easier handling without sacrificing performance under load. Reinforcement through geometry rather than additional plastic provides the necessary rigidity while avoiding unnecessary mass.',
    },
  ],
  attributes: [
    {
      tag: 'Anti-skid surface',
      img: featAntiSkid,
      desc: 'A surface that increases friction between contact points, reducing slip and maintaining load stability during handling and transport.',
    },
    {
      tag: 'Lip',
      img: featLip,
      desc: 'A raised edge along the pallet perimeter that helps retain loads, preventing lateral shifting and reducing the risk of product overhang during handling and transport.',
    },
    {
      tag: 'Beveled bottom edge',
      img: featBeveled,
      desc: 'An edge design that reduces surface contact between units, preventing sticking and enabling easier separation during de-stacking.',
    },
    {
      tag: 'Deck cleats',
      img: featCleats,
      desc: 'Raised surface features that increase friction at contact points, gripping loads and preventing slippage during handling and transport.',
    },
    {
      tag: '4-way entry',
      img: featFourWay,
      desc: 'A design that allows access from all four sides, enabling efficient handling with forklifts and material handling equipment.',
    },
    {
      tag: 'Nestable',
      img: featNestable,
      desc: 'A design that allows units to partially fit within one another when empty, reducing storage volume and improving warehouse utilization and return ratio.',
    },
  ],
  attributesAutoplayMs: 6000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  systemData: {
    showDownloads: false,
    columns: ['Name', 'Outside Dimensions', 'Weight'],
    rows: [
      {
        highlight: true,
        cells: [
          'Gen 2',
          { imperial: '48" x 40" x 6.5"', metric: '1219 × 1016 × 165 mm' },
          { imperial: '22 lbs.', metric: '9.98 kg' },
        ],
      },
      {
        cells: [
          'Gen 3',
          { imperial: '48" x 40" x 6.5"', metric: '1219 × 1016 × 165 mm' },
          { imperial: '22 lbs.', metric: '9.98 kg' },
        ],
      },
      {
        highlight: true,
        cells: [
          '48 x 42',
          { imperial: '48" x 42" x 6.5"', metric: '1219 × 1067 × 165 mm' },
          { imperial: '23.3 lbs.', metric: '10.57 kg' },
        ],
      },
      {
        cells: [
          '48 x 44',
          { imperial: '48" x 44" x 6.5"', metric: '1219 × 1118 × 165 mm' },
          { imperial: '24 lbs.', metric: '10.89 kg' },
        ],
      },
      {
        highlight: true,
        cells: [
          '48 x 45',
          { imperial: '48" x 45" x 6"', metric: '1219 × 1143 × 152 mm' },
          { imperial: '23.2 lbs.', metric: '10.52 kg' },
        ],
      },
      {
        cells: [
          '48 x 48',
          { imperial: '48" x 48" x 6.5"', metric: '1219 × 1219 × 165 mm' },
          { imperial: '29 lbs.', metric: '13.15 kg' },
        ],
      },
      {
        highlight: true,
        cells: [
          'ExAir',
          { imperial: '48" x 40" x 6"', metric: '1219 × 1016 × 152 mm' },
          { imperial: '10.1 lbs.', metric: '4.58 kg' },
        ],
      },
      {
        cells: [
          'Light Weight',
          { imperial: '48" x 40" x 6.13"', metric: '1219 × 1016 × 156 mm' },
          { imperial: '16.8 lbs.', metric: '7.62 kg' },
        ],
      },
      {
        highlight: true,
        cells: [
          '800 x 1200',
          { imperial: '47.24" x 31.49" x 6.29"', metric: '1200 × 800 × 160 mm' },
          { imperial: '15.8 lbs.', metric: '7.17 kg' },
        ],
      },
    ],
  },
  related: [
    {
      name: 'exair-pallet',
      size: { imperial: '48”x40”', metric: '1219 × 1016 mm' },
      img: relatedExair,
      href: '#',
    },
    {
      name: 'uni-directional pallet',
      size: { imperial: '600×800 — 800×1200', metric: '600 × 800 mm — 800 × 1200 mm' },
      img: relatedUniDirectional,
      href: '/products/uni-directional-pallet',
    },
    {
      name: 'perimeter-base pallet',
      size: { imperial: '48”x45”', metric: '1219 × 1143 mm' },
      img: relatedPerimeter,
      href: '/products/perimeter-base-pallet',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#system-data',
  requestQuoteHref: '#request-a-quote',
};
