import * as LocalAuthentication from 'expo-local-authentication';
import { Platform } from 'react-native';

import { IBiometricAuthenticator } from './types';

export class ExpoBiometricAuthenticator implements IBiometricAuthenticator {
  async authenticate() {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (savedBiometrics) return true;

    const result = await LocalAuthentication.authenticateAsync();
    return result.success;
  }

  async canAuthenticateUser() {
    return LocalAuthentication.hasHardwareAsync();
  }

  async disableDeviceAuthentication() {
    if (Platform.OS === 'android') {
      return LocalAuthentication.cancelAuthenticate();
    }
  }
}
