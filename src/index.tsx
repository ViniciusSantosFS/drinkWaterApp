import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

import Logo from './assets/logo.svg';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';
import { COLORS } from './globals/style';

const { height } = Dimensions.get('window');
const FIFTEEN_PERCENTE_SCREEN_HEIGHT = height * 0.15;

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: FIFTEEN_PERCENTE_SCREEN_HEIGHT,
  },

  formContainer: {
    marginVertical: 40,
    marginRight: 20,
  },

  contentContainer: {
    margin: 20,
  },
});
