import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

import { COLORS } from '~/globals/style';

interface Props extends TextInputProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

const Input = ({ iconName, ...rest }: Props) => (
  <View style={styles.container}>
    <MaterialCommunityIcons name={iconName} size={24} color={COLORS.gray} />
    <TextInput style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    borderBottomWidth: 1,
    padding: 20,
  },
});

export default Input;
