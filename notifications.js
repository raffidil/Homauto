import { NativeModules } from 'react-native';

const setNotificationCallback = (callback) => {
  const setNotif = () => {
    NativeModules.NeoLightNotificationService.setCallback((data) => {
      const notif = JSON.parse(data);
      if (callback && typeof callback === 'function') {
        callback(notif)
      }
      setNotif();
    });
  }
  setNotif();
}

export default { setNotificationCallback };
