import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modalbox';

import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Content,
} from 'native-base';
import { Icon } from 'react-native-elements';

export default class Layout extends React.Component {
  props: {
    children: any,
    navigation: any,
    title: string,
    LeftIconName: string,
    LeftIconType: string,
    RightIconName: string,
    RightIconType: string,
    rightMenuOnPress: () => void,
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#0097a7'}} androidStatusBarColor='#00838f'>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name={this.props.RightIconName} type={this.props.RightIconType} color="#ffffff"/>
            </Button>
          </Left>
          <Body>
            <Title>
              {this.props.title}
            </Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.rightMenuOnPress} >
              <Icon name={this.props.LeftIconName} type={this.props.LeftIconType} color="#ffffff"/>
            </Button>
          </Right>
        </Header>
        {this.props.children}
      </Container>
    );
  }
}

// <View>
// <Toolbar title={this.props.title} navigation={this.props.navigation}/>
// <View style={{marginTop: 60}}>
// </View>
//     </View>
