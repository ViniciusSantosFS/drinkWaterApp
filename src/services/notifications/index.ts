import { ExpoNotifications } from './expoNotificationDriver';
import { INotifications } from './types';

class Notifications {
  notificationDriver: INotifications;

  constructor(notificationDriver: INotifications) {
    this.notificationDriver = notificationDriver;
  }

  requestForPermissions() {
    return this.notificationDriver.requestForPermissions();
  }

  addScheduleTimeToPushNotifications() {
    return this.notificationDriver.addScheduleTimeToPushNotifications();
  }

  cancelAllScheduledNotifications() {
    return this.notificationDriver.cancelAllScheduledNotifications();
  }
}

export default new Notifications(new ExpoNotifications());
