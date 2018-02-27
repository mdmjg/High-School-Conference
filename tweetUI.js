import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class TwitterUI extends Component {
  render() {
    // All of the following will be replaced with variables that will fetch the info from the tweets
    var picUrl = 'https://facebook.github.io/react/logo-og.png';
    var tweet = 'Im the coolest tweet in town';
    var userName = 'King Kylie';
    var userNameInfo = '@KylieBitch ' + 'Feb 21';
    return (
      <View style = {styles.container}>
        <Text style = {styles.headerText}> #weSTEMHSC </Text>
        <View style = {styles.tweetBox1}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox2}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox3}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox1}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox2}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox3}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
        </View>
        <View style = {styles.tweetBox1}>
         <View style = {styles.imageInTweet}>
           <Image source = {{uri: picUrl}}
                           style = {styles.profilePicture} />
         </View>
         <View style = {styles.textInTweet}>
          <View style = {styles.userNameBox}>
            <Text>
              <Text style = {styles.userNameFont}> {userName} </Text><Text style = {styles.userNameInfoFont}> {userNameInfo} </Text>
            </Text>
          </View>
          <View style = {styles.tweetTextBox}>
            <Text style = {styles.tweetFont}> {tweet} </Text>
          </View>
        </View>
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
  userNameFont: {
    fontFamily: 'helvetica',
    fontSize: 15,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  userNameInfoFont: {
    fontFamily: 'helvetica',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  tweetFont: {
    fontFamily: 'helvetica',
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
  tweetBox1: {
      flex: 9,
      backgroundColor: 'rgb(181,212,229)',
      borderRadius: 20,
      margin: 10,
      marginTop: 20,
      flexDirection: 'row',
    },
    imageInTweet: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      alignItems: 'center',
    },
    textInTweet: { //This is the parent of the text that will be within the tweet
      flex: 3,
      backgroundColor: 'transparent',
      justifyContent: 'left',
      flexDirection: 'column',
    },
    userNameBox: { //Child 1 from textInTweet
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'left',
    },
    tweetTextBox: { //Child 2 from text in tweet
      flex: 2,
      backgroundColor: 'transparent',
      justifyContent: 'left',
    },
    tweetBox2: {
        flex: 9,
        backgroundColor: 'rgb(158,205,193)',
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
        flexDirection: 'row',
      },
      tweetBox3: {
          flex: 9,
          backgroundColor: 'rgb(93,129,177)',
          borderRadius: 20,
          margin: 10,
          marginTop: 20,
          flexDirection: 'row',
        },
      profilePicture: {
          width: 55,
          height: 55,
          borderRadius: 55/2,
          alignItems: 'center',
        },
        headerText: {
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'helvetica',
        },
});
