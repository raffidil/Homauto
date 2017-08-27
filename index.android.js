 import React,  { Component }  from 'react';
 import {
  DrawerNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   TextInput,
 } from 'react-native';
 import { Container, Header, Content, List, ListItem, Icon, Text, Radio, Right, Left, Body, Card, CardItem, Form, Item, Input, Label ,Button } from 'native-base';
 // import { Icon } from 'react-native-material-design';
 //import {Icon} from 'react-native-elements';
 //import Icon from 'react-native-vector-icons/FontAwesome'
 import Layout from './components/Layout';
 import DrawerConfig from './components/DrawerConfig';
 import Devices from './screens/Devices/Devices';
 import Setting from './screens/Setting/Setting';
 import About from './screens/About/About';

const address = "http://192.168.1.234/"

 class Home extends React.Component {
   constructor(props) {
    super(props);
    this.state = { text: '' };
  }

   props:{
       navigation: any
   }

   changeColor = (color) => {
  fetch(address + color)
    }


   static navigationOptions = {
     drawerLabel: 'Home',
     drawerIcon: () => (
       <Icon
         name='home'
         />

     ),
   };


   render() {
     return (
       <Layout navigation={this.props.navigation} title='Home'>
         <List>
           <ListItem itemHeader first>
             <Text>Light List</Text>
           </ListItem>
           <ListItem icon>
              <Left>
                <Icon name="lightbulb-o" size={25} color="black" />
              </Left>
              <Body>
                <Text>Light</Text>
                <Text note>Bedroom</Text>
              </Body>
              <Right>
                <Button transparent onClick={() => fetch("http://192.168.1.234/stop")}>
                  <Text style={{color: 'gray'}}>OFF</Text>
                </Button>
                <TextInput
                  maxLength={6}
                  placeholder={'HEX'}
                  onSubmitEditing={(text) => this.changeColor({text})}
                  style={{height: 40, width: 65, borderWidth: 0}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
             />
              </Right>
            </ListItem>
            <ListItem>
              <Card>
            <CardItem>
              <Left>
                <Icon  name="bulb" />
                <Body>
                  <Text>Light</Text>
                  <Text note>Bedroom</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent>
                  <Icon style={{color: 'gray', fontSize: 25}}name="power" />
                </Button>
                </Right>
            </CardItem>
            <CardItem>
            </CardItem>
          </Card>
            </ListItem>
            <ListItem>
              <Card>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
            </ListItem>
         </List>
         <Button onClick={() => fetch("http://192.168.1.234/hex=ffff00")}>
           <Text>OFF</Text>
         </Button>
       </Layout>
     );
   }
 }


const routesConfig={
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

const drawerNavigatorConfig={
  contentComponent: DrawerConfig,
  contentOptions: {
  activeTintColor: '#212121',
  inactiveTintColor: '#424242',
  activeBackgroundColor: '#f5f5f5',
  style: {
    marginVertical: 0,
  },
}
}

 const BasicApp = DrawerNavigator(routesConfig,drawerNavigatorConfig);


AppRegistry.registerComponent('Homauto', () => BasicApp);
