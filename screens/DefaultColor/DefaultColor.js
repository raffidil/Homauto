import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox,Card,CardItem } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput,TouchableHighlight, View } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';
import Snackbar from 'react-native-snackbar';


export default class DefaultColor extends React.Component {
  props: {
    navigation: any,
  };


  state = { devices: [], name: '', };

  componentWillMount() {
    getDevices().then(devices => this.setState({ devices }));
  }


  render() {

    return (
      <Layout navigation={this.props.navigation} title="Default Color"
              LeftIconName="help-circle"
              LeftIconType="material-community"
              RightIconName="md-arrow-back"
              RightIconType="ionicon"
              NavigationScreen="Setting">
                <ScrollView>
                  <List>
                    {this.state.devices &&
                      this.state.devices.map((device, index) => (
                        <ListItem icon style={{ marginTop: 10 }} key={device.ip}>
                          <Left>
                            <Icon name="lightbulb-outline" />
                          </Left>
                          <Body>
                            <Text>{device.name}</Text>
                          </Body>
                          <Right style={{ marginRight: -10 }}>
                            <Button
                              small
                              transparent
                              style={{ marginRight: -5 }}
                              onPress={() =>
                                this.props.navigation.navigate('DefaultColorPickerScreen', device)}
                              >
                              <Icon
                                size={20}
                                name="md-color-palette"
                                type="ionicon"
                            />
                            </Button>
                          </Right>
                        </ListItem>
                      ))}
                  </List>
                </ScrollView>

      </Layout>
    );
  }
}
