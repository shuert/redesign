import type { ProductPageData } from './types';

import headerBg from '../../assets/product/snappak/ef25f5ae105f4b248bea6a3b0ded22af2695c320.png';
import productMain from '../../assets/product/snappak/42abb03618e39d7822c880009fe09f28262fea42.png';
import thumb2 from '../../assets/product/snappak/b3c631da6583de9883e22f47223c4ee0aa29b2c4.png';
import thumb3 from '../../assets/product/snappak/0481a542b2c39930921dd3392c4e41edefeec8f5.png';
import thumb4 from '../../assets/product/snappak/f5ce05246350810a7c9cd3bb2bc6a4af4d9ae3ea.png';
import thumb5 from '../../assets/product/snappak/5e0662431a4af4cb8c6e3a3cfaf24ae6784c1265.png';

import featTwinsheet from '../../assets/product/snappak/d5892ada1fec12725ea76721f31486e3516cde0f.png';
import featCorners from '../../assets/product/snappak/9040595c81f0a5b66eec60c97e2be23e9b862815.png';
import featNestable from '../../assets/product/snappak/48a51adbc514920e0e6c758aabd20601ed6688cd.png';
import featCollapsible from '../../assets/product/snappak/0da29bf5a7c135f675cf7888d408bbddb9d7e05f.png';
import featPassiveLocks from '../../assets/product/snappak/db088a897d19f8e1512e7a1f4b68d7f956da5ec9.png';
import featTubeCut from '../../assets/product/snappak/a82706348e79f3b92bef6e64b0124255d03a43a1.png';
import featLightweight from '../../assets/product/snappak/0d0f443b7b0aaed20e3f2d3d713e510277277e2e.png';

import relatedUniPak from '../../assets/product/snappak/6324929b6ffd966af7a2778ee189f60b599310e9.png';
import relatedBulkPak from '../../assets/product/snappak/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedUniPakIi from '../../assets/product/snappak/1f33178a0228a5eee17d27db2787893e839ba77b.png';

import videoPoster from '../../assets/product/snappak/ea0ee2c0725c11aa501a6e1652a3d8b171221b14.png';
import quoteImage from '../../assets/product/shared/quote.jpg';

const sizeRange = {
  imperial: '48”x40” — 48”x45”',
  metric: '1219 × 1016 mm — 1219 × 1143 mm',
} as const;

export const snapPak: ProductPageData = {
  title: 'Snap-Pak',
  name: 'snap-pak',
  showRegMark: true,
  crumbLabel: 'SNAP-PAK',
  headerDims: {
    imperial: '48”x40”  &  48”x45”',
    metric: '1219 × 1016 mm  &  1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT SNAP-PAK',
  aboutText:
    'Snap-Pak is a reusable, collapsible container system designed for air cargo transport in closed-loop systems. Based on the Uni-Pak platform, it is engineered for operations where space constraints, return efficiency, and weight are critical.',
  thumbnails: [
    { img: productMain, alt: 'Snap-Pak product view 1' },
    { img: thumb2, alt: 'Snap-Pak product view 2' },
    { img: thumb3, alt: 'Snap-Pak product view 3' },
    { img: thumb4, alt: 'Snap-Pak product view 4' },
    { img: thumb5, alt: 'Snap-Pak product view 5' },
  ],
  accordionItems: [
    {
      title: 'ULD-optimized footprint',
      body: 'Snap-Pak features footprints optimized for unit load devices (ULDs), improving cube utilization within standardized air freight configurations.',
    },
    {
      title: 'Optional open cover design',
      body: 'Its open cover design allows for quick loading of oversized or mixed cargo, including mailers, boxes, and irregular items.',
    },
    {
      title: 'Passive locking mechanism',
      body: 'The system’s patented passive locking mechanism “snaps” all components securely into place without active deployment. Under applied force, interlocking components secure the sleeve within the track of the pallet and cover, allowing for fast assembly and disassembly without additional hardware.',
    },
    {
      title: 'Collapsible return configuration',
      body: 'The system retains Uni-Pak’s collapsible, space-efficient design, supporting efficient return and storage in closed-loop systems.',
    },
    {
      title: 'Lightweight construction',
      body: 'Its lightweight construction helps preserve available payload in weight-restricted environments, such as air freight.',
    },
    {
      title: 'Multi-component container system',
      body: 'Uni-Pak combines a twin-sheet thermoformed pallet, heavy-duty sleeve, and twin-sheet thermoformed cover into a single, integrated solution.',
    },
    {
      title: 'Knock-down return configuration',
      body: 'Disengage the slide-lock, and the system knocks down efficiently into individual components for maximum space efficiency during storage and transport. Collapsible sleeves fold down, and pallets and covers nest, significantly reducing storage volume and improving space utilization and return ratios.',
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
      tag: 'Twinsheet',
      img: featTwinsheet,
      desc: 'A structure formed by bonding two heated plastic sheets to create enclosed geometry and internal features.',
    },
    {
      tag: '45 Degree Rounded Corners/Maximized Footprint',
      img: featCorners,
      desc: 'Designed to maximize usable deck space within standard dimensional constraints, increasing payload capacity and improving cube utilization while reducing load overhang and associated product damage.',
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
      tag: 'Passive locks',
      img: featPassiveLocks,
      desc: 'A locking mechanism that engages through interlocking components under applied force, securing the sleeve within the track of the pallet and cover without active deployment.',
    },
    {
      tag: 'Tube-cut (straight sleeve)',
      img: featTubeCut,
      desc: 'A sleeve design with a straight-cut bottom edge that interfaces directly with the pallet track.',
    },
    {
      tag: 'Lightweight',
      img: featLightweight,
      desc: 'A structure that minimizes mass, reducing handling effort and allowing a greater proportion of each shipment to consist of product.',
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
      size: {
        imperial: '29”x23” — 90”x48”',
        metric: '737 × 584 mm — 2286 × 1219 mm',
      },
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
    label: 'Snap-Pak product video',
  },
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
