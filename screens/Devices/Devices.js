import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Icon, Button } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from '../../components/react-native-color-picker/src/';

export default class Devices extends React.Component {
  props: {
    navigation: any,
  };

  render() {
    const device = this.props.navigation.state.params;

    return (
      <Layout navigation={this.props.navigation} title="Devices">
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
            Color Picker
          </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ColorPicker
              defaultColor="#00ffeb"
              onColorSelected={color =>
                fetch(`http://${device.ip}/hex=${color.substr(1, 6)}`)}
              style={{ width: 330, height: 330 }}
            />
          </View>
        </Card>
      </Layout>
    );
  }
}
