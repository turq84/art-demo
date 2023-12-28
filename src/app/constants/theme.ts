import { css } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '650px',
  tablet: '768px',
  laptopXS: '950px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px',
};

const media = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  mobileXL: `@media (max-width: ${size.mobileXL})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptopXS: `@media (max-width: ${size.laptopXS})`,
  laptop: `@media (max-width: ${size.laptop})`,
  laptopM: `@media (max-width: ${size.laptopM})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  desktop: `@media (max-width: ${size.desktop})`,
};

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#666',
    tietary: '#999',
    border: '#D3D9E3',
    borderMuted: 'rgba(211, 217, 227, 0.5)',
    white: '#FFFFFF',
  },
  radii: {
    none: '0px',
    xxsmall: '2px',
    xsmall: '4px',
    small: '8px',
    normal: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
  },
  sizing: {
    none: '0px',
    xxsmall: '2px',
    xsmall: '4px',
    small: '8px',
    normal: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
    xxxlarge: '104px',
    xxxxlarge: '150px',
    icon: {
      small: '14px',
      normal: '24px',
      large: '32px',
    },
  },
  spacing: {
    none: '0px',
    xxsmall: '2px',
    xsmall: '4px',
    small: '8px',
    normal: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
    xxxlarge: '104px',
    xxxxlarge: '150px',
  },
  shadows: {
    small: css`
      box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
    `,
    medium: css`
      box-shadow: 0 2px 16px rgb(0 0 0 / 12%);
    `,
    large: css`
      box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    `,
  },
  button: {
    primary: css`
      color: #ffffff;
      background-color: #000000;
      border-radius: 24px;
      border: none;
      font-family: 'GTWalsheim-Medium', sans-serif;
      line-height: calc(1em + 0.725rem);
      text-transform: uppercase;
      letter-spacing: 2px;
      width: max-content;
      min-width: 100px;
      height: fit-content;
      text-align: center;
      cursor: pointer;
      outline: 0;
      transition: all 0.15s linear 0s;

      &:hover {
        background-color: #323654;
      }

      &:focus {
        background-color: #323654;
      }

      &:disabled {
        background-color: rgba(242, 244, 248, 1);
        color: #6d7186;
        cursor: not-allowed;
      }
    `,
    secondary: css`
      color: #000000;
      background-color: #ffffff;
      border-radius: 24px;
      border: 2px solid #000000;
      font-family: 'GTWalsheim-Medium', sans-serif;
      line-height: calc(1em + 0.725rem);
      text-transform: uppercase;
      letter-spacing: 2px;
      width: max-content;
      min-width: 100px;
      height: fit-content;
      text-align: center;
      cursor: pointer;
      outline: 0;
      transition: all 0.15s linear 0s;

      &:hover {
        background-color: rgba(242, 244, 248, 0.7);
      }

      &:focus {
        background-color: rgba(242, 244, 248, 0.5);
      }

      &:disabled {
        background-color: rgba(242, 244, 248, 1);
        color: #6d7186;
        cursor: not-allowed;
      }
    `,
  },
  media,
  typography: {
    'heading-1': css`
      font-size: 60px;
      line-height: 1.25;
      font-family: 'GTWalsheim-Medium', sans-serif;

      ${media.laptop} {
        font-size: 3rem;
      }

      ${media.tablet} {
        font-size: 2.625rem;
      }

      ${media.mobileS} {
        font-size: 2rem;
      }
    `,
    'heading-2': css`
      font-size: 48px;
      line-height: 1.25;
      font-family: 'GTWalsheim-Medium', sans-serif;

      ${media.laptop} {
        font-size: 3rem;
      }

      ${media.tablet} {
        font-size: 2.2rem;
      }

      ${media.mobileS} {
        font-size: 1.8rem;
      }
    `,
    'heading-3': css`
      font-size: 32px;
      line-height: 1.25;
      font-family: 'GTWalsheim-Medium', sans-serif;

      ${media.laptop} {
        font-size: 3rem;
      }

      ${media.tablet} {
        font-size: 1.5rem;
      }

      ${media.mobileS} {
        font-size: 1.3rem;
      }
    `,

    'heading-4': css`
      font-size: 24px;
      line-height: 1.25;
      font-family: 'GTWalsheim-Medium', sans-serif;

      ${media.laptop} {
        font-size: 24px;
      }

      ${media.tablet} {
        font-size: 24px;
      }
    `,
    'heading-5': css`
      font-size: 18px;
      line-height: 1.25;
      font-family: 'GTWalsheim-Medium', sans-serif;
    `,
    subtitle: css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 24px;
      line-height: calc(1em + 0.725rem);

      ${media.tablet} {
        font-size: 20px;
      }
    `,
    body: css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 18px;
      line-height: calc(1em + 0.725rem);

      ${media.tablet} {
        font-size: 18px;
      }
    `,
    'body-big': css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 24px;
      line-height: calc(1em + 0.725rem);
    `,
    'body-big-bold': css`
      font-family: 'GTWalsheim-Medium', sans-serif;
      font-size: 24px;
      line-height: calc(1em + 0.725rem);
    `,
    'body-bold': css`
      font-family: 'GTWalsheim-Medium', sans-serif;
      font-size: 18px;
      line-height: calc(1em + 0.725rem);
    `,
    'body-small': css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 14px;
      line-height: calc(1em + 0.725rem);
    `,
    'body-medium': css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 16px;
      line-height: calc(1em + 0.725rem);
    `,
    caption: css`
      font-family: 'GTWalsheim-Medium', sans-serif;
      font-size: 12px;
      line-height: 1.4;
      text-transform: uppercase;
    `,
    error: css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 14px;
      line-height: calc(1em + 0.725rem);
      color: rgba(255, 51, 102, 0.8);
    `,
    label: css`
      font-family: 'GTWalsheim-Medium', sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 2;
      letter-spacing: 2px;
    `,
    action: css`
      font-family: 'GTWalsheim-Regular', sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.4;
    `,
  },
};

export type Theme = typeof theme;
export type Breakpoint = keyof Theme['media'];
export type Color = keyof Theme['colors'];
export type Sizing = keyof Theme['sizing'];
export type SpacingUnit = keyof Theme['spacing'];
export type Typography = keyof Theme['typography'];
export default theme;
