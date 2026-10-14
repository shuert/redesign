import type { ProductPageData } from './types';

import headerBg from '../../assets/product/unipakII/b4e21ec83fdfc58ee8a48cbc6551f58393b6577b.png';
import productMain from '../../assets/product/unipakII/1f33178a0228a5eee17d27db2787893e839ba77b.png';
import thumb2 from '../../assets/product/unipakII/57cba24718b79dc8c62f8dca1925809c7024aaea.png';
import thumb3 from '../../assets/product/unipakII/21d20d17d7fc92824b93d1077d94e9cec59856c4.png';
import thumb4 from '../../assets/product/unipakII/936b2ae1f1c9b33578277a17db4fe6b94816b914.png';

import featMultipleFootprints from '../../assets/product/unipakII/2527b56815c48003b3d91195507b1aa8db305a8d.png';
import featLocators from '../../assets/product/unipakII/b0354f4f61b6c63a2f92c93320f7a53bd6acf973.png';
import featNestable from '../../assets/product/unipakII/28104e94b24729f56fe0215768155abb7d7e623e.png';
import featCollapsible from '../../assets/product/unipakII/1a206e93f2481770b7c7da44b80495c1af0f8531.png';
import featSlidelock from '../../assets/product/unipakII/e78a40d2179ec5468690f2d7fe7a3acc49e4b42b.png';
import featTubeCut from '../../assets/product/unipakII/cdb315924137c6c91566fb3d3456f5ebab65a365.png';

import relatedUniPak from '../../assets/product/unipakII/6324929b6ffd966af7a2778ee189f60b599310e9.png';
import relatedBulkPak from '../../assets/product/unipakII/fcd48ab930f8cb18118377413ddb31102fbf6a8b.png';
import relatedSnapPak from '../../assets/product/unipakII/42abb03618e39d7822c880009fe09f28262fea42.png';

import videoPoster from '../../assets/product/unipakII/15cb59f98f68de15e42f349656b61c3e3c4ecbb0.png';
import quoteImage from '../../assets/product/shared/quote.jpg';

const sizeRange = {
  imperial: '29”x23” — 90”x48”',
  metric: '737 × 584 mm — 2286 × 1219 mm',
} as const;

const tearSheet = (file: string) => `/downloads/${encodeURIComponent('Uni-Pak II')}/${file}`;

