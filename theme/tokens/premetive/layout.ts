export const appSpacing = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  96: 96,
  120: 120,
  200: 200,
  250: 250,

  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const appBorderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  xxxl: 24,
  full: 200,

  card: 12,
  button: 8,
  chip: 200,
  input: 8,
  sheet: 24,
} as const;

export const appBorderWidth = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  mid: 1.5,
  base: 2,
  thick: 4,
  heavy: 8,
} as const;

export const appIconSize = {
  sm: 16,
  md: 20,
  normal: 24,
  lg: 32,
} as const;

export const appLayout = {
  screenWidth: 375,
  screenHeight: 812,
  maxContentWidth: 480,
} as const;
