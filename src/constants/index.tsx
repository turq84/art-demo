export const MAX_CONTENT_WIDTH = '1300px';
export const MAX_COMPACT_CONTENT_WIDTH = '1100px';
export const MAX_TEXT_WIDTH = '70ch';
export const MOBILE_HEADER_HEIGHT = 50;
export const HEADER_HEIGHT = 75;

export const IS_BROWSER = typeof window !== 'undefined';
export const BROWSER_SUPPORT = {
  IntersectionObserver:
    IS_BROWSER &&
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype,
};

export const BREAKPOINTS = {
  sm: { min: 0, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: Infinity },
};

type ExtraBreakpoints = 'mdDown' | 'mdUp' | 'lgDown' | 'lgUp';
export type BreakpointKey = keyof typeof BREAKPOINTS | ExtraBreakpoints;
