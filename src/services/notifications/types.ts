export interface INotifications {
  requestForPermissions: () => Promise<boolean>;
  addScheduleTimeToPushNotifications: (time: number) => Promise<void>;
  cancelAllScheduledNotifications: () => Promise<void>;
}
