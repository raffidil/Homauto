import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';

export default class SettingPage extends React.Component {
  props: {
    navigation: any,
  };

  static navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: () => <Icon name="settings" />,
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
    return (
      <Layout navigation={this.props.navigation} title="Setting">
        <Modal
          backButtonClose
          style={{
            height: 450,
          }}
          animationDuration={300}
          position={'bottom'}
          ref={r => (this.modal = r)}
        >
          <ScrollView>
            <List>
              {this.state.devices &&
                this.state.devices.map((device, index) => (
                  <ListItem icon style={{ marginTop: 10 }} key={device.ip}>
                    <Left>
                      <Icon name="lightbulb-outline" />
                    </Left>
                    <Body>
                      <Text>{device.name}</Text>
                    </Body>
                    <Right style={{ marginRight: -10 }}>
                      <Button small transparent style={{ marginRight: -10 }}>
                        <Icon size={20} name="edit" />
                      </Button>
                      <Button small transparent style={{ marginRight: -10 }}>
                        <Icon
                          size={20}
                          name="signal-wifi-off"
                          type="materialicons"
                        />
                      </Button>
                      <Button
                        small
                        transparent
                        style={{ marginRight: -10 }}
                        onPress={() => this.removeDevice(index)}
                      >
                        <Icon size={20} name="delete" />
                      </Button>
                    </Right>
                  </ListItem>
                ))}
            </List>
          </ScrollView>
        </Modal>

        <ScrollView>
          <List>
            <ListItem onPress={() => this.modal.open()}>
              <Text>Devices</Text>
            </ListItem>
          </List>
        </ScrollView>
      </Layout>
    );
  }
}
