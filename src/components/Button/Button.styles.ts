import { styled } from '../../stitches.config';

export const ButtonContainer = styled('button', {
  padding: '.5rem 1rem',
  border: 'none',
  borderRadius: '3px',
  color: 'white',

  variants: {
    color: {
      blue: {
        background: "$blue50",
      },
      red: {
        background: "$red50",
      },
      yellow: {
        background: "$yellow50",
        color: "black"
      }
    }
  }
});