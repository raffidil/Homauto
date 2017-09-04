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
                  position={'bottom'}
                  ref={r => (this.modal = r)}
                >
                <ScrollView>
                  <List>
                    <ListItem icon style={{marginTop: 10}}>
                      <Left>
                        <Icon name="lightbulb-outline" />
                      </Left>
                      <Body><Text>LAMP1 Bedroom</Text></Body>
                      <Right>
                        <Button transparent><Icon name='edit' /></Button>
                        <Button transparent><Icon name='delete' /></Button>
                      </Right>
                    </ListItem>
                    <ListItem icon style={{marginTop: 10}}>
                      <Left>
                        <Icon name="lightbulb-outline" />
                      </Left>
                      <Body><Text>LAMP2 Bedroom</Text></Body>
                      <Right>
                        <Button transparent><Icon name='edit' /></Button>
                        <Button transparent><Icon name='delete' /></Button>
                      </Right>
                    </ListItem>
                    <ListItem icon style={{marginTop: 10}}>
                      <Left>
                        <Icon name="lightbulb-outline" />
                      </Left>
                      <Body><Text>LAMP3 Bedroom</Text></Body>
                      <Right>
                        <Button transparent><Icon name='edit' /></Button>
                        <Button transparent><Icon name='delete' /></Button>
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
