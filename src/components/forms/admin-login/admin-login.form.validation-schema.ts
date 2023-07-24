import * as yup from 'yup';

const AdminLoginFormValidationSchema = yup.object().shape({
  role: yup
    .string()
    .is(
      ['admin', 'unit-manager'],
      'Apenas administradores ou gestores de unidades podem fazer login',
    )
    .required(),
  username: yup.string().email('Email inválido').required(),
  password: yup.string().required(),
});

export default AdminLoginFormValidationSchema;
