import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  InputGroup,
} from '@chakra-ui/react';
import { Props, Select } from 'chakra-react-select';

export type SelectInputProps = Props & {
  label: string;
  variant?: 'solid' | 'outline';
  name: string;
  onChange?: (value: string) => void;
};

export type SelectOption = {
  label: string;
  value: string;
};

function SelectInput({ variant = 'solid', name, ...props }: SelectInputProps) {
  const { control } = useFormContext();

  const controllerState = useController({ name, control, defaultValue: '' });
  const { field, fieldState, formState } = controllerState;
  const messageError = fieldState.error?.message;

  const [value, setValue] = useState(() => {
    if (field.value && props.options) {
      const options = props.options as SelectOption[];
      return options.find(
        ({ value: optionValue }) => optionValue === field.value,
      );
    }
    return undefined;
  });

  useEffect(() => {
    if (field.value && props.options) {
      const options = props.options as SelectOption[];
      const optionSelected = options.find(
        ({ value: optionValue }) => optionValue === field.value,
      );
      setValue(optionSelected || undefined);
    } else {
      setValue(undefined);
    }
  }, [field.value, props.options]);

  return (
    <FormControl as="fieldset" w="full" isInvalid={!!messageError}>
      <FormLabel as="legend" fontSize="sm" color="gray.600" fontWeight="medium">
        {props.label}
      </FormLabel>
      <InputGroup w="full">
        <Select
          isDisabled={formState.isSubmitting}
          noOptionsMessage={({ inputValue }) => inputValue || 'Sem opções'}
          selectedOptionColor="primary"
          isSearchable
          chakraStyles={{
            control: (provided) => ({
              ...provided,
              background: 'white',
              borderRadius: 'lg',
              borderWidth: variant === 'outline' && '1px',
              borderStyle: variant === 'outline' && 'solid',
              height: '8',
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: 'none',
            }),
            placeholder: (provided) => ({
              ...provided,
              color: 'gray.500',
            }),
            container: (provided) => ({
              ...provided,
              background: 'white',
              borderRadius: 'lg',
              width: '100%',
            }),
            downChevron: (provided) => ({
              ...provided,
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999,
            }),
          }}
          name={name}
          ref={field.ref}
          onChange={(option) => {
            if (!option) {
              field.onChange(undefined);
              return;
            }
            field.onChange((option as SelectOption).value);
          }}
          onBlur={field.onBlur}
          value={value}
          {...props}
          tagVariant="solid"
          colorScheme="primary"
        />
      </InputGroup>
      <FormErrorMessage>
        <FormErrorIcon />
        {messageError}
      </FormErrorMessage>
    </FormControl>
  );
}

export default SelectInput;
