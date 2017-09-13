import React from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  ScrollView,
  TextInput,
  View,
  Slider,
} from 'react-native';
import { Card, CardItem, Left, Right, Body, Text , Button,List, ListItem} from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from '../../components/Layout';

export default class OptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rainbowSpeed: 100,
      rainbowcycleSpeed: 6,
      combineSpeed: 36,
      fireSpeed: 20,
      combineColor: 'ff00000000ff',
    };
  }

  props: {
    navigation: any,
  };

  changeEffect = (effect, ip) => {
    const url = `http://${ip}/${effect}`;
    fetch(url);
  };
  stop = ip => {
    fetch(`http://${ip}/stop`);
  };


  render() {
    const device = this.props.navigation.state.params;
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
        backgroundColor1: 'red',
        backgroundColor2: 'blue',
        lightColor: 'ff00000000ff',
      },
      {
        backgroundColor1: 'red',
        backgroundColor2: 'yellow',
        lightColor: 'ff0000ffff00',
      },
      {
        backgroundColor1: 'blue',
        backgroundColor2: 'green',
        lightColor: '0000ff00ff00',
      },
      {
        backgroundColor1: 'red',
        backgroundColor2: 'green',
        lightColor: 'ff000000ff00',
      },
      {
        backgroundColor1: 'green',
        backgroundColor2: 'yellow',
        lightColor: '00ff00ffff00',
      },
    ];

    return (
      <Layout
        navigation={this.props.navigation}
        title="Option"
        LeftIconName="help-circle"
        LeftIconType="material-community"
        RightIconName="md-arrow-back"
        RightIconType="ionicon">

              <List>
                <ListItem>
                  <Icon name="lightbulb-outline" />
                  <Left>
                    <Body>
                      <Text>{device.name}</Text>
                      <Text note>Light</Text>
                    </Body>
                  </Left>
                  <Right>
              <Button transparent onPress={() => this.stop(device.ip)}>
                <Icon color="gray" name="power-settings-new" />
              </Button></Right>
              </ListItem>
              </List>
        <ScrollView>
        <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <CardItem>
            <Left>
              <Icon name="rainbow" type="entypo" />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Rainbow</Text>
              </View>
            </Left>
            <Right>
              <Button
                small
                borderRadius={3}
                onPress={() => fetch(`http://${device.ip}/rainbow${this.state.rainbowSpeed}`)}
                backgroundColor="#00838f" >
                <Text>Apply</Text>
              </Button>
            </Right>
          </CardItem>
          <Text note style={{marginLeft: 25}}>Speed</Text>
          <CardItem>
            <Slider
              value={this.state.rainbowSpeed}
              onValueChange={rainbowSpeed => this.setState({ rainbowSpeed })}
              maximumValue={200} minimumValue={5}
              step={5} style={{flex: 1}}></Slider>
          </CardItem>
        </Card>
        <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            <Left>
              <Icon name="yelp" type="entypo"/>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Rainbow Cycle</Text>
              </View>
            </Left>
            <Right>
              <Button
                small
                borderRadius={3}
                onPress={() => fetch(`http://${device.ip}/allrainbow${this.state.rainbowcycleSpeed}`)}
                backgroundColor="#00838f" >
                <Text>Apply</Text>
              </Button>
            </Right>
          </CardItem>
          <Text note style={{marginLeft: 25}}>Speed</Text>
          <CardItem>
            <Slider value={this.state.rainbowcycleSpeed}
            onValueChange={rainbowcycleSpeed => this.setState({ rainbowcycleSpeed })}
            maximumValue={35} minimumValue={1} step={1} style={{flex: 1}}></Slider>
          </CardItem>
        </Card>
        <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <CardItem>
            <Left>
              <Icon name="ios-bonfire" type="ionicon"/>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Fire Flame</Text>
              </View>
            </Left>
            <Right>
              <Button
                small
                borderRadius={3}
                onPress={() => fetch(`http://${device.ip}/fire`)}
                backgroundColor="#00838f" >
                <Text>Apply</Text>
              </Button>
            </Right>
          </CardItem>
          <Text note style={{marginLeft: 25}}>Color</Text>
          <CardItem>
            {FireColors.map(color => (
              <Button
                small
                borderRadius={15}
                key={color.backgroundColor}
                onPress={() =>
                  this.changeColor(color.lightColor, device.ip)}
                style={{
                  backgroundColor: color.backgroundColor,
                  marginLeft: 8,
                  flex: 6,
                }}
              />
            ))}
          </CardItem>
        </Card>
        <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5 ,height:65}}>
          <CardItem>
            <Left>
              <Icon name="drink" type="entypo"/>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Dance Candle</Text>
              </View>
            </Left>
            <Right>
              <Button
                small
                borderRadius={3}
                onPress={() => fetch(`http://${device.ip}/jackcandle`)}
                backgroundColor="#00838f" >
                <Text>Apply</Text>
              </Button>

            </Right>
          </CardItem>
        </Card>
        <Card style={{ marginTop: 0, marginLeft: 5, marginRight: 5  }}>
          <CardItem>
            <Left>
              <Icon name="cycle" type="entypo"/>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>Combine Color</Text>
              </View>
            </Left>
            <Right>
              <Button
                small
                borderRadius={3}
                onPress={() => fetch(`http://${device.ip}/combine2=${this.state.combineColor}0${this.state.combineSpeed}`)}
                backgroundColor="#00838f" >
                <Text>Apply</Text>
              </Button>

            </Right>
          </CardItem>
          <Text note style={{marginLeft: 25}}>Color</Text>
          <CardItem>
            {CombineColors.map(color => (
              <Button
                iconLeft
                small
                transparent
                borderRadius={15}
                key={color.lightColor}
                onPress={ () => this.setState( { combineColor: color.lightColor } )}
                style={{
                  marginLeft: 8,
                  flex: 6,
                }}
              >
              <Icon
                  name="controller-record"
                  type="entypo"
                  color={color.backgroundColor1}/>
                  <Icon
                    style={{marginLeft:-10}}
                      name="controller-record"
                      type="entypo"
                      color={color.backgroundColor2}/>
              </Button>
            ))}
          </CardItem>
          <Text note style={{marginLeft: 25}}>Speed</Text>
          <CardItem>
            <Slider value={this.state.combineSpeed}
            onValueChange={combineSpeed => this.setState({ combineSpeed })} maximumValue={99} minimumValue={2} step={2} style={{flex: 1}}></Slider>
          </CardItem>
        </Card>
        </ScrollView>
      </Layout>
    );
  }
}
