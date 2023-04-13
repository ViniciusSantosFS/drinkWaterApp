import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Authenticator from '~/services/authenticator';
import BiometricAuthenticator from '~/services/biometricAuthenticator';

const authenticateUserWithBiometric = createAsyncThunk(
  'authenticator/authenticateWithBiometric',
  async (hasAcceptBiometricsAuthentication: boolean) => {
    if (!hasAcceptBiometricsAuthentication) return false;

    const hasPermissions = await BiometricAuthenticator.canAuthenticateUser();
    if (!hasPermissions) return false;

    const result = await BiometricAuthenticator.authenticate();
    if (!result) return false;

    return Authenticator.authenticate({ email: '', password: '' });
  }
);

const askForBiometricAuthenticatonPermission = createAsyncThunk(
  'authenticator/askForBiometricPermissions',
  async () => {
    const hasPermissions = await BiometricAuthenticator.canAuthenticateUser();
    if (!hasPermissions) return false;

    return BiometricAuthenticator.authenticate();
  }
);

const authenticateWith = createAsyncThunk(
  'authenticator/authenticateWithEmailAndPassword',
  async ({ email, password }: { email: string; password: string }) => {
    return Authenticator.authenticate({ email, password });
  }
);

export const authenticatorSlice = createSlice({
  name: 'authenticator',
  initialState: {
    hasAcceptBiometricsAuthentication: false,
    hasError: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(askForBiometricAuthenticatonPermission.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      askForBiometricAuthenticatonPermission.fulfilled,
      (state, action) => {
        state.hasAcceptBiometricsAuthentication = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(
      askForBiometricAuthenticatonPermission.rejected,
      (state) => {
        state.isLoading = true;
        state.hasError = true;
      }
    );
  },
});

export { authenticateUserWithBiometric };

export default authenticatorSlice.reducer;
