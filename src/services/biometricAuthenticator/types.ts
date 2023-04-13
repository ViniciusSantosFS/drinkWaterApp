export interface IBiometricAuthenticator {
  authenticate: () => Promise<boolean>;
  canAuthenticateUser: () => Promise<boolean>;
  disableDeviceAuthentication: () => Promise<void>;
}
