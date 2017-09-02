import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { AppRegistry, TextInput, ScrollView } from 'react-native';
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
import { ColorPicker } from 'react-native-color-picker';
import Layout from './components/Layout';
import DrawerConfig from './components/DrawerConfig';
import Devices from './screens/Devices/Devices';
import Setting from './screens/Setting/Setting';
import About from './screens/About/About';

const address = 'http://192.168.1.234/';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  props: {
    navigation: any,
  };

  changeColor = color => {
    const url = `${address}hex=${color}`;
    console.log(url);
    fetch(url);
  };

  changeEffect = effect => {
    const url = `${address}${effect}`;
    console.log(url);
    fetch(url);
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <Icon name="home" />,
  };

  stop = () => {
    fetch(`${address}/stop`);
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
        functionIcon: 'ios-color-filter'
      },
      {
        functionName: 'allrainbow',
        functionTitle: 'All Rainbow',
        functionIcon: 'ios-color-filter-outline'
      },
      {
        functionName: 'jackcandle',
        functionTitle: 'Jack Candle',
        functionIcon: 'star'
      },
      {
        functionName: 'fire',
        functionTitle: 'Fire Flame',
        functionIcon: 'flame'
      },
    ];

    return (
      <Layout navigation={this.props.navigation} title="Home">
        <ScrollView>
          <List>
            <ListItem>
              <Card>
                <CardItem>
                  <Left>
                    <Icon name="bulb" />
                    <Body>
                      <Text>Light</Text>
                      <Text note>Bedroom</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button transparent onPress={() => this.stop()}>
                      <Icon
                        style={{ color: 'gray', fontSize: 25 }}
                        name="power"
                      />
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  {colors.map(color => (
                    <Button
                      key={color.backgroundColor}
                      onPress={() => this.changeColor(color.lightColor)}
                      style={{
                        backgroundColor: color.backgroundColor,
                        marginLeft: 8,
                        height: 35,
                        width: 40,
                        flex: 6,
                      }}
                    />
                  ))}
                </CardItem>
                <CardItem>
                  {effects.map(effect => (
                    <Button
                      key={effect.functionName}
                      onPress={() => this.changeEffect(effect.functionName)}
                      style={{
                        backgroundColor: '#90A4AE',
                        marginLeft: 8,
                        height: 35,
                        width: 40,
                        flex: 6,
                      }}
                    >
                    <Icon name={effect.functionIcon}/>
                  </Button>
                  ))}
                </CardItem>
                <CardItem>
                  <Body style={{alignItems: 'center' }}>
                  <ColorPicker
                    onColorSelected={color =>
                      fetch('http://192.168.1.234/hex=' + color.substr(1, 6))}
                    style={{ width: 200 ,height: 200 }}
                  />
                </Body>
                </CardItem>
              </Card>
            </ListItem>
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
