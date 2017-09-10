import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text , Button} from 'native-base';
import { Icon } from 'react-native-elements';
import Layout from '../../components/Layout';

export default class OptionScreen extends React.Component {
  props: {
    navigation: any,
  };

  changeEffect = (effect, ip) => {
    const url = `http://${ip}/${effect}`;
    fetch(url);
  };


  render() {
    const device = this.props.navigation.state.params;

    const effects = [
      {
        functionName: 'rainbow',
        functionTitle: 'rnb1',
        functionIcon: 'rainbow',
        functionIconType: 'entypo',
      },
      {
        functionName: 'allrainbow',
        functionTitle: 'rnb2',
        functionIcon: 'yelp',
        functionIconType: 'entypo',
      },
      {
        functionName: 'jackcandle',
        functionTitle: 'Jck',
        functionIcon: 'water',
        functionIconType: 'entypo',
      },
      {
        functionName: 'fire',
        functionTitle: 'Flm',
        functionIcon: 'ios-bonfire',
        functionIconType: 'ionicon',
      },
    ];

    return (
      <Layout navigation={this.props.navigation} title="Option" iconName="help-circle" iconType="material-community">
        <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
          <CardItem>
            {effects.map(effect => (
              <Button
                borderRadius={12}
                key={effect.functionName}
                onPress={() =>
                  this.changeEffect(effect.functionName, device.ip)}
                style={{
                  backgroundColor: '#90A4AE',
                  marginLeft: 8,
                  flex: 6,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  name={effect.functionIcon}
                  type={effect.functionIconType}
                  color="#ffffff"
                />
              </Button>
            ))}
          </CardItem>
        </Card>
      </Layout>
    );
  }
}
