import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as Notifications from '~/services/notification';

const askUserForNotificationPermissions = createAsyncThunk(
  'notification/askPermissions',
  async () => {
    const { granted } = await Notifications.requestNotificationsPermissions();
    return granted;
  }
);

export const notificationSlicer = createSlice({
  name: 'notification',
  initialState: {
    grantedNotificationPermissions: false,
    isLoading: false,
    hasNotificationStateError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(askUserForNotificationPermissions.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      askUserForNotificationPermissions.fulfilled,
      (state, action) => {
        state.grantedNotificationPermissions = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(askUserForNotificationPermissions.rejected, (state) => {
      state.isLoading = false;
      state.hasNotificationStateError = true;
    });
  },
});

export { askUserForNotificationPermissions };

export default notificationSlicer.reducer;
