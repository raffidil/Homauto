import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { Text, Right, Left, Body, Card, CardItem, Button } from 'native-base';
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
         <ScrollView>
         <View style={{ marginTop: 10}}>
           <Text style={{ marginLeft: 10, fontSize: 20 }}>Configuration</Text>
           <Card>
             <CardItem header><Text style={{ fontWeight: 'bold', fontSize: 20 }}>Connect Light to WiFi</Text>
         </CardItem>
         <CardItem>
           <Text style={{ fontWeight: 'bold'}}>
             Step 1:
           </Text></CardItem>
         <CardItem>
              <Body style={{ marginLeft: 15, justifyContent: 'center'}}>
                <Text>
                  Power on the NeoLight (plug into micro-USB) and wait till it turns to green.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{ fontWeight: 'bold'}}>
                Step 2:
              </Text></CardItem>
            <CardItem>
                 <Body style={{ marginLeft: 15, justifyContent: 'center'}}>
                   <Text>
                     Go to WiFi Setting, and connect to "NeoLight" access point.
                   </Text>
                 </Body>
               </CardItem>
               <CardItem>
                 <Text style={{ fontWeight: 'bold'}}>
                   Step 3:
                 </Text></CardItem>
               <CardItem>
                    <Body style={{ marginLeft: 15, justifyContent: 'center'}}>
                      <Text>
                        Open Browser and type "192.168.4.1" in URL.
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Text style={{ fontWeight: 'bold'}}>
                      Step 4:
                    </Text></CardItem>
                  <CardItem>
                       <Body style={{ marginLeft: 15, justifyContent: 'center'}}>
                         <Text>
                          After load the page , click on "Configure WiFi"
                         </Text>
                       </Body>
                     </CardItem>
           </Card>
         </View>
         </ScrollView>
      </Layout>
    );
  }
}
