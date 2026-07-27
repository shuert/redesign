import type { ImageMetadata } from 'astro';

/** Dual-unit display strings for imperial ↔ metric toggle */
export type UnitPair = {
  imperial: string;
  metric: string;
};

export type ProductThumbnail = {
  img: ImageMetadata;
  alt: string;
};

/** Plain accordion row */
export type AccordionBodyItem = {
  title: string;
  body: string;
};

/** Accordion row with a unit-swappable density (or similar) span */
export type AccordionDensityItem = {
  title: string;
  bodyBefore: string;
  densityImperial: string;
  densityMetric: string;
  bodyAfter: string;
};

export type AccordionItem = AccordionBodyItem | AccordionDensityItem;

export type AttributeSlide = {
  tag: string;
  img: ImageMetadata;
  desc: string;
};

export type SystemDataRow = {
  outside: UnitPair;
  inside: UnitPair;
  cover: UnitPair;
  pallet: UnitPair;
  highlight?: boolean;
};

export type RelatedProduct = {
  name: string;
  size: UnitPair;
  img: ImageMetadata;
  href: string;
};

/** Optional full-bleed video band (some product pages only) */
export type ProductVideo = {
  /** Video file URL (e.g. import with `?url`) */
  src: string;
  poster: ImageMetadata;
  label?: string;
};

export type ProductPageData = {
  /** `<title>` / layout title */
  title: string;
  /** Lowercase display name in hero, e.g. `bulk-pak` */
  name: string;
  /** Show ® mark next to name */
  showRegMark?: boolean;

  crumbLabel: string;
  /** When set, shows dims + Imperial/Metric toggle in the hero */
  headerDims?: UnitPair;
  headerBg: ImageMetadata;

  aboutEyebrow: string;
  aboutText: string;

  thumbnails: ProductThumbnail[];
  accordionItems: AccordionItem[];
  attributes: AttributeSlide[];
  attributesAutoplayMs?: number;

  optionCols: readonly (readonly string[])[];
  /** When set, renders the System Data table section */
  systemDataRows?: SystemDataRow[];
  related: RelatedProduct[];

  quoteTitle: string;
  quoteImage: ImageMetadata;

  /** When set, renders a playable video section after Attributes */
  video?: ProductVideo;

  technicalSheetHref?: string;
  requestQuoteHref?: string;
};
