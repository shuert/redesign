# Design system

Tokens and classes live in `web/src/styles/global.css`. Sizes are rem-based. Headings scale with `clamp()` from a mobile minimum to a desktop maximum. Paragraph sizes stay fixed.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--c-black` | `#000` | Text, borders |
| `--c-blackbg` | `#1e1e1e` | Dark background |
| `--c-white` | `#fff` | Light text and fills |
| `--c-red` | `#D12539` | Accent |
| `--c-sec-1` | `#F7F5F2` | Primary surface |
| `--c-sec-2` | `#EFECE7` | Secondary surface |
| `--c-sec-3` | `#D4CEC6` | Tertiary surface, disabled |

Utility classes: `.bg-black`, `.bg-red`, `.bg-sec` (`--c-sec-1`), `.text-white`, `.text-red`.

The page background is `--c-black`. Default text color is `--c-black`.

## Type

**Roobert** (`--ff-r`) is the text face. Loaded weights: Light 300 (`--w-light`), Medium 500 (`--w-medium`).

**Shentox** (`--ff-s`) is the display and label face. Loaded weights: Semibold 600 (`--w-semibold`), Bold 700 (`--w-bold`).

### Line height

| Token | Value |
| --- | --- |
| `--lh-tight` | 1.1 |
| `--lh-normal` | 1.4 |
| `--lh-loose` | 1.6 |

### Headings

Roobert Light. H1–H3 use tight leading. H4–H6 use normal leading. The `clamp()` runs from the mobile minimum to the desktop maximum.

| Class | Token | Mobile | Desktop |
| --- | --- | --- | --- |
| `.h1` | `--h1` | 32px | 65px |
| `.h2` | `--h2` | 28px | 48px |
| `.h3` | `--h3` | 24px | 40px |
| `.h4` | `--h4` | 22px | 30px |
| `.h5` | `--h5` | 20px | 25px |
| `.h6` | `--h6` | 20px | 20px, fixed |

### Paragraphs

Roobert Light. These do not change at the mobile breakpoint.

| Class | Token | Size | Leading |
| --- | --- | --- | --- |
| `.p` | `--p` | 16px | loose (1.6) |
| `.p-lg` | `--p-lg` | 20px | loose (1.6) |
| `.p-sm` | `--p-sm` | 12px | normal (1.4) |
| `.p-xs` | `--p-xs` | 10px | normal (1.4) |

Body copy is `.p`: Roobert Light, 16px, loose leading.

### Detail

Shentox Semibold, lowercase.

| Class | Token | Mobile | Desktop | Leading |
| --- | --- | --- | --- | --- |
| `.detail-xl` | `--detail-xl` | 40px | 110px | 0.91 |
| `.detail-lg` | `--detail-lg` | 40px | 100px | tight (1.1) |
| `.detail-md` | `--detail-md` | 24px | 30px | tight (1.1) |

### Labels

`.label` is Shentox Bold, 14px, line-height 1, uppercase, letter-spacing `0.11em`.

## Radius

| Token | Value |
| --- | --- |
| `--r-btn` | 8px |
| `--r-img` | 14px |

`.img` applies the image radius and hides overflow.

## Buttons

Base `.button` is Roobert Medium, 16px, line-height 1, padding 15px × 18px, radius 8px.

| Class | Fill | Text | Border | Padding |
| --- | --- | --- | --- | --- |
| `.button-primary` | white | black | black | 15px × 18px |
| `.button-secondary` | white | black | black | 6px × 18px |
| `.button-glass` | `rgb(44, 44, 44)` | white | none | 15px × 18px |
| `.button-disabled` | `--c-sec-3` | white | — | 70% opacity, no pointer |

Primary, secondary, and glass set line-height to 20px. Glass uses `normal`.

## Grid

| | Desktop | Tablet, ≤ 1024px | Mobile, ≤ 768px |
| --- | --- | --- | --- |
| Breakpoint | — | `max-width: 64rem` | `max-width: 48rem` |
| Columns | 12 | 8 | 4 |
| Margin | 65px | 32px | 20px |
| Gutter | 20px | 20px | 16px |

`.container` is full width with the page margin as inline padding. `.page-grid` is a grid of `--grid-cols` with the gutter as the gap. Column spans are `.col-span-1` through `.col-span-12`, plus `.col-full`.

There is no global type step-down at the mobile breakpoint. Only the grid columns, margin, and gutter change. Heading minimums come from `clamp()`.
