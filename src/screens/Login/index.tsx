import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

import { styles } from './style';

import Button from '~/components/Button';
import Input from '~/components/Input';
import useNavigation from '~/hooks/useNavigation';

const schema = Yup.object({
  email: Yup.string().required('Email não deve estar vazio').email(),
  password: Yup.string()
    .required('Senha não deve estar vazia')
    .min(5, 'A senha deve possuir ao mínimo 5 caracteres')
    .max(30, 'Limite máximo de caracteres excedido'),
});

export default function Login() {
  const { handleNavigate } = useNavigation();
  const handleLogin = () => handleNavigate('Inicio');

  const initialFormikValues = { email: '', password: '' };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Logo width={200} height={200} />
        </View>

        <View style={styles.contentContainer}>
          <Formik
            initialValues={initialFormikValues}
            validationSchema={schema}
            onSubmit={handleLogin}
            validateOnBlur
          >
            {({ handleChange, handleSubmit, values, touched, errors }) => (
              <>
                <View style={styles.formContainer}>
                  <Input
                    placeholder="Email ID"
                    iconName="email-outline"
                    returnKeyType="next"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    hasError={errors.email && touched.email}
                  />
                  <View style={{ marginVertical: 10 }} />
                  <Input
                    placeholder="Password"
                    iconName="lock-outline"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    hasError={errors.password && touched.password}
                  />
                </View>
                <Button title="Login" onPress={() => handleSubmit()} />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
