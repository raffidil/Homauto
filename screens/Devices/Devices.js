import React from 'react';
import {
    Text,
} from 'react-native';
import {Icon, List, ListItem} from 'react-native-elements';
import Layout from '../../components/Layout';
import list from './List';

export default class Devices extends React.Component {
  props:{
      navigation: any
  }


  static navigationOptions = {
    drawerLabel: 'Devices',
    drawerIcon: () => (
      <Icon name="cloud" />
    ),
  };


  render() {
    return (
      <Layout navigation={this.props.navigation} title="Devices">
        <Text>Devices</Text>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                  />
              ))
            }
          </List>
      </Layout>
    );
  }
}
