import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class ThirdScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Twitter'
  }
  render(){
    return <View style={
      {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
    <Text style={{fontSize: 30}}>
    This is tab 3
    </Text>

    </View>
  }
}
