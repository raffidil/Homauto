import React from 'react';
 import {
   View,
   StatusBar
 } from 'react-native';
 import { Toolbar as MaterialToolbar} from 'react-native-material-design';

 export default class Toolbar extends React.Component {

   props:{
     title: string,
     navigation: any
   }

   render() {
     return (
       <View >
         <StatusBar backgroundColor="#00838f" barStyle="light-content" />
         <MaterialToolbar
               title={navigator && navigator.currentRoute ? navigator.currentRoute.title : this.props.title}
               icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
               onIconPress={() => this.props.navigation.navigate('DrawerOpen')}
               style={{backgroundColor: '#0097a7'}}
               />
       </View>
     );
   }
 }
