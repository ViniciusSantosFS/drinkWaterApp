import { ExpoBiometricAuthenticator } from './expoBiometricAuthenticator';
import { IBiometricAuthenticator } from './types';

class BiometricAuthenticator {
  biometricAuthenticator: IBiometricAuthenticator;

  constructor(biometricAuthenticator: IBiometricAuthenticator) {
    this.biometricAuthenticator = biometricAuthenticator;
  }

  authenticate() {
    return this.biometricAuthenticator.authenticate();
  }

  canAuthenticateUser() {
    return this.biometricAuthenticator.canAuthenticateUser();
  }

  disableDeviceAuthentication() {
    return this.biometricAuthenticator.disableDeviceAuthentication();
  }
}

export default new BiometricAuthenticator(new ExpoBiometricAuthenticator());
