import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput,AppRegistry, View } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';
import Groups from '../Groups/Groups';
import Notifications from '../Notifications/Notifications';
import DefaultColor from '../DefaultColor/DefaultColor';
import { StackNavigator } from 'react-navigation';

export default class Setting extends React.Component {
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

  changeDefaultColor = (color, ip) => {
    const url = `http://${ip}/default=${color}`;
    fetch(url);
  };

  render() {
    return (
      <Layout navigation={this.props.navigation} title="Setting" RightMenuDisable={true}
      RightIconName="menu"
      NavigationScreen="DrawerOpen">
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
                      <Button
                        small
                        transparent
                        style={{ marginRight: -5 }}
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
                        style={{ marginRight: 5 }}
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
            <ListItem onPress={() =>
              this.props.navigation.navigate('Notifications')} iconLeft>
              <Left>
              <Icon name="notifications" type="materialicon" style={{marginLeft: 15}}/>
              <Text style={{marginLeft: 30}}>Notifications</Text>
            </Left>
            </ListItem>
            <ListItem onPress={() =>
              this.props.navigation.navigate('DefaultColor')} iconLeft>
              <Left>
              <Icon name="lightbulb-on" type="material-community" style={{marginLeft: 15}}/>
              <Text style={{marginLeft: 30}}>Light Default Color</Text>
            </Left>
            </ListItem>

          </List>
        </ScrollView>
      </Layout>
    );
  }
}
