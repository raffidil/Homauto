import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';


export default class Groups extends React.Component {
  props: {
    navigation: any,
  };


  state = { devices: [] };

  removeDevice = index => {
    const devices = this.state.devices.filter((x, i) => i !== index);
    this.setState({ devices }, () => saveToDatabase({ devices }));
  };

  componentWillMount() {
    getDevices().then(devices => this.setState({ devices }));
  }

  render() {
    const device = this.props.navigation.state.params;
    return (
      <Layout navigation={this.props.navigation} title="Groups"
              LeftIconName="help-circle"
              LeftIconType="material-community"
              RightIconName="md-arrow-back"
              RightIconType="ionicon">
      </Layout>
    );
  }
}
