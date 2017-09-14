import React from 'react';
import Layout from '../../components/Layout';
import { List, ListItem, Text, Right, Left, Body, Button, CheckBox,Card,CardItem } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import { ScrollView, TextInput,TouchableHighlight, View } from 'react-native';
import { getDevices, saveToDatabase } from '../../db';
import Snackbar from 'react-native-snackbar';


export default class Groups extends React.Component {
  props: {
    navigation: any,
  };


  state = { devices: [], name: '', };


  removeDevice = index => {
    const devices = this.state.devices.filter((x, i) => i !== index);
    this.setState({ devices }, () => saveToDatabase({ devices }));
  };

  componentWillMount() {
    getDevices().then(devices => this.setState({ devices }));
  }

  next(){
    if(this.state.name != ''){
    this.modal1.close();
    this.modal2.open();
  }
    else {
      Snackbar.show({
        title: 'Enter a NAME for new group',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#E53935',
      });
    }
  }

  render() {

    return (
      <Layout navigation={this.props.navigation} title="Groups"
              LeftIconName="help-circle"
              LeftIconType="material-community"
              RightIconName="md-arrow-back"
              RightIconType="ionicon"
              NavigationScreen="Setting">
              <Modal
                backButtonClose
                style={{
                  justifyContent: 'center',
                  height: 150,
                  width: 300,
                }}
                animationDuration={200}
                position={'center'}
                ref={r => (this.modal1 = r)}
                swipeToClose={false}
              >
                <Text style={{ marginLeft: 20 }}>Add a new Light-Group</Text>
                  <TextInput
                    maxLength={10}
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    style={{ width: 260, marginLeft: 20, marginTop: 10}}
                    clearButtonMode={'always'}
                    placeholder={'New Group Name'}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: -10,
                      marginTop: 10,
                      alignSelf: 'flex-end',
                      marginRight: 10,
                    }}
                  >
                    <Button transparent onPress={() => this.modal1.close()}>
                      <Text style={{ color: 'teal', fontWeight: 'bold' }}>Cancel</Text>
                    </Button>
                    <Button transparent onPress={() => this.next()}>
                      <Text style={{ color: 'teal', fontWeight: 'bold' }}>Next</Text>
                    </Button>
                  </View>
            </Modal>
              <Modal
                backButtonClose
                style={{
                  height: 440,
                  width: 340,
                }}
                animationDuration={200}
                position={'center'}
                ref={r => (this.modal2 = r)}
                swipeToClose={false}
              >
              <List>
                <Text style={{marginLeft: 20, marginTop: 15}}>Select lights to group</Text>
                <ScrollView>
                  {this.state.devices &&
                    this.state.devices.map((device, index) => (
                      <ListItem icon style={{ marginTop: 10 }} key={device.ip}>
                        <Left>
                          <Icon name="lightbulb-outline" />
                        </Left>
                        <Body>
                          <Text>{device.name}</Text>
                        </Body>
                        <Right style={{ marginRight: 20 }}>
                          <CheckBox color='black' checked={true} />
                        </Right>
                      </ListItem>
                    ))}
                </ScrollView>
                <View style={{
                    position: 'absolute',top:375, right:0,  }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: -10,
                    marginTop: 10,
                    alignSelf: 'flex-end',
                    marginRight: 10,
                  }}
                >
                  <Button transparent onPress={() => this.modal2.close()}>
                    <Text style={{ color: 'teal', fontWeight: 'bold' }}>Cancel</Text>
                  </Button>
                  <Button transparent>
                    <Text style={{ color: 'teal', fontWeight: 'bold' }}>ADD</Text>
                  </Button>
                </View>
                </View>
              </List>
              </Modal>
              <List >
                <ListItem onPress={() => this.modal1.open()}>
                  <Icon name="add"/>
                  <Text style={{marginLeft: 15}}>Add new Light Group</Text>
                </ListItem>
              </List>
              <Text style={{marginLeft: 15,marginTop:10, color: 'gray'}}>Groups Manager</Text>
              <ScrollView>

              </ScrollView>

      </Layout>
    );
  }
}
