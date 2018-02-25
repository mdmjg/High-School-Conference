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
         <View style = {styles.textInTweet}>
           <Text style = {styles.userNameText}> Hello world! You are amazing! </Text>
        </View>
        </View>
      </View>
        <View style = {styles.tweetBox2}>
        <View style = {styles.imageInTweet}>
          <Image source = {{uri: 'https://facebook.github.io/react/logo-og.png'}}
                          style = {styles.profilePicture} />
          <View style = {styles.textInTweet}>
            <Text style = {styles.userNameText}> My name is Mar </Text>
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
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  userNameInfo: {
    fontFamily: 'helvetica',
    fontSize: 10,
    color: 'gray',
    backgroundColor: 'transparent',
    textAlign: 'right',
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
    },
    imageInTweet: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textInTweet: { //For some reason this is being placed in the right, maybe its because it is whatever is to the right
      flex: 3,
      flexDirection: 'row',
      color: 'yellow', //Why isnt the color showing?
      justifyContent: 'left',
    },
    tweetBox2: {
        flex: 9,
        backgroundColor: 'rgb(158,205,193)', //This is a temporary color
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
      //  justifyContent: 'center',
      },
      tweetBox3: {
          flex: 9,
          backgroundColor: 'rgb(93,129,177)', //This is a temporary color
          borderRadius: 20,
          margin: 10,
          marginTop: 20,
        //  justifyContent: 'center',
        },
      profilePicture: {
          width: 55,
          height: 55,
          borderRadius: 55/2,
          alignItems: 'center', //How do I make the image show in the center
        },
});
