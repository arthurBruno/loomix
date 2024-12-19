import { chakra } from '@chakra-ui/react';

const Card = chakra('div', {
  base: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.1)',
    transition: '0.2s',
  },
  variants: {
    variant: {
      button: {
        '&:hover': {
          backgroundColor: 'colorPalette.subtle',
          cursor: 'pointer',
          transition: '0.2s',
        },
      },
    },
  },
});

export default Card;
