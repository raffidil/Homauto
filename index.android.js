 import React,  { Component }  from 'react';
 import {
  DrawerNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   TextInput,
 } from 'react-native';
 import { Container, Header, Content, List, ListItem, Icon, Text, Right, Left, Body, Form, Item, Input, Label ,Button } from 'native-base';
 // import { Icon } from 'react-native-material-design';
 //import {Icon} from 'react-native-elements';
 import Layout from './components/Layout';
 import DrawerConfig from './components/DrawerConfig';
 import Devices from './screens/Devices/Devices';
 import Setting from './screens/Setting/Setting';
 import About from './screens/About/About';

const address = "http://192.168.1.234"

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
                <Icon name="flame" />
              </Left>
              <Body>
                <Text>Flame</Text>
              </Body>
              <Right>
                <Button iconLeft transparent primary onClick={() => fetch(address + "/stop")}>
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
         </List>
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
