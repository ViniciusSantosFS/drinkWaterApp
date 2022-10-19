import AsyncStorage from '@react-native-async-storage/async-storage';

const notificationScheduleTimeKey = '@scheduleTime/key';

const getScheduleTime = async () => {
  const scheuleTime = await AsyncStorage.getItem(notificationScheduleTimeKey);
  if (!scheuleTime) throw new Error('Erro ao consultar base de dados local');

  return parseInt(scheuleTime, 10);
};

const updateScheduleTime = (millisecondsTime: number) => {
  return AsyncStorage.setItem(
    notificationScheduleTimeKey,
    millisecondsTime.toString()
  );
};

export { getScheduleTime, updateScheduleTime };
