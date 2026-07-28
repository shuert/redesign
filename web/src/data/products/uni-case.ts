import type { ProductPageData } from './types';

import headerBg from '../../assets/product/unicase/442ba489266437eb1fe436e9e5bfc7a3a7e24805.png';
import productMain from '../../assets/product/unicase/454084480a055ddddae249d65a9d63552f1b760d.png';
import thumb2 from '../../assets/product/unicase/1daa1d96df70d20b57fc7eae277be3603b288886.png';
import thumb3 from '../../assets/product/unicase/08538fbfacfcccf27d14fc2f4f20482a54922d71.png';
import thumb4 from '../../assets/product/unicase/038bacb66b395d07da6f15284b29c0245a59db71.png';

import featTwinsheet from '../../assets/product/unicase/682e1df585a60f3315576652790d664803bf85e3.png';
import featModular from '../../assets/product/unicase/91957212fea37ff67dca708577738e7deea9cf03.png';
import featCustomDunnage from '../../assets/product/unicase/f1301964d8d5497dd99b536d65a5785fc4c9df26.png';
import featBumper from '../../assets/product/unicase/2a61fd47c1f4fa1e7eff8bfa6bd2ad633174ca93.png';
import featClamshell from '../../assets/product/unicase/87c25141e00b79a683c9c0d23e579476b0f0beaa.png';
import featGasSprings from '../../assets/product/unicase/255791fd397f1712a43af4ce551728baefc08005.png';
import featLatched from '../../assets/product/unicase/afe89ee146b7e26c45253514275543179b9fb655.png';

import relatedRemanPak from '../../assets/product/unicase/3028050f466102f5296e21bd8f008072f3e5416e.png';
import relatedBulkPak from '../../assets/product/unicase/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedModulePak from '../../assets/product/unicase/8a3ddf1c3913dddbff2427e7e435308c4d616728.png';

import quoteImage from '../../assets/product/shared/quote.png';

export const uniCase: ProductPageData = {
  title: 'Uni-Case',
  name: 'uni-case',
  showRegMark: true,
  crumbLabel: 'UNI-CASE',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT UNI-CASE',
  aboutText:
    'Uni-Case is a reusable clamshell container system designed for the storage and transport of large-scale products in closed-loop systems. Engineered for the automotive industry, where part integrity and quality are critical, it provides a systems-based alternative to traditional steel racks while minimizing the indirect costs that drive total cost of ownership.',
  thumbnails: [
    { img: productMain, alt: 'Uni-Case product view 1' },
    { img: thumb2, alt: 'Uni-Case product view 2' },
    { img: thumb3, alt: 'Uni-Case product view 3' },
    { img: thumb4, alt: 'Uni-Case product view 4' },
  ],
  accordionItems: [
    {
      title: 'Clamshell construction',
      body: 'The system features a clamshell design comprised of a twin-sheet cover and pallet connected by a hinge mechanism. The design opens along a central axis, providing full access while protecting contents from dust and contamination when closed.',
    },
    {
      title: 'Custom-formed part protection',
      body: 'Within the pack, single sheet interior dunnage trays with part-specific pockets secure and organize parts, maintaining consistent positioning and protecting components during handling and transport.',
    },
    {
      title: 'Redundant protection',
      body: 'Uni-Case is designed with built-in redundancy. The dunnage trays are bound within an enclosed clamshell structure—working together as a unified system—while an outer halo bumper provides additional protection during handling and transport. This layered approach helps protect parts from damage, contamination, and environmental exposure across a wide range of operating conditions.',
    },
    {
      title: 'Gas spring-assisted access',
      body: 'An integrated strut assists controlled opening and closing of the clamshell, promoting ergonomic operation and supporting safe and efficient handling.',
    },
    {
      title: 'Four-way fork entry',
      body: 'The four-way entry configuration allows access from all four sides, enabling efficient handling with forklifts and other material handling equipment while supporting faster loading and unloading across operations.',
    },
    {
      title: 'Stacking interface',
      body: 'Features designed into the adjoining surfaces allow the pallet of one container to locate securely to the cover of another. Female details on the pallet, known as locators, engage with corresponding male features on the cover, helping two containers stack securely and align properly. This layered locating system creates redundancy, helping maintain a stable, space-efficient unit for storage and transport.',
    },
    {
      title: 'Integrated lightweight design',
      body: 'Designed for high-density, weight-sensitive applications, Uni-Case minimizes packaging weight to help maximize payload efficiency—supporting improved cube utilization in operations where weight limits are often the primary constraint.',
    },
  ],
  attributes: [
    {
      tag: 'Twinsheet',
      img: featTwinsheet,
      desc: 'A structure formed by bonding two heated plastic sheets to create enclosed geometry and internal features.',
    },
    {
      tag: 'Modular',
      img: featModular,
      desc: 'A system that uses interchangeable components, allowing individual parts to be replaced without replacing the entire system.',
    },
    {
      tag: 'Custom Interior Dunnage',
      img: featCustomDunnage,
      desc: 'An internal system that secures and organizes parts, maintaining consistent positioning and protecting components during handling and transport.',
    },
    {
      tag: 'Bumper',
      img: featBumper,
      desc: 'An integrated feature that absorbs impact at contact points, reducing transmitted forces and protecting contained parts during handling.',
    },
    {
      tag: 'Clamshell',
      img: featClamshell,
      desc: 'A hinged design that opens along a central axis, providing full access while protecting contents from dust and contamination when closed.',
    },
    {
      tag: 'Gas Springs (strut)',
      img: featGasSprings,
      desc: 'An integrated component that assists controlled opening and closing, reducing required force for ergonomic operation.',
    },
    {
      tag: 'Latched, Locked and Sealed',
      img: featLatched,
      desc: 'A closure system that secures components in a fixed position, preventing unintended opening during handling and transport.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  related: [
    {
      name: 'reman-pak',
      size: { imperial: 'Custom', metric: 'Custom' },
      img: relatedRemanPak,
      href: '/products/reman-pak',
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
      name: 'module-pak',
      size: { imperial: 'Custom', metric: 'Custom' },
      img: relatedModulePak,
      href: '/products/module-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
