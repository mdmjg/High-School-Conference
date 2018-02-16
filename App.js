import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Mainscreen extends Component {
  render() {
     return (
       <View style={styles.container}>
          <View style={styles.currEvent}>
              <Text style={styles.eventHead}>Happening now </Text>
              <Text style={styles.eventTitle}>Welcome Address</Text>
              <Text style={styles.eventInfo}>East Forum</Text>
          </View>
           <View style={styles.nextEvent}>
              <Text style={styles.eventHead}>Up next</Text>
           </View>
           <View style={styles.allEvents}>
              <Text style={styles.eventHead}>Full schedule</Text>
           </View>
         </View>
   )}
 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  currEvent: {
    flex: 5,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
  },
  nextEvent: {
    flex: 3,
    backgroundColor: 'steelblue',
    borderRadius: 20,
    margin: 10,
  },
  allEvents: {
    flex: 2,
    backgroundColor: 'navy',
    borderRadius: 20,
    margin: 10,
  },
  eventHead: {
    fontSize: 40,
    margin: 10,
    color: 'lightcyan',
  },
  eventTitle: {
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  eventInfo: {
    fontSize: 24,
    marginLeft: 10,
    color: 'white'
  }
});
