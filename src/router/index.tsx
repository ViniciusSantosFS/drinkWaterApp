import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';

import Home from '~/screens/Home';
import Login from '~/screens/Login';
import RequestPermissions from '~/screens/RequestPermissions';

export type StackParamsList = {
  Permissoes: undefined;
  Inicio: undefined;
  Login: undefined;
};

export type HookNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamsList>,
  StackNavigationProp<StackParamsList>
>;

const Stack = createNativeStackNavigator<StackParamsList>();

const defaultOptions = {
  headerShown: false,
};

const homeOptions = {
  headerBackVisible: false,
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Permissoes"
          component={RequestPermissions}
          options={defaultOptions}
        />
        <Stack.Screen name="Login" component={Login} options={defaultOptions} />
        <Stack.Screen name="Inicio" component={Home} options={homeOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
