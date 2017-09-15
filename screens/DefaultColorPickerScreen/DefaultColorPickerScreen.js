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
        LeftIconName="help-circle"
        LeftIconType="material-community"
        RightIconName="md-arrow-back"
        RightIconType="ionicon"
        NavigationScreen="DefaultColor">
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            <Text>Pick a Color for Light's Default</Text>
          </CardItem>
          <CardItem>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ColorPicker
              defaultColor="#00ffeb"
              onColorSelected={color =>
                fetch(`http://${device.ip}/default=${color.substr(1, 6)}`)}
              style={{ width: 330, height: 330 }}
            />
          </View>
          </CardItem>
        </Card>
      </Layout>
    );
  }
}
