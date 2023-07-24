import { useController, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  TextareaProps,
  InputGroup,
  Textarea,
} from '@chakra-ui/react';

export type TextAreaProps = TextareaProps &
  FormControlProps & {
    name: string;
    label: string;
    description?: string;
  };

function TextArea(props: TextAreaProps) {
  const { name, label, description, ...chakraProps } = props;
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
      <FormLabel as="legend" fontSize="sm" color="gray.600" fontWeight="medium">
        {label}
      </FormLabel>
      <InputGroup>
        <Textarea {...field} {...chakraProps} />
      </InputGroup>
      {description && <FormHelperText>{description}</FormHelperText>}
      {messageError && <FormErrorMessage>{messageError}</FormErrorMessage>}
    </FormControl>
  );
}
export default TextArea;
