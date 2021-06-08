import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    fonts: {
      sans: 'Ubuntu, sans-serif',
    },
    colors: {
      blue50: '#7F8DE0',
      red50: '#FE654D',
      yellow50: '#FFE551',
      black50: '#505050',
      gray30: '#D9D9D9'
    },
    fontSizes: {
      1: '0.75rem',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '2rem',
      8: '2.25rem',
      9: '3rem'
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '2rem'
    }
  }
});