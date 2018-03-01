import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // tabBarIcon: ({tintColor}) => (
    //   <Image
    //   source={require('../../../images/sched.png')}
    //   style={{width:20, height: 20, tintColor: 'white'}}>
    //   </Image>
    // )
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 30}}>
        This is tab 1
        </Text>
      </View>)
  }
}
