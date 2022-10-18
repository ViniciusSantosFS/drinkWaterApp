import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { COLORS } from '~/globals/style';

interface Props extends TouchableOpacityProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

const IconButton = ({ iconName, ...rest }: Props) => (
  <TouchableOpacity style={styles.container} {...rest}>
    <MaterialCommunityIcons name={iconName} size={32} color={COLORS.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: COLORS.bluePrimary,
  },
});

export default IconButton;
