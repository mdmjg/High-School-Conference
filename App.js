import React, { Component } from 'react';
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import FlatListComponent from './FlatListComponent';


if(__DEV__) {
  require('react-devtools');
}
export default class App extends Component {
  render() {

    return (
      <View>
        <FlatListComponent/>
      </View>
    );
  }
}
