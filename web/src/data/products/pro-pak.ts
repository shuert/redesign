import type { ProductPageData } from './types';

import headerBg from '../../assets/product/propak/535308e8731d5c3c45a314cd7448c996fa1717a5.png';
import productMain from '../../assets/product/propak/962bc5dea41b9cb8605e747bfd0c533ce2a929fa.png';
import thumb2 from '../../assets/product/propak/7cd2c067cdcb2fccc15ee4db81e05065905c011d.png';
import thumb3 from '../../assets/product/propak/a2b989256ab370197c349ffd2161942fa715abb7.png';
import thumb4 from '../../assets/product/propak/38bcceda2f19f9e9b77ed3de3a209667f6b64bd0.png';

import featSingleSheet from '../../assets/product/propak/a20e05dc028e8c51dc0c5c708c70d2f71be0914a.png';
import featFootprint from '../../assets/product/propak/e47713df4c7f8d464aa3d087d8803bf19d93f57c.png';
import featFourWay from '../../assets/product/propak/1f678e21ee659f129121129bf5e6c2e0198c2987.png';
import featDurable from '../../assets/product/propak/dda1b69f9b09936721371f29af77adfacfe94707.png';

import relatedYarnPak from '../../assets/product/propak/e9c3bad29049bc104caa12c3c1df6a909ac3c3d7.png';
import relatedAxlePak from '../../assets/product/propak/56e5e0488ca1226ecb15ba61951c49ae13582380.png';
import relatedBatteryRak from '../../assets/product/propak/4b9afdab783164ce504f12728e64bcfb848d21d2.png';

import quoteImage from '../../assets/product/shared/quote.png';

const sizeRange = {
  imperial: '29” x 23”  —  90” x 48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

export const proPak: ProductPageData = {
  title: 'Pro-Pak',
  name: 'pro-pak',
  showRegMark: true,
  crumbLabel: 'PRO-PAK',
  headerDims: {
    imperial: '48”x40” & 48”x45”',
    metric: '1219 × 1016 mm & 1219 × 1143 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT PRO-PAK',
  aboutText:
    'Pro-Pak is a reusable container system designed for the storage and transport of 20-pound cylinders in closed-loop systems. Engineered for Blue Rhino, where product protection, load stability, and regulatory compliance are critical, it provides a systems-based alternative to wood pallets and wire cages.',
  thumbnails: [
    { img: productMain, alt: 'Pro-Pak product view 1' },
    { img: thumb2, alt: 'Pro-Pak product view 2' },
    { img: thumb3, alt: 'Pro-Pak product view 3' },
    { img: thumb4, alt: 'Pro-Pak product view 4' },
  ],
  accordionItems: [
    {
      title: 'Multi-component container system',
      body: 'Pro-Pak is comprised of a custom-fitted pallet, dividers that separate each layer of cylinders, and a stabilizing ring.',
    },
    {
      title: 'Custom-formed cylinder protection',
      body: 'Each component incorporates a molded surface design that creates a grid pattern of pockets specific to the cylinder profile. This geometry positions and cradles each unit from both the top and bottom, securing cylinders in place to prevent interaction, movement, and damage during handling and transport, while maximizing packing density within the available footprint. Applied to the top layer of cylinders, the stabilizing ring reinforces the upper layer to ensure containment during transit. This controlled, repeatable configuration consistently positions cylinders throughout the stack, creating the load stability required for safe and efficient handling and compliance with Department of Transportation (DOT) requirements.',
    },
    {
      title: 'Nestable return configuration',
      body: 'The components nest when empty, reducing return volume and the number of return shipments while supporting more efficient storage and transport in closed-loop systems.',
    },
  ],
  attributes: [
    {
      tag: 'Single Sheet',
      img: featSingleSheet,
      desc: 'A structure formed from a single sheet of material.',
    },
    {
      tag: 'Footprint Compatibility',
      img: featFootprint,
      desc: 'A footprint that aligns with container dimensions, improving cube utilization during storage and transport.',
    },
    {
      tag: '4-Way Entry',
      img: featFourWay,
      desc: 'A design that allows access from all four sides, enabling efficient handling with forklifts and material handling equipment.',
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
  systemData: {
    columns: ['Name', 'Size', 'Type', 'Cover Size', 'Divider', 'Pallet Size', 'Cone Type'],
    rows: [
      {
        highlight: true,
        cells: [
          '3x3',
          '38.625 x 38.625',
          'Cone',
          '44" x 44" x 4.5"',
          '44" x 22" x 3"',
          '44" x 22" x 7.4"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '3x4',
          '38.5 x 50.5',
          'Cone',
          '52" x 44" x 4.75"',
          '52" x 44" x 2"',
          '52" x 44" x 7.38"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '3x4, Cabinet Truck',
          '38.5 x 50.5',
          'Cone',
          '47.5" x 47.5" x 4"',
          '47.5" x 47.5" x 3"',
          '47.5" x 47.5" x 7.5"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '3x3, Steel',
          '38.625 x 38.625',
          'Cone',
          '47.5" x 47.5" x 4.38"',
          '47.5" x 47.5" x 3.25"',
          '47.5" x 47.5" x 7.38"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        highlight: true,
        cells: [
          '3x4, Steel',
          '38.5 x 50.5',
          'Cone Tube',
          '56" x 45" x 3.65"',
          '56" x 45" x 2.88"',
          '56" x 45" x 7.65"',
          '3, 6, or 9 degrees',
        ],
      },
      {
        cells: [
          '3x4, Cabinet Truck, Steel',
          '38.625 x 38.625',
          'Cone Tube',
          '50" x 37.5" x 4.5"',
          '50" x 37.5" x 4"',
          '50" x 37.5" x 8.5"',
          '3, 6, or 9 degrees',
        ],
      },
    ],
  },
  related: [
    {
      name: 'yarn-pak',
      size: sizeRange,
      img: relatedYarnPak,
      href: '/products/yarn-pak',
    },
    {
      name: 'axle-pak',
      size: sizeRange,
      img: relatedAxlePak,
      href: '/products/axel-pak',
      crop: {
        width: '199.91%',
        height: '197.68%',
        left: '-31.02%',
        top: '-48.84%',
      },
    },
    {
      name: 'battery-rak',
      size: { imperial: 'Made to Specification', metric: 'Made to Specification' },
      img: relatedBatteryRak,
      href: '/products/battery-pak',
      crop: {
        width: '226.72%',
        height: '227.14%',
        left: '-28.39%',
        top: '-63.57%',
      },
    },
  ],
  quoteTitle:
    'Lorem ipsum dolor sit amet consectetur. Enim egestas elementum auctor cursus semper maecenas ipsum risus neque.',
  quoteImage,
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
