import AsyncStorage from '@react-native-async-storage/async-storage';
import { randomUUID } from 'expo-crypto';

interface IAuthenticator {
  authenticate: ({ email, password }: AuthenticateParams) => Promise<boolean>;

  generateDeviceId: () => Promise<boolean>;

  getDeviceId: () => Promise<string | null>;
}

interface AuthenticateParams {
  email: string;
  password: string;
}

class Authenticator implements IAuthenticator {
  async authenticate({ email, password }: AuthenticateParams) {
    const deviceId = await this.getDeviceId();

    if (deviceId) {
      // Autenticar no FB com device id
      return true;
    }

    const result = await this.generateDeviceId();
    if (!result) return false;

    // Autenticar no FB com email e password

    return true;
  }

  async generateDeviceId() {
    try {
      const deviceId = randomUUID();
      await AsyncStorage.setItem('@APP/DEVICE_ID', deviceId);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getDeviceId() {
    return AsyncStorage.getItem('@APP/DEVICE_ID');
  }
}

export default new Authenticator();
