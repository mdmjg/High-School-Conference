import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import   MyScreenNavigator   from "./src/components/Navigation";
export default class App extends Component {
      render() {
        return (
            <MyScreenNavigator/>
        );
      }
    }
