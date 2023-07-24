import { ComponentStyleConfig } from '@chakra-ui/react';

const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline',
    colorScheme: 'primary',
  },
  variants: {
    outline: () => ({
      field: {
        borderWidth: '1px',
        borderColor: 'gray.300',
        _focus: {
          shadow: 'outline',
          borderColor: 'primary.500',
        },
        _disabled: {
          bg: 'white',
          opacity: 0.65,
        },
        '::placeholder': {
          color: 'gray.400',
        },
      },
    }),
    solid: () => ({
      field: {
        _disabled: {
          bg: 'white',
          opacity: 0.65,
        },
      },
    }),
  },
};

export default Input;
