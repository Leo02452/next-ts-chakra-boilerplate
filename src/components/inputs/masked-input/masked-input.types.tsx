import { Props as RInputMaskProps } from 'react-input-mask';

import { FormControlProps, As, InputProps } from '@chakra-ui/react';

export type MaskedInputProps = InputProps &
  RInputMaskProps &
  FormControlProps & {
    name: string;
    label?: string;
    description?: string;
    isObscure?: boolean;
    removeChars?: RegExp | string;
    icon?: As<any>;
  };
