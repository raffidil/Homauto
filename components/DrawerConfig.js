import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {
    DrawerItems,
 } from 'react-navigation';
 import {Avatar} from 'react-native-elements';


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = (props) => (
  <View style={style.container}>
     <View style={{flexDirection: 'column', height: 180}}>
      <View style={{backgroundColor: '#b2ebf2', flex: 1}} />
      <Text style={{position: 'absolute', top: 100, left:20, fontSize: 23}}>HomAuto</Text>
      <Text style={{position: 'absolute', top: 140, left:20, fontSize: 12}}>Your HomAuto Devices Manager</Text>
      <Avatar
        large
        rounded
        icon={{name: 'home', color: 'lightblue'}}
        overlayContainerStyle={{backgroundColor: 'white'}}
        activeOpacity={0.7}
        containerStyle={{position: 'absolute', bottom: 90, left:20}}
/>
     </View>
    <DrawerItems {...props} />
  </View>
);

export default CustomDrawerContentComponent;
