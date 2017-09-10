import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
  Card,
  CardItem
} from 'native-base';
import { Icon, Button } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from '../../components/react-native-color-picker/src/';

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
        <Card style={{marginTop: 10,marginLeft: 5, marginRight: 5}}>
        <Text style={{fontSize: 20, marginLeft: 15, marginTop: 10}}>Color Picker</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ColorPicker
            defaultColor='#00ffeb'
            onColorSelected={color =>
              fetch('http://192.168.1.234/hex=' + color.substr(1, 6))}
            style={{ width: 330,height: 330, }}
          />
        </View>
        </Card>
      </Layout>
    );
  }
}
