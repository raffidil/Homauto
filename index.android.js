import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import {
  TouchableHighlight,
  AppRegistry,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import Modal from 'react-native-modalbox';
import { Text, Right, Left, Body, Card, CardItem, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from './components/Layout';
import DrawerConfig from './components/DrawerConfig';
import ColorPickerScreen from './screens/ColorPickerScreen/ColorPickerScreen';
import DefaultColorPickerScreen from './screens/DefaultColorPickerScreen/DefaultColorPickerScreen';
import OptionScreen from './screens/OptionScreen/OptionScreen';
import Setting from './screens/Setting/Setting';
import About from './screens/About/About';
import Groups from './screens/Groups/Groups';
import Notifications from './screens/Notifications/Notifications';
import DefaultColor from './screens/DefaultColor/DefaultColor';
import { getDevices, saveToDatabase } from './db';
import Snackbar from 'react-native-snackbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      name: '',
      devices: [],
    };
  }

  componentWillMount() {
    getDevices().then(devices => this.setState({ devices }));
  }

  props: {
    navigation: any,
  };

  changeColor = (color, ip) => {
    const url = `http://${ip}/hex=${color}`;
    fetch(url);
  };

  toggleCard = index => {
    const { devices } = this.state;
    const device = devices[index];
    device.cardOpen = !device.cardOpen;
    this.setState({ devices }, () => saveToDatabase({ devices }));
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <Icon name="home" />,
  };

  stop = ip => {
    fetch(`http://${ip}/stop`);
  };

  addDevice = () => {
    this.modal.close();
    const { devices, ip, name } = this.state;
    if (
      devices &&
      devices.map(device => device.ip).includes(`192.168.1.${ip}`)
    ) {
      Snackbar.show({
        title: 'This device is already added',
        duration: Snackbar.LENGTH_INDEFINITE,
        backgroundColor: '#E53935',
        action: {
              title: 'CLOSE',
              onPress: () => Snackbar.dismiss(),
              color: 'white',
            },
      });
    } else {
      devices.push({
        name,
        ip: `192.168.1.${ip}`,
        cardOpen: false,
      });
      this.setState({ devices });
      saveToDatabase({ devices });
    }
  };

  removeDevice = index => {
    const devices = this.state.devices.filter((x, i) => i !== index);
    this.setState({ devices }, () => saveToDatabase({ devices }));
  };

  render() {
    const colors = [
      {
        backgroundColor: '#ffffff',
        lightColor: 'ffffff',
      },
      {
        backgroundColor: '#BA68C8',
        lightColor: 'DD00FF',
      },
      {
        backgroundColor: '#5C6BC0',
        lightColor: '0400FF',
      },
      {
        backgroundColor: '#03A9F4',
        lightColor: '00D7FF',
      },
      {
        backgroundColor: '#64DD17',
        lightColor: '00FF10',
      },
      {
        backgroundColor: '#FFFF00',
        lightColor: 'FFFF00',
      },
      {
        backgroundColor: '#FFA000',
        lightColor: 'FF7200',
      },
      {
        backgroundColor: '#F44336',
        lightColor: 'FF0000',
      },
    ];

    return (
      <Layout
        navigation={this.props.navigation}
        title="Home"
        RightMenuDisable={false}
        LeftIconName="add-to-list"
        LeftIconType="entypo"
        RightIconName="menu"
        rightMenuOnPress={() => this.modal.open()}
        NavigationScreen="DrawerOpen"
      >
        <Modal
          backButtonClose
          animationDuration={300}
          style={{
            justifyContent: 'center',
            height: 200,
            width: 300,
          }}
          position={'center'}
          ref={r => (this.modal = r)}
        >
          <Text style={{ marginLeft: 20 }}>Add a new device</Text>
          <TextInput
            onChangeText={ip => this.setState({ ip })}
            value={this.state.ip}
            style={{ width: 250, marginLeft: 20 }}
            clearButtonMode={'always'}
            placeholder={'Device code'}
          />
          <TextInput
            onChangeText={name => this.setState({ name })}
            style={{ width: 250, marginLeft: 20 }}
            clearButtonMode={'always'}
            placeholder={'Name'}
            maxLength={10}
            value={this.state.name}
            returnKeyType={'go'}
          />
          <View
            style={{
              flexDirection: 'row',
              marginBottom: -10,
              marginTop: 10,
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
          >
            <Button transparent onPress={() => this.modal.close()}>
              <Text style={{ color: 'teal', fontWeight: 'bold' }}>Cancel</Text>
            </Button>
            <Button transparent onPress={this.addDevice}>
              <Text style={{ color: 'teal', fontWeight: 'bold' }}>Add</Text>
            </Button>
          </View>
        </Modal>
        <ScrollView>
          <Text style={{ color: '#9E9E9E', marginTop: 7, marginLeft: 10 }}>
            Device List
          </Text>
          {this.state.devices &&
            this.state.devices.map((device, index) => (
              <Card
                key={device.ip}
                style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}
              >
                <TouchableHighlight onPress={() => this.toggleCard(index)}>
                  <CardItem style={{backgroundColor: '#F5F5F5'}}>
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
                </TouchableHighlight>
                <View style={{ display: device.cardOpen ? 'flex' : 'none' }}>
                  <CardItem style={{backgroundColor: '#F5F5F5'}}>
                    {colors.map(color => (
                      <Button
                        small
                        borderRadius={15}
                        key={color.backgroundColor}
                        onPress={() =>
                          this.changeColor(color.lightColor, device.ip)}
                        style={{
                          backgroundColor: color.backgroundColor,
                          marginLeft: 8,
                          flex: 6,
                        }}
                      />
                    ))}
                  </CardItem>
                  <CardItem style={{backgroundColor: '#F5F5F5'}}>
                    <Button
                      backgroundColor="#607D8B"
                      small
                      style={{flex:2,marginRight: 5}}
                      iconLeft
                      borderRadius={15}
                      onPress={() =>
                        this.props.navigation.navigate('OptionScreen', device)}
                    >

                      <Icon
                        name="ios-options"
                        type="ionicon"
                        color="#ffffff"
                      />
                    <Text style={{marginRight: 10}}>Advanced</Text>
                    </Button>
                    <Button
                      backgroundColor="#607D8B"
                      small
                      iconLeft
                      borderRadius={15}
                      onPress={() =>
                        this.props.navigation.navigate('ColorPickerScreen', device)}
                    >
                      <Icon
                        name="md-color-palette"
                        type="ionicon"
                        color="#ffffff"
                      />
                    <Text style={{marginLeft: 10}}>Color Picker</Text>
                    </Button>
                  </CardItem>
                </View>
              </Card>
            ))}
        </ScrollView>
      </Layout>
    );
  }
}

const routesConfig = {
  Home: {
    screen: Home,
  },
  Setting: {
    screen: Setting,
  },
  About: {
    screen: About,
  },
};

const drawerNavigatorConfig = {
  contentComponent: DrawerConfig,
  contentOptions: {
    activeTintColor: '#212121',
    inactiveTintColor: '#424242',
    activeBackgroundColor: '#f5f5f5',
    style: {
      marginVertical: 0,
    },
  },
};

const BasicApp = DrawerNavigator(routesConfig, drawerNavigatorConfig);

const ModalStack = StackNavigator(
  {
    Home: {
      screen: BasicApp,
    },
    ColorPickerScreen: {
      screen: ColorPickerScreen,
    },
    DefaultColorPickerScreen: {
      screen: DefaultColorPickerScreen,
    },
    OptionScreen: {
      screen: OptionScreen,
    },
    Groups: {
      screen: Groups,
    },
    Notifications: {
      screen: Notifications,
    },
    DefaultColor: {
      screen: DefaultColor,
    },
  },
  { headerMode: 'none', mode: 'modal' }
);

AppRegistry.registerComponent('Homauto', () => ModalStack);
