import { AsyncStorage } from 'react-native';

export const getDevices = () => {
  return AsyncStorage.getItem('@MySuperStore:devices')
    .then(jsonString => {
      const devices = JSON.parse(jsonString);
      return devices;
    })
    .catch(console.warn);
};

export const saveToDatabase = ({ devices }) => {
  AsyncStorage.setItem('@MySuperStore:devices', JSON.stringify(devices)).catch(
    console.warn
  );
};
