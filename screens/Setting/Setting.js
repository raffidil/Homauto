import React from 'react';
import Layout from '../../components/Layout';
import { Icon } from 'react-native-elements';
import { ColorPicker } from 'react-native-color-picker';
import { Text } from 'native-base';

export default class SettingPage extends React.Component {
  props: {
    navigation: any,
  };

  static navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: () => <Icon name="settings" />,
  };

  render() {
    return (
      <ColorPicker
        onColorSelected={color =>
          fetch('http://192.168.1.234/hex=' + color.substr(1, 6))}
        style={{ flex: 1 }}
      />
    );
  }
}
