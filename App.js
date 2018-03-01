import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import   MyScreenNavigator   from "./src/Navigators/router";
export default class App extends Component {
      render() {
        return (
          <View style={{flex:1}}>
            <MyScreenNavigator/>
          </View>
        );
      }
    }
