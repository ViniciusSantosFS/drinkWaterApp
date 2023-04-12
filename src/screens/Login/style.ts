import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '~/globals/style';

const { height } = Dimensions.get('window');
const FIFTEEN_PERCENTE_SCREEN_HEIGHT = height * 0.15;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: FIFTEEN_PERCENTE_SCREEN_HEIGHT,
  },

  contentContainer: {
    margin: 20,
  },
});
