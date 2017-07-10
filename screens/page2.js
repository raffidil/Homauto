import React from 'react';
import {
    Text,
    View
} from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'page2',
  };
  render() {
    return (
      <View>
        <Text>text for page 2</Text>
      </View>
    );
  }
}
