import { useFieldArray, useFormContext } from 'react-hook-form';

import { UilTrashAlt } from '@iconscout/react-unicons';

import {
  Button,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';

export type FieldArrayProps = {
  label: string;
  name: string;
  render: (field: Record<'id', string>, index?: number) => React.ReactNode;
};

function FieldArray({ name, render, label }: FieldArrayProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <Stack spacing="3">
      <Text fontWeight="medium" fontSize="sm" color="gray.700">
        {label}
      </Text>
      {fields.map((field, index) => (
        <HStack spacing="3" align="end">
          {render(field, index)}
          <IconButton
            aria-label={`Excluir campo numero: ${index}`}
            variant="ghost"
            colorScheme="blackAlpha"
            onClick={() => {
              remove(index);
            }}
          >
            <Icon as={UilTrashAlt} w="6" h="6" color="red.300" />
          </IconButton>
        </HStack>
      ))}
      <Button
        onClick={() => append('')}
        variant="outline"
        colorScheme="gray"
        borderColor="gray.300"
        color="gray.400"
      >
        Novo Campo
      </Button>
    </Stack>
  );
}

export default FieldArray;
