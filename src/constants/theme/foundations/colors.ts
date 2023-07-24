import { lighten, darken } from 'polished';

export const PrimaryColor = '#0782B1';

export const GreenColor = '#32D255';
export const RedColor = '#F01010';

const Colors = {
  black: '#111210',
  primary: {
    100: lighten(0.1, PrimaryColor),
    200: lighten(0.75, PrimaryColor),
    300: lighten(0.05, PrimaryColor),
    400: lighten(0.025, PrimaryColor),
    500: PrimaryColor,
    600: darken(0.05, PrimaryColor),
    700: darken(0.1, PrimaryColor),
    800: darken(0.15, PrimaryColor),
  },
  blue: {
    100: lighten(0.4, PrimaryColor),
    200: lighten(0.3, PrimaryColor),
    300: lighten(0.2, PrimaryColor),
    400: lighten(0.1, PrimaryColor),
    500: PrimaryColor,
    600: darken(0.1, PrimaryColor),
    700: darken(0.2, PrimaryColor),
    800: darken(0.3, PrimaryColor),
  },
  green: {
    100: lighten(0.4, GreenColor),
    200: lighten(0.3, GreenColor),
    300: lighten(0.2, GreenColor),
    400: lighten(0.1, GreenColor),
    500: GreenColor,
    600: darken(0.1, GreenColor),
    700: darken(0.2, GreenColor),
    800: darken(0.3, GreenColor),
  },
  red: {
    100: lighten(0.4, RedColor),
    200: lighten(0.3, RedColor),
    300: lighten(0.2, RedColor),
    400: lighten(0.1, RedColor),
    500: RedColor,
    600: darken(0.1, RedColor),
    700: darken(0.2, RedColor),
    800: darken(0.3, RedColor),
  },
  gray: {
    100: '#EDF1F5',
    200: '#F6F9FE',
    300: '#F0F0F0',
    400: '#98A1B0',
    800: '#000032',
  },
} as const;

export default Colors;
