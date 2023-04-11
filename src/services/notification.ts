import * as Notifications from 'expo-notifications';

import * as Storage from './storage';
import { convertMsToSeconds } from '../utils/timeConverter';

const schedulePushNotification = async () => {
  const scheduleTime = await Storage.getScheduleTime();
  const seconds = convertMsToSeconds(scheduleTime);

  return await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Não se esqueça de beber água! 💦',
      body: 'Lembre de deixar sua garrafinha ao seu lado',
      sound: 'default',
    },

    trigger: { seconds, repeats: true },
  });
};

const removeScheduleNotifications = () => {
  return Notifications.cancelAllScheduledNotificationsAsync();
};

const updatePushNotificationTime = async (): Promise<string> => {
  try {
    await removeScheduleNotifications();
  } catch (error) {
    if (__DEV__) console.log(error);

    throw new Error(
      'Algo deu errado ao atualizar notificações, tente novamente após alguns instantes'
    );
  }
  return schedulePushNotification();
};

const requestNotificationsPermissions = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};

const getPermissionsStatus = async () => {
  const settings = await Notifications.getPermissionsAsync();
  return settings;
};

export {
  schedulePushNotification,
  updatePushNotificationTime,
  removeScheduleNotifications,
  requestNotificationsPermissions,
  getPermissionsStatus,
};
