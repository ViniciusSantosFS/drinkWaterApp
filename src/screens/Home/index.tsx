import React from 'react';
import { StyleSheet, View } from 'react-native';

import Greetings from './components/Greetings';

import IconButton from '~/components/IconButton';
import Title from '~/components/Title';
import { COLORS } from '~/globals/style';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginBottom: 20 }}>
          <Greetings name="Vinicius" uri="" />
        </View>

        <Title>Adicione um lembrete para beber água</Title>
      </View>

      <IconButton iconName="chevron-right" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
  },
});
