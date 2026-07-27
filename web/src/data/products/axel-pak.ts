import type { ProductPageData } from './types';

import headerBg from '../../assets/product/axelpak/cf43163546871687e3957c54bd0a97dc1b1a0385.png';
import productMain from '../../assets/product/axelpak/56e5e0488ca1226ecb15ba61951c49ae13582380.png';
import thumb2 from '../../assets/product/axelpak/a76afbcbc7513b85b8ef80b1eff10b65d5a5a18b.png';
import thumb3 from '../../assets/product/axelpak/15339709261f7f9f00f9a01ac7d6d4a1017593b9.png';

import featMultipleFootprints from '../../assets/product/axelpak/0b6ec8553a52c5eecdc31201e87aae3bee4fdbd6.png';
import featStiffDeck from '../../assets/product/axelpak/e7beb0d11a3123131db8608e457ebd1019f4905c.png';
import featForkTubes from '../../assets/product/axelpak/98dcf459a5e1a340f89867211e73b31e26d3395f.png';

import relatedProPak from '../../assets/product/axelpak/962bc5dea41b9cb8605e747bfd0c533ce2a929fa.png';
import relatedYarnPak from '../../assets/product/axelpak/e9c3bad29049bc104caa12c3c1df6a909ac3c3d7.png';
import relatedBatteryRak from '../../assets/product/axelpak/4b9afdab783164ce504f12728e64bcfb848d21d2.png';

import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29” x 23”  —  90” x 48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const axelPak: ProductPageData = {
  title: 'Axle-Pak',
  name: 'axle-pak',
  showRegMark: true,
  crumbLabel: 'AXLE-PAK',
  headerBg,
  aboutEyebrow: 'ABOUT AXLE-PAK',
  aboutText:
    'Axle-Pak is a reusable reverse clamshell container system originally designed to store and transport axle assemblies and driveline components between suppliers and original equipment manufacturers (OEMs). Engineered for the automotive industry, it provides a lightweight alternative to steel racks for applications where part protection and shipping efficiency are critical—helping customers maximize usable trailer space and shift more shipping capacity toward product, not packaging.',
  thumbnails: [
    { img: productMain, alt: 'Axle-Pak product view 1' },
    { img: thumb2, alt: 'Axle-Pak product view 2' },
    { img: thumb3, alt: 'Axle-Pak product view 3' },
  ],
  accordionItems: [
    {
      title: 'Reverse clamshell construction',
      body: 'The system features a reverse clamshell design in which two twin-sheet thermoformed trays are bonded together at opposing male details.',
    },
    {
      title: 'Reinforced fork access',
      body: 'The plastic top and bottom trays are formed around integrated fork tubes, creating a clear entryway for the tines of forklifts and other handling devices. The fork tubes act as an added barrier between the tines and the part, helping guide or redirect the tines to reduce the risk of impact with the part inside the pack.',
    },
    {
      title: 'Custom-formed part protection',
      body: 'Axle assemblies nest in part-specific pockets that secure and organize parts, maintaining consistent positioning and protecting components during handling and transport.',
    },
    {
      title: 'Stacking interface',
      body: 'Features designed into the pack allow stacked units to locate securely to one another, creating a stable, space-efficient unit for storage and transport. Up to six axles can be stacked, improving trailer utilization while making large, heavy components easier to handle and transport.',
    },
    {
      title: 'Integrated pallet, tray, and cover',
      body: 'When stacked, the upper pack serves as a cover for the part below, protecting and securing it in place. This integrated design allows Axle-Pak to function as a pallet, tray, and cover in one, eliminating separate handling platforms and minimizing weight to help maximize payload efficiency—supporting improved cube utilization in operations where weight limits are often the primary constraint.',
    },
  ],
  attributes: [
    {
      tag: 'Multiple Footprints',
      img: featMultipleFootprints,
      desc: 'A design that is available in multiple footprint sizes, accommodating varying product dimensions and handling requirements.',
    },
    {
      tag: 'Stiff Deck',
      img: featStiffDeck,
      desc: 'A deck structure that resists deflection under load, maintaining a stable surface for consistent load support during handling and transport.',
    },
    {
      tag: 'Fork Tubes',
      img: featForkTubes,
      desc: 'Integrated channels that guide and support forklift tines during entry, improving alignment and stability during handling and transport.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  related: [
    {
      name: 'pro-pak',
      size: sizeRange,
      img: relatedProPak,
      href: '/products/pro-pak',
    },
    {
      name: 'yarn-pak',
      size: sizeRange,
      img: relatedYarnPak,
      href: '/products/yarn-pak',
    },
    {
      name: 'battery-rak',
      size: { imperial: 'Made to Specification', metric: 'Made to Specification' },
      img: relatedBatteryRak,
      href: '/products/battery-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
