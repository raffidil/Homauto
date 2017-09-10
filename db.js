import { AsyncStorage } from 'react-native';

export const getDevices = () => {
  return AsyncStorage.getItem('@MySuperStore:devices')
    .then(jsonString => {
      const devices = JSON.parse(jsonString);
      if (devices) return devices;

      return [];
    })
    .catch(console.warn);
};

export const saveToDatabase = ({ devices }) => {
  AsyncStorage.setItem('@MySuperStore:devices', JSON.stringify(devices)).catch(
    console.warn
  );
};
