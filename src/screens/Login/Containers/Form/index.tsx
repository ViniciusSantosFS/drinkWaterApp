import { Formik } from 'formik';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { validationSchema } from './validationSchema';

import Button from '~/components/Button';
import Input from '~/components/Input';
import useNavigation from '~/hooks/useNavigation';
import { authenticateUserWithBiometric } from '~/redux/reducers/authenticator';
import { AppDispatch } from '~/redux/store';

export default function Form() {
  const initialFormikValues = { email: '', password: '' };
  const { handleNavigate } = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const passwordRef = useRef<TextInput>();

  const handleLogin = async () => {
    await dispatch(authenticateUserWithBiometric(false));
    // return handleNavigate('Inicio');
  };

  const handleEmailOnSubmitEditing = () => {
    return passwordRef.current.focus();
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
      validateOnBlur
    >
      {({ handleChange, handleSubmit, values, getFieldMeta, handleBlur }) => (
        <>
          <Container>
            <Input
              placeholder="Email"
              iconName="email-outline"
              returnKeyType="next"
              onChangeText={handleChange('email')}
              value={values.email}
              hasError={
                getFieldMeta('email').error && getFieldMeta('email').touched
              }
              error={getFieldMeta('email').error}
              onSubmitEditing={handleEmailOnSubmitEditing}
              onBlur={handleBlur('email')}
            />

            <View style={{ marginVertical: 10 }} />
            <Input
              ref={passwordRef}
              placeholder="Password"
              iconName="lock-outline"
              onChangeText={handleChange('password')}
              value={values.password}
              hasError={
                getFieldMeta('password').error &&
                getFieldMeta('password').touched
              }
              error={getFieldMeta('password').error}
              onBlur={handleBlur('password')}
            />
          </Container>
          <Button title="Entrar" onPress={() => handleSubmit()} />
        </>
      )}
    </Formik>
  );
}

const Container = styled(View)`
  margin: 40px 26px 40px 0px;
`;
