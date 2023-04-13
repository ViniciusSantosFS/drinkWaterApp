import { configureStore } from '@reduxjs/toolkit';

import notificationReducer from './reducers/authenticator';
import authenticatorReducer from './reducers/notification';

export const store = configureStore({
  reducer: {
    notificationReducer,
    authenticatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
