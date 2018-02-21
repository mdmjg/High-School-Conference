import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Image
      source={require('../images/home-2.png')}
      style={{width:20, height: 20, tintColor: 'white'}}>
      </Image>
    )
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
    This is tab 1
    </Text>
    <Image source = {require('./map/Map.jpg')}/>
    </View>
  }
}
