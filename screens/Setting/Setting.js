import React from 'react';
import Layout from '../../components/Layout';
import {
  List,
  ListItem,
  Text,
  Right,
  Left,
  Body,
  Card,
  CardItem,
  Button,
} from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { AppRegistry, ScrollView, TextInput, View, AsyncStorage } from 'react-native';


export default class SettingPage extends React.Component {
  props: {
    navigation: any,
  };

  static navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: () => <Icon name="settings" />,
  };

  render() {
    return (
      <Layout navigation={this.props.navigation} title="Setting">

                <Modal
                  style={{
                    height: 450,
                  }}
                  animationDuration={300}
                  position={'bottom'}
                  ref={r => (this.modal = r)}
                >
                <ScrollView>
                  <List>
                    <ListItem icon style={{marginTop: 10}}>
                      <Left>
                        <Icon name="lightbulb-outline" />
                      </Left>
                      <Body>
                      <Text>bedroom light1</Text>
                      </Body>
                      <Right style={{marginRight: -10}}>
                        <Button small transparent style={{marginRight: -10}}><Icon size={20} name='edit' /></Button>
                        <Button small transparent style={{marginRight: -10}}><Icon size={20} name='signal-wifi-off' type='materialicons'/></Button>
                        <Button small transparent style={{marginRight: -10}}><Icon size={20} name='delete' /></Button>
                      </Right>
                    </ListItem>
                  </List>
                </ScrollView>
                </Modal>

      <ScrollView>
        <List>
          <ListItem onPress={() => this.modal.open()}><Text>Devices</Text></ListItem>
        </List>
      </ScrollView>
  </Layout>
    );
  }
}
