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

export const getGroups = () => {
  return AsyncStorage.getItem('@MySuperStore:groups')
    .then(jsonString => {
      const groups = JSON.parse(jsonString);
      if (groups) return groups;

      return [];
    })
    .catch(console.warn);
};

export const saveToDatabase = ({ devices, groups }) => {
  if (devices) {
    AsyncStorage.setItem(
      '@MySuperStore:devices',
      JSON.stringify(devices)
    ).catch(console.warn);
  }

  if (groups) {
    AsyncStorage.setItem('@MySuperStore:groups', JSON.stringify(groups)).catch(
      console.warn
    );
  }
};
