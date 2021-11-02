import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const colors = {};

for (let i = 0; i <= 1000; i++) {
  colors[`color_${i}`] = `rgba(51, 105, 30, ${i / 1000})`;
}

const theme = createTheme({
  colors: {
    ...colors,
    mainBackground: 'rgba(51, 105, 30, 1)',
    cardPrimaryBackground: palette.purplePrimary,
    text: 'white',
  },
  spacing: {
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
