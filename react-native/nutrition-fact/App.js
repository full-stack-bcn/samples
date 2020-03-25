import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NutritionFact from "./components/NutritionFact";

export default function App() {
  const { page, facts } = styles;
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

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 25,
  },
  facts: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});
