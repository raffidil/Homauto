import React from 'react';
 import {
  DrawerNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   View,
   StyleSheet,
   Button,
   StatusBar,
   Text
 } from 'react-native';
// import { Toolbar } from './components';
 import { Icon } from 'react-native-material-design';
 import Toolbar from './components/Toolbar';
 import page1 from './screens/page1/page1';
 import page2 from './screens/page2/page2';
 import page3 from './screens/page3/page3';


 class MyHomeScreen extends React.Component {
   static navigationOptions = {
     drawerLabel: 'Home',
     drawerIcon: () => (
       <Icon name="home" style={{fontSize: 20}}/>
     ),
   };

   render() {
     return (
       <View>
         {/*onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}*/}
         <Toolbar title="Home"/>

       </View>
     );
   }
 }

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

 const BasicApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
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
});

AppRegistry.registerComponent('Homauto', () => BasicApp);
