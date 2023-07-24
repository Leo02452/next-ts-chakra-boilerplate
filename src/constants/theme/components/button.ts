import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: 'solid',
    colorScheme: 'primary',
  },
  variants: {
    ghost: {
      _active: {
        bg: 'gray.100',
      },
    },
  },
};

export default Button;
