import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox,Card,CardItem } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput,TouchableHighlight, View } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';
import Snackbar from 'react-native-snackbar';


export default class Groups extends React.Component {
  props: {
    navigation: any,
  };


  state = { devices: [] };



  componentWillMount() {
    getDevices().then(devices => this.setState({ devices }));
  }

  render() {

    return (
      <Layout navigation={this.props.navigation} title="Notifications"
              LeftIconName="help-circle"
              LeftIconType="material-community"
              RightIconName="md-arrow-back"
              RightIconType="ionicon"
              NavigationScreen="Setting">
              
      </Layout>
    );
  }
}
