import { ComponentStyleConfig } from '@chakra-ui/react';

const Heading: ComponentStyleConfig = {
  defaultProps: {
    size: 'lg',
  },
  sizes: {
    lg: {
      fontSize: '2xl',
    },
  },
  baseStyle: {
    fontWeight: 'medium',
  },
};

export default Heading;
