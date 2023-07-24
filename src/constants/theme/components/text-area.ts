import { ComponentStyleConfig } from '@chakra-ui/react';

const Textarea: ComponentStyleConfig = {
  variants: {
    solid: {
      borderRadius: 'lg',
      _focus: {
        shadow: 'outline',
      },
      _disabled: {
        bg: 'white',
        opacity: 0.65,
      },
    },
    outline: {
      borderRadius: 'lg',
      borderColor: 'gray.300',
      _placeholder: {
        fontWeight: 'normal',
      },
      ':focus': {
        borderColor: 'primary.500',
        boxShadow: 'none',
        shadow: 'outline',
      },
    },
  },
};

export default Textarea;
