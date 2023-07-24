import { ComponentStyleConfig } from '@chakra-ui/react';

const Link: ComponentStyleConfig = {
  defaultProps: {
    variant: 'colored',
    colorScheme: 'black',
  },
  variants: {
    colored: ({ colorScheme }) => ({
      color: `${colorScheme}.500`,
    }),
  },
};

export default Link;
