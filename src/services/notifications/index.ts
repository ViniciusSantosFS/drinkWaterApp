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

  addScheduleTimeToPushNotifications(milisseconds: number) {
    return this.notificationDriver.addScheduleTimeToPushNotifications(
      milisseconds
    );
  }

  cancelAllScheduledNotifications() {
    return this.notificationDriver.cancelAllScheduledNotifications();
  }
}

export default new Notifications(new ExpoNotifications());
