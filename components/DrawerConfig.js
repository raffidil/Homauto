import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {
    DrawerItems,
 } from 'react-navigation';
 import {Avatar} from 'react-native-elements';
 import navdrawer from "./nav.png";


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = (props) => (
  <View style={style.container}>
     <View style={{flexDirection: 'column', height: 180}}>
      <View  ><Image style={{width: 320, height: 180}} source={navdrawer}/></View>
      <Text style={{position: 'absolute', top: 105, left:20, fontSize: 25, color: '#ffffff'}}>NEO LIGHT</Text>
      <Text style={{position: 'absolute', top: 140, left:20, fontSize: 14, color: '#ffffff'}}>Device Manager</Text>
      <Avatar
        large
        rounded
        icon={{name: 'light-bulb',type: 'entypo', color: '#80deea', size: 50}}
        overlayContainerStyle={{backgroundColor: 'white'}}
        activeOpacity={0.7}
        containerStyle={{position: 'absolute', bottom: 90, left:20}}
/>
     </View>
     <View><DrawerItems {...props}/></View>

  </View>
);

export default CustomDrawerContentComponent;
