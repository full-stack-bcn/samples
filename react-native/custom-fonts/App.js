import * as Font from "expo-font";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  // To load the font, we call Font.loadAsync (and await on it)
  // then set the fontLoaded state to true
  async componentDidMount() {
    await Font.loadAsync({
      "Oswald-SemiBold": require("./assets/fonts/Oswald-SemiBold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { page, text } = styles;
    // In the component, we have to wait until fonts are loaded to use them
    if (!this.state.fontLoaded) {
      return (
        <View style={page}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={page}>
        <Text style={text}>This text is shown with a custom font!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 40
  },
  text: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 40,
  }
});
