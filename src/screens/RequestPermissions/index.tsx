import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Greetings from '~/assets/greetings.svg';

import AskPermissionsButton from './Containers/AskPermissionsButton';

import Title from '~/components/Title';
import { COLORS } from '~/globals/style';

export default function RequestPermissions() {
  return (
    <View style={styles.container}>
      <Title>
        <Text style={{ textAlign: 'center' }}>Para te manter hidratado</Text>
      </Title>

      <Greetings width={200} height={200} />

      <Text style={styles.description}>
        Afim de te proporcionar uma melhor experiência é necessário aceitar
        nossas permissões de uso
      </Text>

      <View style={{ width: '100%' }}>
        <AskPermissionsButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  description: {
    color: COLORS.gray,
    fontSize: 18,
    textAlign: 'center',
  },
});
