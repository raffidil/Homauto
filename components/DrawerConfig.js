import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {
    DrawerItems,
 } from 'react-navigation';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = (props) => (
  <View style={style.container}>
     <View style={{flexDirection: 'column', height: 100}}>
      <View style={{backgroundColor: 'lightblue', flex: 1}} />
      <Text style={{position: 'absolute', top: 50, left:50}}>Hello World</Text>
     </View>
    <DrawerItems {...props} />
  </View>
);

export default CustomDrawerContentComponent;
