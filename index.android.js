import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { AppRegistry, ScrollView, TextInput, View, AsyncStorage } from 'react-native';
import Modal from 'react-native-modalbox';
import {
  List,
  ListItem,
  Text,
  Right,
  Left,
  Body,
  Card,
  CardItem,
  Button,
  Icon,
} from 'native-base';
// import { ColorPicker } from 'react-native-color-picker';
import Layout from './components/Layout';
import DrawerConfig from './components/DrawerConfig';
import Devices from './screens/Devices/Devices';
import Setting from './screens/Setting/Setting';
import About from './screens/About/About';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      name: '',
      devices: [
        {
          name: 'Bedroom',
          ip: '192.168.1.234',
        },
        {
          name: 'Bedroom',
          ip: '192.168.1.235',
        },
      ],
    };
  }

  componentWillMount(){

AsyncStorage.getItem('@MySuperStore:devices').then(jsonString => {
  const devices = JSON.parse(jsonString);
  this.setState({devices});
}).catch(console.warn)

  }

  props: {
    navigation: any,
  };

  changeColor = (color, ip) => {
    const url = `http://${ip}/hex=${color}`;
    fetch(url);
  };

  changeEffect = (effect, ip) => {
    const url = `http://${ip}/${effect}`;
    fetch(url);
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
    devices.push({
      name,
      ip,
    });
    this.setState({ devices });
    AsyncStorage.setItem('@MySuperStore:devices', JSON.stringify(devices)).catch(console.warn)

  };

  render() {
    const colors = [
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

    const effects = [
      {
        functionName: 'rainbow',
        functionTitle: 'Rainbow',
        functionIcon: 'ios-color-filter',
      },
      {
        functionName: 'allrainbow',
        functionTitle: 'All Rainbow',
        functionIcon: 'ios-color-filter-outline',
      },
      {
        functionName: 'jackcandle',
        functionTitle: 'Jack Candle',
        functionIcon: 'star',
      },
      {
        functionName: 'fire',
        functionTitle: 'Fire Flame',
        functionIcon: 'flame',
      },
    ];

    return (
      <Layout
        navigation={this.props.navigation}
        title="Home"
        rightMenuOnPress={() => this.modal.open()}
      >
        <Modal
          style={{
            justifyContent: 'center',
            height: 200,
            width: 300,
          }}
          position={'center'}
          ref={r => (this.modal = r)}
        >
        <Text style={{ marginLeft: 20}}>Add a new device</Text>
          <TextInput
            onChangeText={ip => this.setState({ ip })}
            value={this.state.ip}
            style={{width: 250,marginLeft: 20}}
            clearButtonMode={'always'}
            placeholder={'Device code'}
          />
          <TextInput
            onChangeText={name => this.setState({ name })}
            style={{width: 250,marginLeft: 20}}
            clearButtonMode={'always'}
            placeholder={'Name'}
            value={this.state.name}
            returnKeyType={'go'}
          />
        <View style={{flexDirection:'row', marginBottom: -10, marginTop: 10,alignSelf: 'flex-end',marginRight: 10}}>
          <Button transparent onPress={this.addDevice} >
              <Text style={{color: 'teal',fontWeight: 'bold'}}>Cancel</Text>
            </Button>
        <Button transparent onPress={this.addDevice} >
            <Text style={{color: 'teal',fontWeight: 'bold'}}>Add</Text>
          </Button>
        </View>

        </Modal>
        <ScrollView>
          <List>
            {this.state.devices.map(device =>
              <ListItem key={device.ip}>
                <Card>
                  <CardItem>
                    <Left>
                      <Icon name="bulb" />
                      <Body>
                        <Text>
                          {device.name}
                        </Text>
                        <Text note>Light</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Button transparent onPress={() => this.stop(device.ip)}>
                        <Icon
                          style={{ color: 'gray', fontSize: 25 }}
                          name="power"
                        />
                      </Button>
                    </Right>
                  </CardItem>
                  <CardItem>
                    {colors.map(color =>
                      <Button
                        key={color.backgroundColor}
                        onPress={() =>
                          this.changeColor(color.lightColor, device.ip)}
                        style={{
                          backgroundColor: color.backgroundColor,
                          marginLeft: 8,
                          height: 35,
                          width: 40,
                          flex: 6,
                        }}
                      />
                    )}
                  </CardItem>
                  <CardItem>
                    {effects.map(effect =>
                      <Button
                        key={effect.functionName}
                        onPress={() =>
                          this.changeEffect(effect.functionName, device.ip)}
                        style={{
                          backgroundColor: '#90A4AE',
                          marginLeft: 8,
                          height: 35,
                          width: 40,
                          flex: 6,
                        }}
                      >
                        <Icon name={effect.functionIcon} />
                      </Button>
                    )}
                  </CardItem>
                  {/*

<CardItem>
<Body style={{ alignItems: 'center' }}>
<ColorPicker
onColorSelected={color =>
fetch(
'http://192.168.1.234/hex=' + color.substr(1, 6)
)}
style={{ width: 200, height: 200 }}
/>
</Body>
</CardItem>
                             */}
                </Card>
              </ListItem>
            )}
          </List>
        </ScrollView>
      </Layout>
    );
  }
}

const routesConfig = {
  Home: {
    screen: Home,
  },
  Devices: {
    screen: Devices,
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

AppRegistry.registerComponent('Homauto', () => BasicApp);
