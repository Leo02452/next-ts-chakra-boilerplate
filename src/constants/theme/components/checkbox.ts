import { ComponentStyleConfig } from '@chakra-ui/react';

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      borderWidth: '1px',
      borderColor: 'gray.300',
      _focus: {
        shadow: 'outline',
        borderColor: 'primary.500',
      },
      _checked: {
        bg: 'primary.500',
        borderColor: 'primary.500',
      },
      _disabled: {
        bg: 'white',
        opacity: 0.65,
      },
    },
  },
};

export default Checkbox;
