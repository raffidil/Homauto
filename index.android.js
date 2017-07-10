import React from 'react';
 import {
   DrawerNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   View,
   StyleSheet,
   Button
 } from 'react-native';
 import page1 from './screens/page1';
 import page2 from './screens/page2';
 import page3 from './screens/page3/page3';

 class MyHomeScreen extends React.Component {
   static navigationOptions = {
     drawerLabel: 'Home',
    //  drawerIcon: ({ tintColor }) => (
    //    <Image
    //      source={require('./chats-icon.png')}
    //      style={[styles.icon, {tintColor: tintColor}]}
    //    />
    //  ),
   };

   render() {
     return (
       <Button
         onPress={() => this.props.navigation.navigate('Notifications')}
         title="Go to page 3"
       />
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
