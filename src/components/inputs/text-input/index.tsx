import { useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';

import getInputType from '@app/utils/get-input-type.util';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useBoolean,
  Icon as ChakraIcon,
  As,
} from '@chakra-ui/react';

export type TextInputProps = InputProps &
  FormControlProps & {
    name: string;
    label?: string;
    description?: string;
    isObscure?: boolean;
    icon?: As<any>;
  };

function TextInput(props: TextInputProps) {
  const {
    name,
    isObscure = false,
    label,
    description,
    icon: Icon,
    ...chakraProps
  } = props;

  const [isVisible, { toggle }] = useBoolean();

  const { control } = useFormContext();

  const controllerState = useController({ name, control });
  const { field, fieldState, formState } = controllerState;
  const messageError = fieldState.error?.message;

  const inputType = useMemo(
    () => getInputType(isObscure, isVisible, chakraProps.type),
    [chakraProps.type, isObscure, isVisible],
  );

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
          opacity={chakraProps.isDisabled || chakraProps.isReadOnly ? 0.75 : 1}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {Icon && (
          <InputLeftElement>
            <ChakraIcon as={Icon} color="gray.300" w="6" h="6" />
          </InputLeftElement>
        )}
        <Input {...field} {...chakraProps} type={inputType} />
        {isObscure && (
          <InputRightElement>
            <IconButton
              variant="ghost"
              aria-label={
                isVisible
                  ? 'Tornar a senha invisível'
                  : 'Tornar a senha visível'
              }
              onClick={toggle}
            >
              {isVisible ? <UilEyeSlash /> : <UilEye />}
            </IconButton>
          </InputRightElement>
        )}
      </InputGroup>
      {description && <FormHelperText>{description}</FormHelperText>}
      {messageError && <FormErrorMessage>{messageError}</FormErrorMessage>}
    </FormControl>
  );
}
export default TextInput;
