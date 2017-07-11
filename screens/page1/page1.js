import React from 'react';
import {
    Text,
} from 'react-native';
import { Icon } from 'react-native-material-design';
import Layout from '../../components/Layout';

export default class ChatScreen extends React.Component {
  props:{
      navigation: any
  }
  

  static navigationOptions = {
    drawerLabel: 'page 1',
    drawerIcon: () => (
      <Icon name="share" style={{fontSize: 20}}/>
    ),
  };

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Text>page1</Text>
      </Layout>
    );
  }
}
