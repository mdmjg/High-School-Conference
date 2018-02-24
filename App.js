import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class TwitterUI extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.tweetBox1}>
          <Text style = {styles.userNameText}> Hello world! You are amazing! </Text>
          </View>
        <View style = {styles.tweetBox2}>
          <Text style = {styles.userNameText}> My name is Mar </Text>
          <Image source = {{uri: 'https://facebook.github.io/react/logo-og.png'}}
                            style = {styles.profilePicture} />
        </View>
        <View style = {styles.tweetBox1}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userNameText: {
    fontFamily: 'helvetica',
    fontSize: 20,
    color: '#00008b',
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  activeTitle: {
    color: 'red',
  },
  tweetBox1: {
      flex: 9,
      backgroundColor: '#b0e0e6', //This is a temporary color
      borderRadius: 20,
      margin: 10,
      marginTop: 20,
    },
    tweetBox2: {
        flex: 9,
        backgroundColor: '#556b2f', //This is a temporary color
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
      },
  profilePicture: {
      width: 44,
      height: 44,
      borderRadius: 44/2,
    },
});
