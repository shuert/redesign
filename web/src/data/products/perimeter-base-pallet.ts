import type { ProductPageData } from './types';

import headerBg from '../../assets/product/perimeter/f2b2f0fb607e50dff2d2a026f8b82effe9f45226.png';
import productMain from '../../assets/product/perimeter/ace628f106d3945cb72725dcdea147e2c7a6eff4.png';
import thumb2 from '../../assets/product/perimeter/b93a8c08eaf0832c15c766d247d8f558d369febe.png';
import thumb3 from '../../assets/product/perimeter/ef0b810aa075f1ead2d0ea5a30197ad80377695c.png';
import thumb4 from '../../assets/product/perimeter/fad311cfd64dd52337a956d51e074b257fc5a99c.png';

import featAntiSkid from '../../assets/product/perimeter/355316722a7ba431aefaca6d29740760e009d0c2.png';
import featSteel from '../../assets/product/perimeter/e8cbd5fa5317cfed2995053978e1e0e766caa979.png';
import featMonolithic from '../../assets/product/perimeter/f2b2f0fb607e50dff2d2a026f8b82effe9f45226.png';
import featPerimeter from '../../assets/product/perimeter/e6c02546f157b183be0dca2bc06eaa76a6f6ef6b.png';
import featConveyable from '../../assets/product/perimeter/07398478ee8b7d20376cc8cd6643a87af99d79e9.png';
import featDurable from '../../assets/product/perimeter/c1c71a84841fc62aa0476e34707badd4ee0e95d7.png';

import relatedExair from '../../assets/product/perimeter/6d491e071fc9a0e187d505a9422887387b2911e8.png';
import relatedUniPallet from '../../assets/product/perimeter/aa4c71cf6fd121cfe04e6f4f44658228fc24d3dc.png';
import relatedUniDirectional from '../../assets/product/unidirectional/7ff131f8858a7b66c45784b5edc74c3a71e37ef2.png';

import quoteImage from '../../assets/product/shared/quote.jpg';

export const perimeterBasePallet: ProductPageData = {
  title: 'Perimeter-Base Pallet',
  name: 'perimeter-base pallet',
  nameLines: ['perimeter-base', 'pallet'],
  showRegMark: true,
  featuresEyebrow: 'Features',
  attributesEyebrow: 'Attributes',
  attributesTitle: 'Technical Features',
  optionsEyebrow: 'Custom',
  crumbLabel: 'PERIMETER-BASE PALLET',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'About Perimeter-Based GMA Pallet',
  aboutText:
    'The Perimeter-Based GMA Pallet is a lightweight, reusable, nine-block plastic pallet with a reinforced bottom deck in both directions. Based on the Uni-Directional pallet, it is engineered for demanding manufacturing, warehousing, and distribution environments where durability, long-term performance, and compatibility with existing material handling equipment, warehouse racking, and automated systems are critical. It provides a reliable alternative to traditional wood pallets and other plastic pallets, building on their functionality without the associated product damage, debris, and ongoing repair requirements.',
  thumbnails: [
    { img: productMain, alt: 'Perimeter-base pallet, top view' },
    { img: thumb2, alt: 'Perimeter-base pallet, angled view' },
    { img: thumb3, alt: 'Perimeter-base pallet, underside' },
    { img: thumb4, alt: 'Perimeter-base pallet, detail' },
  ],
  accordionItems: [
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
      body: 'The pallet is resistant to moisture, chemicals, and corrosion. It is impervious to weather, including extreme heat (70°C) and cold (-40°C) with UV protection. Its non-porous surface resists moisture absorption, does not splinter, and helps limit areas where bacteria can be harbored.',
    },
    {
      title: 'Nine-block construction',
      body: 'The nine-block design provides a stable platform for high-volume distribution applications. Blocks running in the long and short directions are connected via runners—or bottom deckboards—creating a perimeter around the bottom of the pallet. These runners support the pallet structure and facilitate movement across surfaces.',
    },
    {
      title: 'Full perimeter base',
      body: 'Runners in both directions increase the available stacking surface, distributing the weight of the load across a larger area and reducing points of pressure on the product below when pallets are stacked. The additional framework also enhances stability during transport, storage, and conveyor handling.',
    },
    {
      title: 'Integrated steel reinforcement',
      body: 'A steel reinforcement is integrated within the deck in both directions, adding structural support where the application requires it without adding unnecessary material mass throughout the pallet. This added rigidity supports performance in pallet racking systems.',
    },
    {
      title: 'GMA-compatible pallet',
      body: 'The pallet is designed around the standardized Grocery Manufacturers Association (GMA) footprint, supporting compatibility across transportation, storage, and material handling environments. Its configuration works with forklifts, pallet jacks, and other commonly used material handling equipment.',
    },
    {
      title: 'High load-to-weight construction',
      body: 'The pallet is engineered to achieve the required structural performance while minimizing packaging weight. The synthesis of plastic structures and targeted steel reinforcement creates a strong yet lightweight pallet, supporting a high load-to-weight ratio that improves payload efficiency within a fixed footprint. This efficient conversion of pallet weight into load-bearing capacity enables more product per load, improving overall distribution efficiency.',
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
      tag: 'Perimeter-based',
      img: featPerimeter,
      desc: 'Pallet legs are attached to runners on each side of the pallet provide support and increase bottom deck coverage on the surface of the load below when stacked.',
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
    ['Color', 'Stripe', 'Custom Branding', 'Pockets for Barcoding and RFID'],
    ['Hot Stamping', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
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
      name: 'uni-directional pallet',
      size: { imperial: '48”x40” & 48”x45”', metric: '1219 × 1016 mm & 1219 × 1143 mm' },
      img: relatedUniDirectional,
      href: '/products/uni-directional-pallet',
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
