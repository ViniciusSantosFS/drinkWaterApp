import { configureStore } from '@reduxjs/toolkit';
import devToolsEnhancer from 'remote-redux-devtools';

import notificationReducer from './reducers/notification';

export const store = configureStore({
  reducer: {
    notificationReducer,
  },
  devTools: true,
  enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
