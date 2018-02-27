import React, { Component } from 'react';
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import FlatListComponent from './FlatListComponent';

export default class App extends Component {
  render() {

    return (
      <View>
        <FlatListComponent/>
      </View>
    );
  }
}
