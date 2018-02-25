import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class TwitterUI extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.tweetBox1}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: 'https://facebook.github.io/react/logo-og.png'}}
                           style = {styles.profilePicture} />
        </View>
         <View style = {styles.textInTweet}>
           <Text style = {styles.userNameText}> Hello world! You are amazing! </Text>
        </View>
        </View>
        <View style = {styles.tweetBox2}>
          <View style = {styles.imageInTweet}>
            <Image source = {{uri: 'https://facebook.github.io/react/logo-og.png'}}
                          style = {styles.profilePicture} />
          </View>
          <View style = {styles.textInTweet}>
            <View style = {styles.userNameBox}>
              <Text style = {styles.userNameText}> My name is Mar </Text>
            </View>
            <View style = {styles.tweetTextBox}>
              <Text style = {styles.userNameInfo}> Mar </Text>
          </View>
          </View>
          </View>
        <View style = {styles.tweetBox3}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
        <View style = {styles.tweetBox1}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
        <View style = {styles.tweetBox2}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
        <View style = {styles.tweetBox3}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
        <View style = {styles.tweetBox1}>
          <Text style = {styles.userNameText}> Im so cool </Text>
        </View>
        <View style = {styles.tweetBox2}>
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
    fontSize: 10,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  userNameInfo: {
    fontFamily: 'helvetica',
    fontSize: 10,
    color: 'pink',
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  activeTitle: {
    color: 'red',
  },
  tweetBox1: {
      flex: 9,
      backgroundColor: 'rgb(181,212,229)', //This is a temporary color
      borderRadius: 20,
      margin: 10,
      marginTop: 20,
      flexDirection: 'row',
    },
    imageInTweet: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      alignItems: 'center',
    },
    textInTweet: { //This is the parent of the text that will be within the tweet
      flex: 3,
      backgroundColor: 'yellow',
      justifyContent: 'left',
      flexDirection: 'column',
    },
    userNameBox: { //Child 1 from textInTweet
      flex: 1,
      backgroundColor: 'orange',
      justifyContent: 'left',
    },
    tweetTextBox: { //Child 2 from text in tweet
      flex: 2,
      backgroundColor: '#8b008b',
      justifyContent: 'left',
    },
    tweetBox2: {
        flex: 9,
        backgroundColor: 'rgb(158,205,193)', //This is a temporary color
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
        flexDirection: 'row',
      //  justifyContent: 'center',
      },
      tweetBox3: {
          flex: 9,
          backgroundColor: 'rgb(93,129,177)', //This is a temporary color
          borderRadius: 20,
          margin: 10,
          marginTop: 20,
          flexDirection: 'row',
        //  justifyContent: 'center',
        },
      profilePicture: {
          width: 55,
          height: 55,
          borderRadius: 55/2,
          alignItems: 'center', //How do I make the image show in the center
        },
});
