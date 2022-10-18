import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../../globals/style';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: COLORS.blueSecondary,
    fontSize: 32,
  },
});

export default Title;
