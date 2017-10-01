import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Text,
  Button,
  List,
  ListItem,
} from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from '../../components/Layout';

export default class OptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      combineSpeed: 75,
      combineColor: 'ff00000000ff',
    };
  }

  props: {
    navigation: any,
  };

  apply = (groupOrDevice, command) => {
    if (groupOrDevice.type === 'device') {
      fetch(`http://${groupOrDevice.ip}${command}`);
    } else if (groupOrDevice.type === 'group') {
      groupOrDevice.ips.forEach(ip => fetch(`http://${ip}${command}`));
    }
  };

  render() {
    const device = this.props.navigation.state.params;
    const Speeds = [
      {
        label: '1',
        rainbow: 10,
        allrainbow: 2,
        combineSpeed: 15,
      },
      {
        label: '2',
        rainbow: 25,
        allrainbow: 7,
        combineSpeed: 35,
      },
      {
        label: '3',
        rainbow: 70,
        allrainbow: 13,
        combineSpeed: 55,
      },
      {
        label: '4',
        rainbow: 110,
        allrainbow: 20,
        combineSpeed: 75,
      },
      {
        label: '5',
        rainbow: 200,
        allrainbow: 30,
        combineSpeed: 99,
      },
    ];
    const FireColors = [
      {
        backgroundColor: '#BA68C8',
        lightColor: 'DD00FF',
      },
      {
        backgroundColor: '#5C6BC0',
        lightColor: '0400FF',
      },
      {
        backgroundColor: '#03A9F4',
        lightColor: '00D7FF',
      },
      {
        backgroundColor: '#64DD17',
        lightColor: '00FF10',
      },
      {
        backgroundColor: '#FFFF00',
        lightColor: 'FFFF00',
      },
      {
        backgroundColor: '#FFA000',
        lightColor: 'FF7200',
      },
      {
        backgroundColor: '#F44336',
        lightColor: 'FF0000',
      },
    ];
    const CombineColors = [
      {
        backgroundColor1: '#F50057',
        backgroundColor2: '#1565C0',
        lightColor: 'ff00000000ff',
      },
      {
        backgroundColor1: '#E65100',
        backgroundColor2: '#FFC400',
        lightColor: 'ff0000ffff00',
      },
      {
        backgroundColor1: '#03A9F4',
        backgroundColor2: '#8BC34A',
        lightColor: '0000ff00ff00',
      },
      {
        backgroundColor1: '#EF6C00',
        backgroundColor2: '#64DD17',
        lightColor: 'ff000000ff00',
      },
      {
        backgroundColor1: '#F06292',
        backgroundColor2: '#90CAF9',
        lightColor: 'F500572196F3',
      },
    ];

    return (
      <Layout
        navigation={this.props.navigation}
        title="Option"
        RightMenuDisable={true}
        RightIconName="md-arrow-back"
        RightIconType="ionicon"
        NavigationScreen="DrawerOpen"
      >
        <List>
          <ListItem>
            {device.type === 'device' && <Icon name="lightbulb-outline" />}
            {device.type === 'group' && (
              <Icon name="group-work" type="materialicon" />
            )}
            <Left>
              <Body>
                <Text>{device.name}</Text>
                <Text note>
                  {device.type === 'device' && 'Light'}
                  {device.type === 'group' && 'Group'}
                </Text>
              </Body>
            </Left>
            <Right>
              <Button transparent onPress={() => this.apply(device, '/stop')}>
                <Icon color="gray" name="power-settings-new" />
              </Button>
            </Right>
          </ListItem>
        </List>
        <ScrollView>
          <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
            <CardItem>
              <Left>
                <Icon name="rainbow" type="entypo" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Rainbow</Text>
                </View>
              </Left>
            </CardItem>
            <Text note style={{ marginLeft: 25 }}>
              Speed
            </Text>
            <CardItem>
              {Speeds.map(speed => (
                <Button
                  small
                  borderRadius={15}
                  key={speed.label}
                  onPress={() => this.apply(device, `/rainbow${speed.rainbow}`)}
                  style={{
                    marginLeft: 8,
                    flex: 6,
                    justifyContent: 'center',
                    backgroundColor: '#607D8B',
                  }}
                >
                  <Text>{speed.label}</Text>
                </Button>
              ))}
            </CardItem>
          </Card>
          <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
            <CardItem>
              <Left>
                <Icon name="yelp" type="entypo" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Rainbow Cycle</Text>
                </View>
              </Left>
            </CardItem>
            <Text note style={{ marginLeft: 25 }}>
              Speed
            </Text>
            <CardItem>
              {Speeds.map(speed => (
                <Button
                  small
                  borderRadius={15}
                  key={speed.label}
                  onPress={() =>
                    this.apply(device, `/allrainbow${speed.allrainbow}`)}
                  style={{
                    marginLeft: 8,
                    flex: 6,
                    justifyContent: 'center',
                    backgroundColor: '#607D8B',
                  }}
                >
                  <Text>{speed.label}</Text>
                </Button>
              ))}
            </CardItem>
          </Card>
          <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
            <CardItem>
              <Left>
                <Icon name="ios-bonfire" type="ionicon" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Fire Flame</Text>
                </View>
              </Left>
              <Right>
                <Button
                  small
                  borderRadius={3}
                  onPress={() => this.apply(device, `/fire`)}
                  backgroundColor="#00838f"
                >
                  <Text>Apply</Text>
                </Button>
              </Right>
            </CardItem>
            <Text note style={{ marginLeft: 25 }}>
              Color
            </Text>
            <CardItem>
              {FireColors.map(color => (
                <Button
                  small
                  borderRadius={15}
                  key={color.backgroundColor}
                  onPress={() => this.changeColor(color.lightColor, device.ip)}
                  style={{
                    backgroundColor: color.backgroundColor,
                    marginLeft: 8,
                    flex: 6,
                  }}
                />
              ))}
            </CardItem>
          </Card>
          <Card
            style={{ marginTop: 0, marginLeft: 5, marginRight: 5, height: 67 }}
          >
            <CardItem style={{ marginTop: 5 }}>
              <Left>
                <Icon name="drink" type="entypo" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Dance Candle</Text>
                </View>
              </Left>
              <Right>
                <Button
                  small
                  borderRadius={3}
                  onPress={() => this.apply(device, `/jackcandle`)}
                  backgroundColor="#00838f"
                >
                  <Text>Apply</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
            <CardItem>
              <Left>
                <Icon name="cycle" type="entypo" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Combine Color</Text>
                </View>
              </Left>
            </CardItem>
            <Text note style={{ marginLeft: 25 }}>
              Color
            </Text>
            <CardItem>
              {CombineColors.map(color => (
                <Button
                  iconLeft
                  small
                  backgroundColor="#FFFFFF"
                  borderRadius={15}
                  key={color.lightColor}
                  onPress={() =>
                    this.setState({ combineColor: color.lightColor }, () =>
                      this.apply(
                        device,
                        `/combine2=${this.state.combineColor}0${this.state
                          .combineSpeed}`
                      )
                    )}
                  style={{
                    marginLeft: 5,
                    flex: 6,
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    name="triangle-down"
                    type="entypo"
                    size={37}
                    color={color.backgroundColor1}
                  />
                  <Icon
                    style={{ marginLeft: -15 }}
                    name="triangle-up"
                    type="entypo"
                    size={37}
                    color={color.backgroundColor2}
                  />
                </Button>
              ))}
            </CardItem>
            <Text note style={{ marginLeft: 25 }}>
              Speed
            </Text>
            <CardItem>
              {Speeds.map(speed => (
                <Button
                  small
                  borderRadius={15}
                  key={speed.label}
                  onPress={() =>
                    this.setState({ combineSpeed: speed.combineSpeed }, () =>
                      this.apply(
                        device,
                        `/combine2=${this.state.combineColor}0${this.state
                          .combineSpeed}`
                      )
                    )}
                  style={{
                    marginLeft: 8,
                    flex: 6,
                    justifyContent: 'center',
                    backgroundColor: '#607D8B',
                  }}
                >
                  <Text>{speed.label}</Text>
                </Button>
              ))}
            </CardItem>
          </Card>
        </ScrollView>
      </Layout>
    );
  }
}
