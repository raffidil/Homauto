import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from '../../components/react-native-color-picker/src/';

export default class DefaultColorPickerScreen extends React.Component {
  props: {
    navigation: any,
  };

  stop = ip => {
    fetch(`http://${ip}/stop`);
  };

  render() {
    const device = this.props.navigation.state.params;

    return (
      <Layout
        navigation={this.props.navigation}
        title="Default Color"
        RightMenuDisable={true}
        RightIconName="md-arrow-back"
        RightIconType="ionicon"
        NavigationScreen="DefaultColor">
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            <Text>Pick a Default Color for {device.name}</Text>
          </CardItem>
          <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ColorPicker
              defaultColor="#00ffeb"
              onColorSelected={color =>
                fetch(`http://${device.ip}/default=${color.substr(1, 6)}`)}
              style={{ width: 300, height: 300 }}
            />
          </View>
          </CardItem>
        </Card>
      </Layout>
    );
  }
}
