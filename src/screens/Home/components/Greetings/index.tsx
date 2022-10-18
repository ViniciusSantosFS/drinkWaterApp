import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { COLORS } from '~/globals/style';

interface Props {
  uri: string;
  name: string;
}

const Greetings = ({ name, uri }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo de volta {name}</Text>
      <Image style={styles.profile} source={{ uri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: COLORS.gray,
    fontWeight: 'bold',
    fontSize: 18,
  },

  profile: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});

export default Greetings;
