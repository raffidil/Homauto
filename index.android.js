import React from 'react';
 import {
  DrawerNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Switch
 } from 'react-native';
 // import { Icon } from 'react-native-material-design';
 import {Avatar, Icon} from 'react-native-elements';
 import Layout from './components/Layout';
 import DrawerConfig from './components/DrawerConfig';
 import Devices from './screens/Devices/Devices';
 import Setting from './screens/Setting/Setting';
 import About from './screens/About/About';
 import {
  MKIconToggle,
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
} from 'react-native-material-kit';


 class Home extends React.Component {
   props:{
       navigation: any
   }

   static navigationOptions = {
     drawerLabel: 'Home',
     drawerIcon: () => (
       <Icon
  name='home'
  color='#00aced' />

     ),
   };

   render() {
     return (
       <Layout navigation={this.props.navigation} title='Home'>
         <Text>Home</Text>
           <MKSwitch checked={true}  />
             <Switch  />
               <Avatar
    large
    rounded
    title="MT"
    activeOpacity={0.7}
  />

       </Layout>
     );
   }
 }

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

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
  contentComponent: DrawerConfig
}

 const BasicApp = DrawerNavigator(routesConfig,drawerNavigatorConfig);


AppRegistry.registerComponent('Homauto', () => BasicApp);
