import type { ProductPageData } from './types';

import headerBg from '../../assets/product/batterypak/9b39ac3f11e277243b9e645a5a674a3871c79a1a.png';
import productMain from '../../assets/product/batterypak/4b9afdab783164ce504f12728e64bcfb848d21d2.png';
import thumb2 from '../../assets/product/batterypak/0e780b5e9aba04895abbfceed2a864eb409b41e3.png';
import thumb3 from '../../assets/product/batterypak/8339abba5f87adc522a836c5cb112d07cbdf4857.png';
import thumb4 from '../../assets/product/batterypak/5ddb985bd6ea7f21ffd2689d92f9b10d7a9e1ea1.png';

import featSteelReinforced from '../../assets/product/batterypak/85e7d0425416c6dd15efff5e8a59c65f654b984c.png';
import featFourWayEntry from '../../assets/product/batterypak/3124c91bf3c8ca22725fb850fe75c8f89ac8148a.png';
import featLightweight from '../../assets/product/batterypak/8e008f6b3b69575081cb9953fa19f87078d540a7.png';
import featStiffDeck from '../../assets/product/batterypak/f9d00ea20f9258fff3e021d9e2496be948bafff9.png';
import featFootprint from '../../assets/product/batterypak/9ef9f2d9d65c950362c6c92a7b4c0e8b712d9e26.png';

import relatedModulePak from '../../assets/product/batterypak/8a3ddf1c3913dddbff2427e7e435308c4d616728.png';
import relatedUniPakIi from '../../assets/product/batterypak/1f33178a0228a5eee17d27db2787893e839ba77b.png';
import relatedAxlePak from '../../assets/product/batterypak/56e5e0488ca1226ecb15ba61951c49ae13582380.png';

import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29” x 23”  —  90” x 48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const batteryPak: ProductPageData = {
  title: 'Battery-Rak',
  name: 'battery-rak',
  showRegMark: true,
  crumbLabel: 'BATTERY-RAK',
  headerBg,
  aboutEyebrow: 'ABOUT BATTERY-RAK',
  aboutText:
    'Battery-Pak is a reusable reverse clamshell pallet-tray originally designed to store and transport electric vehicle battery packs between suppliers and original equipment manufacturers (OEMs). Engineered for automotive programs seeking packaging that better aligns with the environmental intent of electric vehicle platforms, Battery-Pak provides a lightweight alternative to steel racks for applications where part protection and shipping efficiency are critical—helping customers maximize usable trailer space and shift more shipping capacity toward product, not packaging.',
  thumbnails: [
    { img: productMain, alt: 'Battery-Rak product view 1' },
    { img: thumb2, alt: 'Battery-Rak product view 2' },
    { img: thumb3, alt: 'Battery-Rak product view 3' },
    { img: thumb4, alt: 'Battery-Rak product view 4' },
  ],
  accordionItems: [
    {
      title: 'Reverse clamshell construction',
      body: 'The system features a reverse clamshell design in which two twin-sheet thermoformed trays are bonded together at opposing male details.',
    },
    {
      title: 'Integrated steel weldment',
      body: 'Plastic is formed around a steel weldment, so the structure works as an integrated unit. The steel weldment distributes the weight of stacked loads through the H-frames, enabling the bottom unit to support successive packs in the stack. Up to four batteries can be stacked and moved as one load, making large, heavy components easier to handle and transport while further improving trailer utilization.',
    },
    {
      title: 'Optional reinforced fork access',
      body: 'Standard fork entry is built into the pack, with optional reinforced fork access available based on customer requirements. When specified, plastic can be formed around integrated fork tubes, creating a clear entryway for the tines of forklifts and other handling devices. The fork tubes act as an added barrier between the tines and the part, helping guide or redirect the tines to reduce the risk of impact with the part inside the pack.',
    },
    {
      title: 'Custom-formed part protection',
      body: 'The battery pack nests in part-specific pockets that secure and organize parts, maintaining consistent positioning and protecting components during handling and transport.',
    },
    {
      title: 'Stacking interface',
      body: 'The integrated H-frame creates a controlled stacking interface between packs. Each H-frame is outfitted with a flanged target on the bottom and a receiver on the top. As packs are stacked, the receivers of the lower pack pass through cutouts in the formed plastic, guiding the flanged targets of the upper pack into position. This layered locating system creates redundancy, helping maintain stack alignment and stability during storage and transport.',
    },
    {
      title: 'Integrated pallet, tray, and cover',
      body: 'When stacked, the upper pack serves as a cover for the battery pack below, protecting it from all sides and securing it in place. This integrated design allows Battery-Pak to function as a pallet, tray, and cover in one, eliminating separate handling platforms, minimizing packaging weight, and reducing packaging height by up to five feet compared to comparable steel rack solutions. Together, these advantages help maximize payload efficiency and support improved cube utilization in operations where weight limits are often the primary constraint.',
    },
  ],
  attributes: [
    {
      tag: 'Steel Reinforced',
      img: featSteelReinforced,
      desc: 'Open Cover Lid is secured to the sleeve via four injection-molded slide locks, ensuring a tight, reliable closure throughout the supply chain.',
    },
    {
      tag: '4-Way Entry',
      img: featFourWayEntry,
      desc: 'A design that allows access from all four sides, enabling efficient handling with forklifts and material handling equipment.',
    },
    {
      tag: 'Lightweight',
      img: featLightweight,
      desc: 'A structure that minimizes mass, reducing handling effort and allowing a greater proportion of each shipment to consist of product.',
    },
    {
      tag: 'Stiff Deck',
      img: featStiffDeck,
      desc: 'A deck structure that resists deflection under load, maintaining a stable surface for consistent load support during handling and transport.',
    },
    {
      tag: 'Footprint Compatibility',
      img: featFootprint,
      desc: 'A footprint that aligns with container dimensions, improving cube utilization during storage and transport.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  related: [
    {
      name: 'module-pak',
      size: sizeRange,
      img: relatedModulePak,
      href: '/products/module-pak',
    },
    {
      name: 'uni-pak II',
      size: sizeRange,
      img: relatedUniPakIi,
      href: '/products/uni-pak-II',
    },
    {
      name: 'axle-pak',
      size: sizeRange,
      img: relatedAxlePak,
      href: '/products/axel-pak',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
