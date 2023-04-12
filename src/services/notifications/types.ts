export interface INotifications {
  requestForPermissions: () => Promise<boolean>;
  addScheduleTimeToPushNotifications: () => Promise<void>;
  cancelAllScheduledNotifications: () => Promise<void>;
}
