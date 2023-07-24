import { ComponentStyleConfig } from '@chakra-ui/react';

const Accordion: ComponentStyleConfig = {
  baseStyle: {
    container: {
      borderTopWidth: '1px',
      borderColor: 'inherit',
      _first: {
        borderTopWidth: '0px',
      },
      _last: {
        borderBottomWidth: '0px',
      },
      _expanded: {
        bg: 'black',
      },
    },
    button: {
      py: '2',
      px: '4',
      _expanded: {
        color: 'primary.500',
        fontWeight: 'bold',
      },
    },
  },
};

export default Accordion;
