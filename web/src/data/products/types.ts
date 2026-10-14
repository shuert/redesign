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
  /** Tear-sheet PDF. Rows without a sheet omit the download icon when any row in the table has one. */
  sheetHref?: string;
};

/** Cell may be a fixed string or an imperial/metric pair */
export type SystemDataCell = string | UnitPair;

export type SystemDataFlexibleRow = {
  cells: readonly SystemDataCell[];
  highlight?: boolean;
  /** Aria / download label; defaults to first cell string */
  downloadLabel?: string;
};

/** Flexible multi-column System Data table (e.g. Pro-Pak) */
export type SystemDataTable = {
  columns: readonly string[];
  rows: readonly SystemDataFlexibleRow[];
  /** Download icons in the leading column. Defaults to true. */
  showDownloads?: boolean;
};

export type RelatedImageCrop = {
  width: string;
  height: string;
  left: string;
  top: string;
};

export type RelatedProduct = {
  name: string;
  size: UnitPair;
  img: ImageMetadata;
  href: string;
  /** Optional Figma object-position crop for the related card image */
  crop?: RelatedImageCrop;
};

/** Optional full-bleed video band (some product pages only) */
export type ProductVideo = {
  /** Video file URL (e.g. import with `?url`). Omit until the file is ready. */
  src?: string;
  poster: ImageMetadata;
  label?: string;
};

/** Customer-story card in the optional news band */
export type ProductStory = {
  source: string;
  body: string;
  href: string;
  img: ImageMetadata;
  crop?: RelatedImageCrop;
};

export type ProductStories = {
  eyebrow: string;
  title: string;
  articles: readonly ProductStory[];
};

export type ProductPageData = {
  /** `<title>` / layout title */
  title: string;
  /** Lowercase display name in hero, e.g. `bulk-pak` */
  name: string;
  /** When set, the hero name breaks across these lines (reg mark stays on the first line) */
  nameLines?: readonly string[];
  /** Show ® mark next to name */
  showRegMark?: boolean;
  /** Overrides the Features section eyebrow. Defaults to PRODUCT */
  featuresEyebrow?: string;
  /** Overrides the attributes carousel eyebrow. Defaults to PRODUCT */
  attributesEyebrow?: string;
  /** Overrides the attributes carousel title. Defaults to Attributes */
  attributesTitle?: string;
  /** Overrides the options section eyebrow. Defaults to OPTIONS */
  optionsEyebrow?: string;

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
  /** When set, renders the Bulk-Pak-style 4-column System Data table */
  systemDataRows?: SystemDataRow[];
  /** When set, renders a flexible multi-column System Data table (e.g. Pro-Pak) */
  systemData?: SystemDataTable;
  /** News band between System Data and related products */
  stories?: ProductStories;
  related: RelatedProduct[];

  quoteTitle: string;
  quoteImage: ImageMetadata;

  /** When set, renders a playable video section after Attributes */
  video?: ProductVideo;

  technicalSheetHref?: string;
  requestQuoteHref?: string;
};
