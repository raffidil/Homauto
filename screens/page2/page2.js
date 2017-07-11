import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Toolbar from '../../components/Toolbar';
import { Icon } from 'react-native-material-design';

export default class ChatScreen extends React.Component {

  static navigationOptions = {
    title: 'page2',
  };

  static navigationOptions = {
    drawerLabel: 'page 2',
    drawerIcon: () => (
      <Icon name="share" style={{fontSize: 20}}/>
    ),
  };
  
  render() {
    return (
      <View>
        <Toolbar title="page 2"/>
        <Text>text for page 2</Text>
      </View>
    );
  }
}
