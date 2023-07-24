import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Stack } from '@chakra-ui/react';

import SelectInput from '@app/components/inputs/select-input';
import TextInput from '@app/components/inputs/text-input';

import { AdminLoginFormID } from './admin-login.form.constants';
import {
  AdminLoginFormFields,
  AdminLoginFormProps,
} from './admin-login.form.types';
import AdminLoginFormValidationSchema from './admin-login.form.validation-schema';

function AdminLoginForm({ onSubmit }: AdminLoginFormProps) {
  const formProps = useForm<AdminLoginFormFields>({
    resolver: yupResolver(AdminLoginFormValidationSchema),
  });

  return (
    <FormProvider {...formProps}>
      <Stack
        as="form"
        id={AdminLoginFormID}
        onSubmit={formProps.handleSubmit(onSubmit)}
      >
        <SelectInput
          name="role"
          label="Função"
          placeholder="Selecione a função"
          options={[
            { value: 'admin', label: 'Administrador' },
            { value: 'unit-manager', label: 'Gerente' },
          ]}
        />
        <TextInput
          name="username"
          label="Email"
          placeholder="Digite o seu email"
        />
        <TextInput
          name="password"
          label="Senha"
          placeholder="Digite a sua senha"
          isObscure
        />
      </Stack>
    </FormProvider>
  );
}

export default AdminLoginForm;
