import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text } from 'native-base';
import { Icon, Button } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from '../../components/react-native-color-picker/src/';

export default class ColorPickerScreen extends React.Component {
  props: {
    navigation: any,
  };

  render() {
    const device = this.props.navigation.state.params;

    return (
      <Layout navigation={this.props.navigation} title="Color Picker" iconName="help-circle" iconType="material-community">
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            <Left>
              <Icon name="lightbulb-outline" />
              <Body>
                <Text>{device.name}</Text>
                <Text note>Light</Text>
              </Body>
            </Left>
            <Right>
              <Button transparent onPress={() => this.stop(device.ip)}>
                <Icon color="gray" name="power-settings-new" />
              </Button>
            </Right>
          </CardItem>
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
