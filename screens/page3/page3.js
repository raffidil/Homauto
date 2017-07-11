import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Toolbar from '../../components/Toolbar';
import { Icon } from 'react-native-material-design';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'page 3',
    drawerIcon: () => (
      <Icon name="share" style={{fontSize: 20}}/>
    ),
  };

  render() {
    return (
      <View>
        <Toolbar title="Page 3"/>
        <Text>text for page 3</Text>
      </View>
    );
  }
}
