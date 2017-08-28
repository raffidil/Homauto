import React,  { Component }  from 'react';

import Layout from '../../components/Layout';
import {Icon} from 'react-native-elements';
import { Container, Header, Content, Button, Text } from 'native-base';


export default class SettingPage extends React.Component {
  props:{
      navigation: any
  }

  static navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: () => (
      <Icon name="settings"/>
    ),
  };

  render() {
    return (
      <Layout navigation={this.props.navigation} title="Setting">
         <Text>Setting</Text>
      </Layout>
    );
  }
}
