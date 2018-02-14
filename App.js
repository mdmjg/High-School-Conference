import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {TabNavigator} from "react-navigation";
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';
import ThirdScreen from './tabs/ThirdScreen';


var MyScreenNavigator = TabNavigator({
  Tab1: {screen: FirstScreen},
  Tab2: {screen:SecondScreen},
  Tab3: {screen: ThirdScreen}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: 'white',
    activeBackgroundColor: 'green',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'green',
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

/*export default class tableView extends Component {
  render() {
    const tableHead = ['Time', 'Activity'];
    const tableTitle = ['10:00', '12:00', '15:00', '17:00'];
    const tableData = [
      ['Workshop 1'],
      ['Workshop 2'],
      ['Workshop 3'],
      ['Workshop 4'],
    ];
    return (
      <View>
        <Table>
          <Row data={tableHead} flexArr={[1, 2]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={{flexDirection: 'row'}}>
            <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[1, 1]} style={styles.row}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28},
  text: { textAlign: 'center' }
})
*/
