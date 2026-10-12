import type { ProductPageData } from './types';

import headerBg from '../../assets/product/unidirectional/ac89d2539a0f3b6b8d8c272ce003d749e0d9d620.png';
import productMain from '../../assets/product/unidirectional/7ff131f8858a7b66c45784b5edc74c3a71e37ef2.png';
import thumb2 from '../../assets/product/unidirectional/6c1742fc59e9152b28f2e7928979370876713122.png';
import thumb3 from '../../assets/product/unidirectional/7174d7c54aec8cf66e0fe56d7997798a7f49248d.png';
import thumb4 from '../../assets/product/unidirectional/01e95756a5f156c7b9093ef45cdcaef2912e1fb6.png';

import featAntiSkid from '../../assets/product/unidirectional/ff6e70fd4611c82827c97a4ec59c2049c11e654d.png';
import featSteel from '../../assets/product/unidirectional/bf8dbc42b774fcdd9fae864d52d12310eb7e50b9.png';
import featMonolithic from '../../assets/product/unidirectional/b1e5a1c621f20c437621e3056bd15c976195bf51.png';
import featRackable from '../../assets/product/unidirectional/54a53c131c3eaff1ac10837ade692fbadbc173c4.png';
import featConveyable from '../../assets/product/unidirectional/7a0f44b0e2d607a1dbe4f8962bbcd45a9a5da98d.png';
import featDurable from '../../assets/product/unidirectional/ce81b45a1be058b338699f3ac6edd029dad6127e.png';

import story1 from '../../assets/product/unidirectional/29c0feead284fde4f7b53eb75874ee93ae01ac74.png';
import story2 from '../../assets/product/unidirectional/67aa266474344f49969b27d5c427e2bf992cf32d.png';
import story3 from '../../assets/product/unidirectional/2136dc7a51c79d241f9ab02830f8a2561bd6181b.png';

import relatedExair from '../../assets/product/unidirectional/6d491e071fc9a0e187d505a9422887387b2911e8.png';
import relatedUniPallet from '../../assets/product/unidirectional/aa4c71cf6fd121cfe04e6f4f44658228fc24d3dc.png';
import relatedPerimeter from '../../assets/product/unidirectional/ace628f106d3945cb72725dcdea147e2c7a6eff4.png';

import quoteImage from '../../assets/product/unidirectional/60c26e97b304b786a121896cb8a9ba9c10e748e0.png';

