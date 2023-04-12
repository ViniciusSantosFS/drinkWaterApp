import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email não deve estar vazio')
    .email('Email inválido'),
  password: Yup.string()
    .required('Senha não deve estar vazia')
    .min(5, 'A senha deve possuir ao mínimo 5 caracteres')
    .max(30, 'Limite máximo de caracteres excedido'),
});
