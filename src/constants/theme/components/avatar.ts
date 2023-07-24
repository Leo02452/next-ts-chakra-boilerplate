import { ComponentStyleConfig } from '@chakra-ui/react';

const Avatar: ComponentStyleConfig = {
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      container: {
        h: '10',
        w: '10',
      },
    },
    lg: {
      container: {
        h: '12',
        w: '12',
      },
    },
  },
  baseStyle: {
    container: {
      borderRadius: 'lg',
      bg: 'secondary.500',
      color: 'white',
      img: {
        borderRadius: 'lg',
      },
    },
  },
};

export default Avatar;
