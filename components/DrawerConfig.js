import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import navdrawer from './nav.png';
import icon from './ic_launcher.png';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = props => (
  <View style={style.container}>
    <View style={{ flexDirection: 'column', height: 180 }}>
      <View>
        <Image style={{ width: '100%', height: 180 }} source={navdrawer} />
      </View>
      <Text
        style={{
          position: 'absolute',
          top: 105,
          left: 20,
          fontSize: 25,
          color: '#ffffff',
        }}
      >
        NEO LIGHT
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: 140,
          left: 20,
          fontSize: 14,
          color: '#ffffff',
        }}
      >
        Device Manager
      </Text>
      <Image
        source={icon}
        style={{
          width: 80,
          height: 80,
          position: 'absolute',
          bottom: 90,
          left: 20,
        }}
      />
    </View>
    <View>
      <DrawerItems {...props} />
    </View>
  </View>
);

export default CustomDrawerContentComponent;