export const uniPakIi: ProductPageData = {
  title: 'Uni-Pak II',
  name: 'uni-pak II',
  showRegMark: true,
  crumbLabel: 'UNI-PAK II',
  // Figma hero dims still show Uni-Pak I range; use II system-data range
  headerDims: {
    imperial: '30”x29”  —  90”x48.75”',
    metric: '762 × 737 mm — 2286 × 1238 mm',
  },
  headerBg,
  aboutEyebrow: 'ABOUT UNI-PAK II',
  aboutText:
    'Uni-Pak II is a reusable, collapsible container system designed for storage and transport in closed-loop systems. Based on the Uni-Pak platform, it is engineered for operations where space constraints, return efficiency, and product protection are critical. Uni-Pak II features a Tri-Digitous® slide-lock and tube-cut sleeve that prioritize internal dimensions and maximize interior cube.',
  thumbnails: [
    { img: productMain, alt: 'Uni-Pak II product view 1' },
    { img: thumb2, alt: 'Uni-Pak II product view 2' },
    { img: thumb3, alt: 'Uni-Pak II product view 3' },
    { img: thumb4, alt: 'Uni-Pak II product view 4' },
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
      title: 'Tube-cut sleeve',
      body: 'The bottom of the sleeve is straight-cut and sits within the track of the pallet rather than extending into the pallet leg, increasing the internal dimensions (ID) in both length and width and providing additional usable space within the container.',
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
      title: 'Tridigidous slide lock',
      body: 'Like the Uni-Pak slide-lock, the Tri-Digitous® slide-lock is integrated into the system and secures the sleeve within the track of the pallet and cover, locking the components into a single, stable unit. This configuration features a larger finger pull used to engage and disengage the lock, supporting fast, tool-free assembly and disassembly.',
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
      tag: 'Tube-cut (straight sleeve)',
      img: featTubeCut,
      desc: 'A sleeve design with a straight-cut bottom edge that interfaces directly with the pallet track.',
    },
  ],
  attributesAutoplayMs: 6000,
  optionCols: [
    ['Color', 'Stripe', 'Custom Branding', 'Pockets for Barcoding and RFID'],
    ['Hot Stamping', 'Footprint', 'Drain Holes', 'Steel Reinforcement'],
  ],
  systemDataRows: [
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_30x29_v01.pdf'),
      outside: { imperial: '30" x 29"', metric: '762 x 737 mm' },
      inside: { imperial: '27.315" x 26.315"', metric: '694 x 668 mm' },
      cover: { imperial: '6.1 lbs.', metric: '2.77 kg' },
      pallet: { imperial: '9.16 lbs.', metric: '4.15 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_37x37_v01.pdf'),
      outside: { imperial: '37" x 37"', metric: '940 x 940 mm' },
      inside: { imperial: '34.315" x 34.315"', metric: '872 x 872 mm' },
      cover: { imperial: '9.6 lbs.', metric: '4.35 kg' },
      pallet: { imperial: '14.41 lbs.', metric: '6.54 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_39-375x39-375_v011.pdf'),
      outside: { imperial: '39.375" x 39.375"', metric: '1000 x 1000 mm' },
      inside: { imperial: '36.68" x 36.68"', metric: '932 x 932 mm' },
      cover: { imperial: '10.9 lbs.', metric: '4.94 kg' },
      pallet: { imperial: '16.32 lbs.', metric: '7.40 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_48x40_v01.pdf'),
      outside: { imperial: '40" x 48"', metric: '1016 x 1219 mm' },
      inside: { imperial: '45.48" x 37.48"', metric: '1155 x 952 mm' },
      cover: { imperial: '13.34 lbs.', metric: '6.05 kg' },
      pallet: { imperial: '21.27 lbs.', metric: '9.65 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_49-187x41-438_v01.pdf'),
      outside: { imperial: '49.187" x 41.438"', metric: '1249 x 1053 mm' },
      inside: { imperial: '46.71" x 38.96"', metric: '1186 x 990 mm' },
      cover: { imperial: '14.3 lbs.', metric: '6.49 kg' },
      pallet: { imperial: '21.45 lbs.', metric: '9.73 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_48x45_v01.pdf'),
      outside: { imperial: '45" x 48"', metric: '1143 x 1219 mm' },
      inside: { imperial: '45.79" x 42.79"', metric: '1163 x 1087 mm' },
      cover: { imperial: '15.5 lbs.', metric: '7.03 kg' },
      pallet: { imperial: '23 lbs.', metric: '10.43 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_48-75x48-25_v01.pdf'),
      outside: { imperial: '48.75" x 48.25"', metric: '1238 x 1226 mm' },
      inside: { imperial: '46.471" x 45.965"', metric: '1180 x 1168 mm' },
      cover: { imperial: '17.37 lbs.', metric: '7.88 kg' },
      pallet: { imperial: '25.31 lbs.', metric: '11.48 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_52-5x48-75_v01.pdf'),
      outside: { imperial: '52.5" x 48.75"', metric: '1334 x 1238 mm' },
      inside: { imperial: '50.329" x 46.579"', metric: '1278 x 1183 mm' },
      cover: { imperial: '17.96 lbs.', metric: '8.15 kg' },
      pallet: { imperial: '26.94 lbs.', metric: '12.22 kg' },
    },
    {
      highlight: true,
      outside: { imperial: '63" x 48.5"', metric: '1600 x 1232 mm' },
      inside: { imperial: '60.79" x 46.29"', metric: '1544 x 1176 mm' },
      cover: { imperial: '21.5 lbs.', metric: '9.75 kg' },
      pallet: { imperial: '32.5 lbs.', metric: '14.74 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_70x48-5_v01.pdf'),
      outside: { imperial: '70" x 48.5"', metric: '1778 x 1232 mm' },
      inside: { imperial: '67.315" x 46.29"', metric: '1710 x 1176 mm' },
      cover: { imperial: '23.8 lbs.', metric: '10.80 kg' },
      pallet: { imperial: '35.75 lbs.', metric: '16.22 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_41-25x39-75_v01.pdf'),
      outside: { imperial: '41.25" x 39.75"', metric: '1048 x 1010 mm' },
      inside: { imperial: '38.616" x 37.116"', metric: '981 x 943 mm' },
      cover: { imperial: '9.2 lbs.', metric: '4.17 kg' },
      pallet: { imperial: '16.5 lbs.', metric: '7.48 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_48-062x48-062_v01.pdf'),
      outside: { imperial: '48.062" x 48.062"', metric: '1221 x 1221 mm' },
      inside: { imperial: '45.672" x 45.672"', metric: '1160 x 1160 mm' },
      cover: { imperial: '16.21 lbs.', metric: '7.35 kg' },
      pallet: { imperial: '24.5 lbs.', metric: '11.11 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_90x48-75_v01.pdf'),
      outside: { imperial: '90" x 48.75"', metric: '2286 x 1238 mm' },
      inside: { imperial: '87.7" x 46.45"', metric: '2228 x 1180 mm' },
      cover: { imperial: '30.79 lbs.', metric: '13.97 kg' },
      pallet: { imperial: '46.2 lbs.', metric: '20.96 kg' },
    },
    {
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_975x770_v01.pdf'),
      outside: { imperial: '975mm x 770mm', metric: '975 x 770 mm' },
      inside: { imperial: '36.91" x 28.84"', metric: '938 x 733 mm' },
      cover: { imperial: '10.74 lbs.', metric: '4.87 kg' },
      pallet: { imperial: '13.9 lbs.', metric: '6.30 kg' },
    },
    {
      highlight: true,
      sheetHref: tearSheet('Shuert_TearSheet_Uni-PakII_1150x975_v01.pdf'),
      outside: { imperial: '1150mm x 975mm', metric: '1150 x 975 mm' },
      inside: { imperial: '43.725" x 36.84"', metric: '1111 x 936 mm' },
      cover: { imperial: '16.75 lbs.', metric: '7.60 kg' },
      pallet: { imperial: '20.43 lbs.', metric: '9.27 kg' },
    },
    {
      outside: { imperial: '2250mm x 1230mm', metric: '2250 x 1230 mm' },
      inside: { imperial: '86.285" x 46.128"', metric: '2192 x 1172 mm' },
      cover: { imperial: '30.61 lbs.', metric: '13.88 kg' },
      pallet: { imperial: '45.92 lbs.', metric: '20.83 kg' },
    },
  ],
  related: [
    {
      name: 'uni-pak',
      size: sizeRange,
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
    // Drop in an mp4 import with `?url` when ready
    poster: videoPoster,
    label: 'Uni-Pak II product video',
  },
  technicalSheetHref: '#',
  requestQuoteHref: '#request-a-quote',
};
