import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default class Mainscreen extends Component {
  render() {
     return (
       <ScrollView>
       <View style={styles.container}>
        <Text style = {styles.header}> SCHEDULE </Text>
          <View style={styles.green}>
              <Text style={styles.eventHead}>8:30-9:30 </Text>
              <Text style={styles.eventTitle}>Registration & Opening Remarks</Text>
              <Text style={styles.eventInfo}>West Forum</Text>
          </View>
           <View style={styles.lightBlue}>
              <Text style={styles.eventHead}>9:30-10:00</Text>
              <Text style={styles.eventTitle}>Keynote Speaker</Text>
              <Text style={styles.eventInfo}>Torch Club</Text>
           </View>
           <View style={styles.darkBlue}>
              <Text style={styles.eventHead}>10:00-10:20</Text>
              <Text style={styles.eventTitle}>Coffee Break</Text>
              <Text style={styles.eventInfo}>Torch Club</Text>
           </View>
           <View style={styles.green}>
               <Text style={styles.eventHead}>10:30-12:00 </Text>
               <Text style={styles.eventTitle}>Workshop One</Text>
           </View>
           <View style={styles.darkBlue}>
               <Text style={styles.eventHead}>12:00 - 13:00 </Text>
               <Text style={styles.eventTitle}>Lunch</Text>
               <Text style={styles.eventInfo}>Torch Club</Text>
           </View>
           <View style={styles.green}>
               <Text style={styles.eventHead}>13:00-14:30 </Text>
               <Text style={styles.eventTitle}>Workshop Two</Text>
           </View>
           <View style={styles.lightBlue}>
               <Text style={styles.eventHead}>14:30-15:00 </Text>
               <Text style={styles.eventTitle}>Keynote Speaker</Text>
               <Text style={styles.eventInfo}>West Forum</Text>
           </View>
           <View style={styles.darkBlue}>
                 <Text style={styles.eventHead}>15:00-15:30 </Text>
                 <Text style={styles.eventTitle}>Snack Break</Text>
                 <Text style={styles.eventInfo}>West Forum</Text>
           </View>
           <View style={styles.lightBlue}>
               <Text style={styles.eventHead}>15:30-16:30 </Text>
               <Text style={styles.eventTitle}>Challenge </Text>
               <Text style={styles.eventInfo}>East Forum</Text>
           </View>
           <View style={styles.green}>
               <Text style={styles.eventHead}> 16:30-17:15 </Text>
               <Text style={styles.eventTitle}>Student Panel & Closing Remarks</Text>
               <Text style={styles.eventInfo}>West Forum</Text>
           </View>
           <View style={styles.lightBlue}>
               <Text style={styles.eventHead}> 17:15-18:00 </Text>
               <Text style={styles.eventTitle}>Optional Admissions Session</Text>
               <Text style={styles.eventInfo}>West Forum</Text>
        </View>
        </View>
        </ScrollView>
   )}
 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  lightBlue: {
//    flex: 2,
    backgroundColor: 'rgb(181,200,240)', // rgb(181,212,229)'
    borderRadius: 20,
    margin: 5,
  //  marginTop: 10,
    opacity: 5,
    height: 100,
    width: 365,
    justifyContent: 'flex-start',
  },
  green: {
  //  flex: 2,
    backgroundColor: 'rgb(158,205,193)',
    borderRadius: 20,
    margin: 5,
    opacity: 5,
    height: 100,
    width: 365,
  },
  darkBlue: {
//    flex: 2,
    backgroundColor: 'rgb(93,129,177)',
    borderRadius: 20,
    margin: 5,
    height: 100,
    width: 365,
  },
  eventHead: {
    fontSize: 15,
    margin: 10,
    color: 'beige',
    backgroundColor: 'transparent',
    fontFamily: 'helvetica',
  },
  eventTitle: {
    fontSize: 20,
    margin: 10,
    marginTop: 0,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'helvetica',

  },
  eventInfo: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: 'aliceblue',
    backgroundColor: 'transparent',
    fontFamily: 'helvetica',
    opacity: 3,
    fontStyle: 'italic',
  },
  eventAbout: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'helvetica',
//    fontSize: 'italic'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'helvetica',
    
  }
});
