import { chakra } from '@chakra-ui/react';

const Avatar = chakra('img', {
  base: {
    borderRadius: '100%',
    width: '2rem',
    height: '2rem',
    objectFit: 'cover',
  },
});

export default Avatar;