const storyBody =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const uniDirectionalPallet: ProductPageData = {
  title: 'Uni-Directional Pallet',
  name: 'uni-directional pallet',
  nameLines: ['uni-directional', 'pallet'],
  showRegMark: true,
  featuresEyebrow: 'FEATURES',
  attributesEyebrow: 'ATTRIBUTES',
  attributesTitle: 'Technical Features',
  optionsEyebrow: 'CUSTOM',
  crumbLabel: 'UNI-DIRECTIONAL PALLET',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT UNI-DIRECTIONAL PALLET',
  aboutText:
    'Uni-Directional Pallet is a lightweight, reusable, nine-block plastic pallet with a reinforced bottom deck in one direction, designed for upstream and downstream handling and distribution between distribution centers and retail environments. Engineered for food manufactures and grocery operations, where durability, efficiency, and consistent handling for automated systems are critical, it provides a reliable alternative to traditional wood pallets. It builds on the functionality of wood pallets—without the associated product damage, debris, and ongoing repair requirements—while offering a more reliable platform for handling and transport.',
  thumbnails: [
    { img: productMain, alt: 'Uni-Directional Pallet, top view' },
    { img: thumb2, alt: 'Uni-Directional Pallet, three-quarter view' },
    { img: thumb3, alt: 'Uni-Directional Pallet, side view' },
    { img: thumb4, alt: 'Uni-Directional Pallet, deck detail' },
  ],
  accordionItems: [
    {
      title: 'Nine-block construction',
      body: 'The nine-block design provides a stable platform for high-volume distribution applications. Along the long direction, the blocks are connected via runners– or bottom deckboards – that support the pallet structure and facilitate movement across surfaces.',
    },
    {
      title: 'Four-way fork entry',
      body: 'The four-way entry configuration allows access from all four sides, enabling efficient handling with forklifts and other material handling equipment while supporting faster loading and unloading across operations.',
    },
    {
      title: 'Automation-ready',
      body: 'Designed for automated and high-throughput systems, the pallet maintains its dimensions, weight, and surface geometry, supporting reliable movement across conveyors and material handling equipment.',
    },
    {
      title: 'Proprietary anti-skid surface',
      body: 'Shuert’s anti-slip surface creates friction between the pallet and the load, enhancing load stability and reducing the need for additional retention devices.',
    },
    {
      title: 'Twin-sheet construction',
      body: 'Its twin-sheet construction prioritizes reinforcement through geometry rather than additional plastic, providing the rigidity needed to resist deflection and maintain consistent performance under load. By limiting deflection, the pallet maintains more consistent dimensions during use.',
    },
    {
      title: 'Monoblock technology',
      body: 'Material is strategically directed to high-contact points to reinforce and protect areas susceptible to accelerated wear under demanding handling conditions. This helps keep pallets deployed rather than in service.',
    },
    {
      title: 'Material selection',
      body: 'The pallet is resistant to moisture, chemicals, and corrosion. It is impervious to weather, including extreme heat ( 70°C ) and cold ( -40°C ) with UV protection. Its non-porous surface resists moisture absorption, does not splinter, and helps limit areas where bacteria can be harbored.',
    },
    {
      title: 'Integrated steel reinforcement',
      body: 'A steel reinforcement is integrated within the deck in one direction, adding structural support where the application requires it without adding unnecessary material mass throughout the pallet.',
    },
    {
      title: 'High load-to-weight construction',
      body: 'The pallet is engineered to achieve the required structural performance while minimizing packaging weight. The synthesis of plastic structures and targeted steel reinforcement creates a strong yet lightweight pallet, supporting a high load-to-weight ratio that improves payload efficiency within a fixed footprint. For example, an 800 × 1,200 mm Uni-Directional Pallet weighs 14.8 kg, compared with approximately 25 kg for a comparable wood pallet. This efficient conversion of pallet weight into load-bearing capacity enables more product per load, improving overall distribution efficiency.',
    },
  ],
  attributes: [
    {
      tag: 'Anti-skid surface',
      img: featAntiSkid,
      desc: 'A surface that increases friction between contact points, reducing slip and maintaining load stability during handling and transport.',
    },
    {
      tag: 'Steel-reinforced',
      img: featSteel,
      desc: 'A structure that incorporates integrated steel reinforcement, increasing strength and load-bearing performance under demanding conditions.',
    },
    {
      tag: 'Monolithic Technology',
      img: featMonolithic,
      desc: 'A pallet leg design that concentrates material in high-stress areas, improving durability and resistance to wear under repeated handling.',
    },
    {
      tag: 'Edge (or point-to-point) Rackable',
      img: featRackable,
      desc: 'A steel-reinforced pallet that supports loads in point-to-point racks (un-supported conditions).',
    },
    {
      tag: 'Conveyable',
      img: featConveyable,
      desc: 'A design that enables compatibility with conveyor-based material handling systems, maintaining stable and consistent movement during transport.',
    },
    {
      tag: 'Durable',
      img: featDurable,
      desc: 'A structure that withstands repeated use without significant degradation in performance.',
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
          '800 x 1200',
          { imperial: '31.49" x 47.24" x 5.90"', metric: '800 × 1200 × 150 mm' },
          { imperial: '32.51 lbs.', metric: '14.75 kg' },
        ],
      },
      {
        cells: [
          '600 x 800',
          { imperial: '23.62" x 31.49" x 5.90"', metric: '600 × 800 × 150 mm' },
          { imperial: '18.51 lbs.', metric: '8.40 kg' },
        ],
      },
    ],
  },
  stories: {
    eyebrow: 'NEWS',
    title: 'See What Our Customers Say',
    articles: [
      { source: 'name of source', body: storyBody, href: '#', img: story1 },
      {
        source: 'name of source',
        body: storyBody,
        href: '#',
        img: story2,
        crop: { width: '138.04%', height: '106.05%', left: '-13.14%', top: '-6.05%' },
      },
      {
        source: 'name of source',
        body: storyBody,
        href: '#',
        img: story3,
        crop: { width: '130.16%', height: '100%', left: '-5.94%', top: '0' },
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
      name: 'uni-pallet',
      size: { imperial: '48”x40” — 48”x48”', metric: '1219 × 1016 mm — 1219 × 1219 mm' },
      img: relatedUniPallet,
      href: '/products/uni-pallet',
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
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
