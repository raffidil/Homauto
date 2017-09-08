import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from 'react-native-color-picker';

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
        <Text style={{fontSize: 20, marginLeft: 10}}>Color Picker</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ColorPicker
            defaultColor='#00ffeb'
            onColorSelected={color =>
              fetch('http://192.168.1.234/hex=' + color.substr(1, 6))}
            style={{ width: 320,height: 300, }}
          />
        </View>

      </Layout>
    );
  }
}
