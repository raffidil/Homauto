import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput,AppRegistry } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';
import Groups from '../Groups/Groups';
import { StackNavigator } from 'react-navigation';

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
      <Layout navigation={this.props.navigation} title="Setting" LeftIconName="dots-vertical"
      LeftIconType="material-community"
      RightIconName="menu">
        <Modal
          backButtonClose
          style={{
            height: 440,
            width: 340,
          }}
          animationDuration={200}
          position={'center'}
          ref={r => (this.modal = r)}
          swipeToClose={false}
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
                      <Button
                        small
                        transparent
                        style={{ marginRight: -10 }}
                        onPress={() => {fetch(`http://${device.ip}/wifireset`)}}
                        >
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

        <Modal
          backButtonClose
          style={{
            height: 440,
            width: 340,
          }}
          animationDuration={200}
          position={'center'}
          ref={r => (this.modal2 = r)}
          swipeToClose={false}
        >
        <List>
          <ListItem>
            <TextInput
              maxLength={10}
              style={{ width: 160}}
              clearButtonMode={'always'}
              placeholder={'Group Name'}
            />
            <Button

              borderRadius={5}
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>NEW  GROUP</Text></Button>
          </ListItem>
          <ScrollView>
            {this.state.devices &&
              this.state.devices.map((device, index) => (
                <ListItem icon style={{ marginTop: 10 }} key={device.ip}>
                  <Left>
                    <Icon name="lightbulb-outline" />
                  </Left>
                  <Body>
                    <Text>{device.name}</Text>
                  </Body>
                  <Right style={{ marginRight: 20 }}>
                    <CheckBox color='black' checked={true} />
                  </Right>
                </ListItem>
              ))}
          </ScrollView>
        </List>
        </Modal>

        <ScrollView>
          <List>
            <ListItem onPress={() => this.modal.open()} iconLeft>
              <Left>
              <Icon name="network" type="entypo" style={{marginLeft: 15}}/>
              <Text style={{marginLeft: 30}}>Devices</Text>
            </Left>
            </ListItem>
            <ListItem onPress={() =>
              this.props.navigation.navigate('Groups')} iconLeft>
              <Left>
              <Icon name="grid" type="entypo" style={{marginLeft: 15}}/>
              <Text style={{marginLeft: 30}}>Groups</Text>
            </Left>
            </ListItem>
          </List>
        </ScrollView>
      </Layout>
    );
  }
}

const ModalStack = StackNavigator(
  {
    Setting: {
      screen: SettingPage,
    },
    Groups: {
      screen: Groups,
    },
  },
  { headerMode: 'none', mode: 'modal' }
);
