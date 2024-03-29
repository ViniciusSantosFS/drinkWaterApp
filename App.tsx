import React from 'react';
import { Provider } from 'react-redux';

import Main from './src';

import { store } from '~/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
