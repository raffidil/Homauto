import React from 'react';
import {
  Text
} from 'react-native';
import Layout from '../../components/Layout';
import { Icon } from 'react-native-material-design';

export default class MyNotificationsScreen extends React.Component {
  props:{
      navigation: any
  }

  static navigationOptions = {
    drawerLabel: 'page 3',
    drawerIcon: () => (
      <Icon name="share" style={{fontSize: 20}}/>
    ),
  };

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <Text>page 3</Text>
      </Layout>
    );
  }
}
