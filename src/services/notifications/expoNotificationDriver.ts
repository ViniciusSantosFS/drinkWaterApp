import {
  requestPermissionsAsync,
  scheduleNotificationAsync,
  cancelAllScheduledNotificationsAsync,
} from 'expo-notifications';

import { INotifications } from './types';
import { convertMsToSeconds } from '../../utils/timeConverter';
import * as Storage from '../storage';

export class ExpoNotifications implements INotifications {
  async requestForPermissions() {
    const result = await requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });

    return result.granted;
  }

  async addScheduleTimeToPushNotifications() {
    const scheduleTime = await Storage.getScheduleTime();
    const seconds = convertMsToSeconds(scheduleTime);

    await scheduleNotificationAsync({
      content: {
        title: 'Não se esqueça de beber água! 💦',
        body: 'Lembre de deixar sua garrafinha ao seu lado',
        sound: 'default',
      },

      trigger: { seconds, repeats: true },
    });
  }
  cancelAllScheduledNotifications() {
    return cancelAllScheduledNotificationsAsync();
  }
}
