import React from 'react';
import {
  AppRegistry,
  View,
  Button,
} from 'react-native';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Page3',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
