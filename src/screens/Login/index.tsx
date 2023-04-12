import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import Logo from '~/assets/logo.svg';

import Form from './Containers/Form';
import { styles } from './style';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Logo width={200} height={200} />
        </View>

        <View style={styles.contentContainer}>
          <Form />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
