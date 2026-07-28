import type { ProductPageData } from './types';

import headerBg from '../../assets/product/remanpak/a25bbe352bd1773875487d4f8191302637fb5f83.png';
import productMain from '../../assets/product/remanpak/3028050f466102f5296e21bd8f008072f3e5416e.png';
import thumb2 from '../../assets/product/remanpak/b189b71f4a376b732dee24972f2da70af0e3761d.png';
import thumb3 from '../../assets/product/remanpak/d30e5f65acd08324e59edd38a58f91a3acb21024.png';

import featTwinsheet from '../../assets/product/remanpak/afad0bbcfeea511b2cac83316425e32293111321.png';
import featAltConfigs from '../../assets/product/remanpak/d74f44c164b53651b556c4ff6cb0d931e096dd9a.png';
import featBungeeHook from '../../assets/product/remanpak/232f4c2baf1549d25a6094111a71d2c3b9cdeb93.png';
import featClamshell from '../../assets/product/remanpak/e9de12d019c404b56476441e251cc9e8008d4f83.png';
import featDurable from '../../assets/product/remanpak/04761afd86936be3bd19ed274d284761dbe95334.png';

import relatedYarnPak from '../../assets/product/remanpak/e9c3bad29049bc104caa12c3c1df6a909ac3c3d7.png';
import relatedModulePak from '../../assets/product/remanpak/8a3ddf1c3913dddbff2427e7e435308c4d616728.png';
import relatedUniCase from '../../assets/product/remanpak/454084480a055ddddae249d65a9d63552f1b760d.png';

import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29” x 23”  —  90” x 48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const remanPak: ProductPageData = {
  title: 'Reman-Pak',
  name: 'reman-pak',
  showRegMark: true,
  crumbLabel: 'REMAN-PAK',
  headerBg,
  aboutEyebrow: 'ABOUT REMAN-PAK',
  aboutText:
    'Reman-Pak is a reusable clamshell container system originally designed to transport damaged—and later rebuilt—transmissions between suppliers and original equipment manufacturers (OEMs). Engineered for the automotive industry, it provides an alternative to steel racks and wood crates for applications where part protection and operational efficiency are both critical—and cannot be treated as tradeoffs.',
  thumbnails: [
    { img: productMain, alt: 'Reman-Pak product view 1' },
    { img: thumb2, alt: 'Reman-Pak product view 2' },
    { img: thumb3, alt: 'Reman-Pak product view 3' },
  ],
  accordionItems: [
    {
      title: 'Clamshell construction',
      body: 'The system features a clamshell design comprised of a twin-sheet cover fastened to a single-sheet pallet. An integrated bungee-and-hook system secures the opposing sides by engaging the pallet lip, protecting contents from dust and contamination when engaged.',
    },
    {
      title: 'Integrated pallet-tray base',
      body: 'The pallet-tray base consolidates the functions of a pallet and a tray into a single structure—allowing the container to be handled efficiently like a pallet while securing parts within custom-fitted pockets like a tray.',
    },
    {
      title: 'Twin-sheet thermoformed cover',
      body: 'The twin-sheet thermoformed cover provides two functional surfaces within one integrated structure. The exterior surface is molded with the geometry needed to receive and support stacked loads, while the interior surface is formed to the part’s geometry to help locate, stabilize, and protect it. By forming and knitting the two sheets together, the cover delivers both load-management functionality and part-specific protection without requiring separate components.',
    },
    {
      title: 'Enclosed part protection',
      body: 'Enclosed within the clamshell, parts are protected from damage, contamination, and environmental exposure across a wide range of operating conditions.',
    },
    {
      title: 'Highly customizable',
      body: 'Though originally developed for transmissions, Reman-Pak can be retrofitted to accommodate a wide range of components, including electric vehicle motors and other high-value drivetrain assemblies.',
    },
    {
      title: 'Thick-gauge plastic construction',
      body: 'Constructed from thick-gauge plastic, Reman-Pak is impact-resistant and stackable, supporting repeated use without ongoing repair requirements to maintain part integrity and quality.',
    },
    {
      title: 'Stacking interface',
      body: 'Features designed into the adjoining surfaces allow the pallet of one container to locate securely to the cover of another, creating a stable, space-efficient unit for storage and transport.',
    },
    {
      title: 'Integrated handling and containment',
      body: 'Designed for high-density, weight-sensitive applications, Reman-Pak minimizes packaging weight by eliminating the need for separate handling platforms and internal trays. Less packaging weight helps maximize payload efficiency—supporting improved cube utilization in operations where weight limits are often the primary constraint.',
    },
  ],
  attributes: [
    {
      tag: 'Twinsheet',
      img: featTwinsheet,
      desc: 'A structure formed by bonding two heated plastic sheets to create enclosed geometry and internal features.',
    },
    {
      tag: 'Alternative Configurations',
      img: featAltConfigs,
      desc: 'A system that accommodates multiple configurations, enabling compatibility with varying product and operational requirements.',
    },
    {
      tag: 'Bungee Hook',
      img: featBungeeHook,
      desc: 'An integrated bungee and hook system that secures opposing sides by engaging a lower lip, protecting contents from dust and contamination when engaged.',
    },
    {
      tag: 'Clamshell',
      img: featClamshell,
      desc: 'A hinged design that opens along a central axis, providing full access while protecting contents from dust and contamination when closed.',
    },
    {
      tag: 'Durable',
      img: featDurable,
      desc: 'A structure that withstands repeated use without significant degradation in performance.',
    },
  ],
  attributesAutoplayMs: 3000,
  optionCols: [
    ['Sheet Color', 'Stripe Color', 'Embossing', 'Fire Retardant', 'Pockets for Barcoding and RFID'],
    ['White Stamping', 'Weight (dependent on load requirements)', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  related: [
    {
      name: 'yarn-pak',
      size: sizeRange,
      img: relatedYarnPak,
      href: '/products/yarn-pak',
    },
    {
      name: 'module-pak',
      size: sizeRange,
      img: relatedModulePak,
      href: '/products/module-pak',
    },
    {
      name: 'uni-case',
      size: sizeRange,
      img: relatedUniCase,
      href: '/products/uni-case',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
