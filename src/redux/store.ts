import { configureStore } from '@reduxjs/toolkit';

import notificationReducer from './reducers/notification';

export const store = configureStore({
  reducer: {
    notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
