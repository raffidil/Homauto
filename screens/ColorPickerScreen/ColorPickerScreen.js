import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from '../../components/Layout';
import { ColorPicker } from '../../components/react-native-color-picker/src/';

export default class ColorPickerScreen extends React.Component {
  props: {
    navigation: any,
  };

  apply = (groupOrDevice, command) => {
    if (groupOrDevice.type === 'device') {
      fetch(`http://${groupOrDevice.ip}${command}`);
    } else if (groupOrDevice.type === 'group') {
      groupOrDevice.ips.forEach(ip => fetch(`http://${ip}${command}`));
    }
  };

  render() {
    const device = this.props.navigation.state.params;

    return (
      <Layout
        navigation={this.props.navigation}
        title="Color Picker"
        RightMenuDisable={true}
        RightIconName="md-arrow-back"
        RightIconType="ionicon"
        NavigationScreen="DrawerOpen"
      >
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            <Left>
              {device.type === 'device' && <Icon name="lightbulb-outline" />}
              {device.type === 'group' && (
                <Icon name="group-work" type="materialicon" />
              )}
              <Body>
                <Text>{device.name}</Text>
                <Text note>
                  {device.type === 'device' && 'Light'}
                  {device.type === 'group' && 'Group'}
                </Text>
              </Body>
            </Left>
            <Right>
              <Button transparent onPress={() => this.apply(device, '/stop')}>
                <Icon color="gray" name="power-settings-new" />
              </Button>
            </Right>
          </CardItem>
          <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <ColorPicker
                defaultColor="#00ffeb"
                onColorSelected={color =>
                  this.apply(device, `/hex=${color.substr(1, 6)}`)}
                style={{ width: 300, height: 300 }}
              />
            </View>
          </CardItem>
        </Card>
      </Layout>
    );
  }
}
