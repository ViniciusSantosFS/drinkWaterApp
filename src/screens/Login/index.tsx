import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import Logo from '~/assets/logo.svg';

import { styles } from './style';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Title from '~/components/Title';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Logo width={200} height={200} />
        </View>

        <View style={styles.contentContainer}>
          <Title>Login</Title>

          <View style={styles.formContainer}>
            <Input placeholder="Email ID" iconName="email-outline" />
            <View style={{ marginVertical: 10 }} />
            <Input placeholder="Password" iconName="lock-outline" />
          </View>

          <Button title="Login" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
