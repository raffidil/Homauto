import React from 'react';
import {
  Text
} from 'react-native';
import Layout from '../../components/Layout';
import {Icon} from 'react-native-elements';
export default class AboutPage extends React.Component {
  props:{
      navigation: any
  }

  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: () => (
      <Icon name="info"/>
    ),
  };

  render() {
    return (
      <Layout navigation={this.props.navigation} title="About" iconName="dots-vertical" iconType="material-community" >
        <Text>About</Text>
      </Layout>
    );
  }
}
