import React from 'react';
import {
    View
} from 'react-native';
import Toolbar from './Toolbar';

export default class Layout extends React.Component {
  props:{
    children: any,
    navigation: any
  }
  
  render() {
    return (
      <View>
        <Toolbar title="page 1" navigation={this.props.navigation}/>
          <View style={{marginTop: 60, marginLeft: 10}}>
            {this.props.children}
          </View>
      </View>
    );
  }
}
