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
 import {Avatar, Tabs, Tab, Icon} from 'react-native-elements';
 import Layout from './components/Layout';
 import DrawerConfig from './components/DrawerConfig';
 import page1 from './screens/page1/page1';
 import page2 from './screens/page2/page2';
 import page3 from './screens/page3/page3';
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
       <Layout navigation={this.props.navigation}>
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
 Page1: {
   screen: page1,
 },
 Page2: {
   screen: page2,
 },
 Page3: {
   screen: page3,
 },
};

const drawerNavigatorConfig={
  contentComponent: DrawerConfig
}

 const BasicApp = DrawerNavigator(routesConfig,drawerNavigatorConfig);


AppRegistry.registerComponent('Homauto', () => BasicApp);
