import React from 'react';
import {
    View
} from 'react-native';
import Toolbar from './Toolbar';

export default class Layout extends React.Component {
  props:{
    children: any,
    navigation: any,
    title: string
  }

  render() {
    return (
      <View>
        <Toolbar title={this.props.title} navigation={this.props.navigation}/>
          <View style={{marginTop: 60}}>
            {this.props.children}
          </View>
      </View>
    );
  }
}
