import { Formik } from 'formik';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';

import { validationSchema } from './validationSchema';

import Button from '~/components/Button';
import Input from '~/components/Input';
import useNavigation from '~/hooks/useNavigation';

export default function Form() {
  const { handleNavigate } = useNavigation();
  const passwordRef = useRef<TextInput>();

  const handleLogin = () => handleNavigate('Inicio');
  const initialFormikValues = { email: '', password: '' };

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
          <Button title="Login" onPress={() => handleSubmit()} />
        </>
      )}
    </Formik>
  );
}

const Container = styled(View)`
  margin: 40px 20px 40px 0px;
`;
