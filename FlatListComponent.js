import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class FlatListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `http://localhost:8080/page/1/1`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results, //page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });

      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View styles = {styles.container}>
          <Text styles = {styles.headerText}> #westem </Text>
      </View>
    )
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {

    if(this.state.error != null ){
      this.state.seed = this.state.seed+10;
      return (<Text> Error {this.state.error.toString()}</Text>);

    }
    else if (this.state.data == false) {
      this.state.seed = this.state.seed+2;
      return (<Text>Loading {this.state.seed}</Text>);
    }else {
      return (
       <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
          //  data={[{author: 'maria', body: 'hellooooo', avatar: "http://pbs.twimg.com/profile_images/956848336996364290/YPZxP4jj_normal.jpg"}, {author: 'maria', body: 'byee', avatar: "http://pbs.twimg.com/profile_images/956848336996364290/YPZxP4jj_normal.jpg"}]}
          data = {this.state.data}
            renderItem={({ item }) => (
             <View style = {styles.tweetBox1}>
              <View style = {styles.imageInTweet}>
                <Image source = {{uri: item.avatar}}
                                style = {styles.profilePicture} />
              </View>
               <View style = {styles.textInTweet}>
                <View style = {styles.userNameBox}>
                  <Text>
                    <Text style = {styles.userNameFont}> {item.author} </Text>
                  </Text>
                </View>
                <View style = {styles.tweetTextBox}>
                  <Text style = {styles.tweetFont}> {item.body} </Text>
                </View>
                </View>
              </View>

            )}
            keyExtractor={item => item.author}
          //  ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
       </List>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
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
      backgroundColor: 'transparent', // rgb(181,212,229)
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
          fontSize: 30,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'helvetica',
        },
});


export default FlatListComponent;
