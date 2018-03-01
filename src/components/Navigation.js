import React, { Component } from "react";
import { View,Text, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {TabNavigator} from "react-navigation";
import FirstScreen from '../../tabs/FirstScreen';
import SecondScreen from '../../tabs/SecondScreen';
import ThirdScreen from '../../tabs/ThirdScreen';

const MyScreenNavigator = TabNavigator({
  Tab1: {screen: FirstScreen},
  Tab2: {screen:SecondScreen},
  Tab3: {screen: ThirdScreen}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'lightblue',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'grey',
    inactiveBackgroundColor: 'white',
    labelStyle: {
      fontSize: 15,
      padding: 10
    }
  }
}
);

MyScreenNavigator.navigationOptions = {
  title: "Tab Example"
};

export default MyScreenNavigator;
