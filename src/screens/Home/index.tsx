import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import * as Notifications from '../../services/notification';
import * as Storage from '../../services/storage';
import Greetings from './components/Greetings';

import IconButton from '~/components/IconButton';
import Title from '~/components/Title';
import { COLORS } from '~/globals/style';

const DEFAULT_SCHEDULE_TIME = 60000;

export default function Home() {
  const configPushTimeSchedule = async () => {
    await Promise.all([
      Notifications.removeScheduleNotifications(),
      Storage.updateScheduleTime(DEFAULT_SCHEDULE_TIME),
    ]);

    return Notifications.schedulePushNotification();
  };

  useEffect(() => {
    configPushTimeSchedule().catch((error) => {
      throw new Error(error);
    });
  }, []);

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
