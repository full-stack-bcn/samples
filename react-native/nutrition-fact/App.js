import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import NutritionFact from "./components/NutritionFact";
import * as Font from "expo-font";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { page, facts } = styles;
    if (!this.state.fontLoaded) {
      return (
        <View style={page}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={page}>
        <View style={facts}>
          <NutritionFact amount={247} concept="Calories" units="kcal" />
          <NutritionFact amount={33.5} concept="Carbo" units="g" />
          <NutritionFact amount={6.8} concept="Protein" units="g" />
          <NutritionFact amount={9.6} concept="Fat" units="g" />
        </View>
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
    padding: 25
  },
  facts: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
