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
         <Button light><Text> Light </Text></Button>
           <Button rounded light>
              <Text>Light</Text>
            </Button>
            <Button rounded>
              <Text>Primary</Text>
            </Button>
            <Button rounded success>
              <Text>Success</Text>
            </Button>
            <Button rounded info>
              <Text>Info</Text>
            </Button>
            <Button rounded warning>
              <Text>Warning</Text>
            </Button>
            <Button rounded danger>
              <Text>Danger</Text>
            </Button>
            <Button rounded dark>
              <Text>Dark</Text>
            </Button>
      </Layout>
    );
  }
}
