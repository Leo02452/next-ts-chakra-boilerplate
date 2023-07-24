/* eslint-disable react/no-array-index-key */
import { useController, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  PinInput as ChakraPinInput,
  PinInputProps as ChakraPinInputProps,
  PinInputField,
  HStack,
} from '@chakra-ui/react';

export type PinInputProps = Omit<ChakraPinInputProps, 'children'> &
  FormControlProps & {
    name: string;
    label?: string;
    description?: string;
    length: number;
  };

function PinInput(props: PinInputProps) {
  const { name, label, description, length = 4, ...chakraProps } = props;

  const { control } = useFormContext();

  const controllerState = useController({ name, control });
  const { field, fieldState, formState } = controllerState;
  const messageError = fieldState.error?.message;

  return (
    <FormControl
      {...chakraProps}
      isInvalid={!!messageError}
      isReadOnly={formState.isSubmitting}
    >
      {label && (
        <FormLabel
          as="legend"
          fontSize="sm"
          color="gray.600"
          fontWeight="medium"
        >
          {label}
        </FormLabel>
      )}
      <HStack>
        <ChakraPinInput {...field} {...chakraProps}>
          {Array.from({ length }).map((_, index) => (
            <PinInputField key={`field_${index}`} borderColor="gray.300" />
          ))}
        </ChakraPinInput>
      </HStack>
      {description && <FormHelperText>{description}</FormHelperText>}
      {messageError && <FormErrorMessage>{messageError}</FormErrorMessage>}
    </FormControl>
  );
}
export default PinInput;
