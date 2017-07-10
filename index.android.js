/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import {
   TabNavigator,
 } from 'react-navigation';
 import {
   AppRegistry,
   View
 } from 'react-native';
 import page1 from './screens/page1';
 import page2 from './screens/page2';

 const BasicApp = TabNavigator({
   Main: {screen: page1},
   Setup: {screen: page2},
 });

AppRegistry.registerComponent('Homauto', () => BasicApp);
