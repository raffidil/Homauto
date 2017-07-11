import React from 'react';
import {
    Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Layout from '../../components/Layout';

export default class Devices extends React.Component {
  props:{
      navigation: any
  }


  static navigationOptions = {
    drawerLabel: 'Devices',
    drawerIcon: () => (
      <Icon name="cloud" />
    ),
  };

  render() {
    return (
      <Layout navigation={this.props.navigation} title="Devices">
        <Text>Devices</Text>
      </Layout>
    );
  }
}
