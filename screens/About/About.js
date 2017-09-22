import React from 'react';
import {
  Text
} from 'react-native';
import Layout from '../../components/Layout';
import {Icon} from 'react-native-elements';
export default class AboutPage extends React.Component {
  props:{
      navigation: any
  }

  static navigationOptions = {
    drawerLabel: 'Help',
    drawerIcon: () => (
      <Icon name="help"/>
    ),
  };

  render() {
    return (
      <Layout
        navigation={this.props.navigation}
        title="Help"
        RightMenuDisable={true}
        RightIconName="menu"
        NavigationScreen="DrawerOpen"
         >
        <Text>About</Text>
      </Layout>
    );
  }
}
