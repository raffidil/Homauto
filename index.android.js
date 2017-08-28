import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { AppRegistry, TextInput, ScrollView } from 'react-native';
import {
  List,
  ListItem,
  Icon,
  Text,
  Right,
  Left,
  Body,
  Card,
  CardItem,
  Button,
} from 'native-base';
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
        backgroundColor: '#FF6F00',
        lightColor: 'FFFFFF',
      },
      {
        backgroundColor: '#558B2F',
        lightColor: 'FF0000',
      },
      {
        backgroundColor: '#2196F3',
        lightColor: '00FF00',
      },
      {
        backgroundColor: '#0D47A1',
        lightColor: '0000FF',
      },
      {
        backgroundColor: '#6A1B9A',
        lightColor: 'FFFF00',
      },
      {
        backgroundColor: '#F44336',
        lightColor: '00FFFF',
      },
    ];

    return (
      <Layout navigation={this.props.navigation} title="Home">
        <ScrollView>
          <List>
            <ListItem itemHeader first>
              <Text>Light List</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bulb" size={25} color="black" />
              </Left>
              <Body>
                <Text>Light</Text>
                <Text note>Bedroom</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onClick={() => fetch('http://192.168.1.234/stop')}
                >
                  <Text style={{ color: 'gray' }}>OFF</Text>
                </Button>
                <TextInput
                  maxLength={6}
                  placeholder={'HEX'}
                  onSubmitEditing={text => this.changeColor({ text })}
                  style={{ height: 40, width: 65, borderWidth: 0 }}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                />
              </Right>
            </ListItem>
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
                    <Button transparent>
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
                  <TextInput
                    maxLength={6}
                    placeholder={'HEX'}
                    onSubmitEditing={text => this.changeColor(text)}
                    style={{ width: 70, borderWidth: 0, fontSize: 20 }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                  />
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
