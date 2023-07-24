import { ChangeEvent, useCallback, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import RInputMask from 'react-input-mask';

import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';

import getInputType from '@app/utils/get-input-type.util';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBoolean,
  Icon as ChakraIcon,
  Input,
} from '@chakra-ui/react';

import { MaskedInputProps } from './masked-input.types';

function MaskedInput(props: MaskedInputProps) {
  const {
    name,
    isObscure = false,
    label,
    description,
    icon: Icon,
    removeChars: replace,
    ...chakraProps
  } = props;

  const [visible, { toggle }] = useBoolean();

  const { control } = useFormContext();

  const controllerState = useController({
    name,
    control,
    defaultValue: '',
  });

  const { field, fieldState, formState } = controllerState;
  const messageError = fieldState.error?.message;
  const inputType = useMemo(
    () => getInputType(isObscure, visible, chakraProps.type),
    [chakraProps.type, isObscure, visible],
  );

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as string;
      if (replace) {
        const regex = new RegExp(replace, 'g');
        return field.onChange(value.replace(regex, ''));
      }
      return field.onChange(value);
    },
    [field, replace],
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
        <Input
          as={RInputMask}
          {...field}
          {...chakraProps}
          onChange={handleChangeInput}
          type={inputType}
          maskChar={null}
        />
        {isObscure && (
          <InputRightElement>
            <IconButton
              variant="ghost"
              aria-label={
                visible ? 'Tornar a senha invisível' : 'Tornar a senha visível'
              }
              onClick={toggle}
            >
              {visible ? <UilEyeSlash /> : <UilEye />}
            </IconButton>
          </InputRightElement>
        )}
      </InputGroup>
      {description && <FormHelperText>{description}</FormHelperText>}
      {messageError && <FormErrorMessage>{messageError}</FormErrorMessage>}
    </FormControl>
  );
}
export default MaskedInput;
