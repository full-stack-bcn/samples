import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NutritionFact = ({ units, concept, amount }) => {
  return (
    <View style={[styles.center, styles.outer]}>
      <View style={[styles.center, styles.circle]}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <View style={[styles.inner]}>
        <Text style={[styles.concept]}>{concept}</Text>
        <Text style={[styles.units]}>{units}</Text>
      </View>
    </View>
  );
};

export default NutritionFact;

const WIDTH = 75;
const HEIGHT = 134;
const SEPARATION = 14;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  outer: {
    flexDirection: "column",
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "#fadcc0",
    justifyContent: "space-between",
    padding: SEPARATION / 2,
    borderRadius: WIDTH / 2
  },
  circle: {
    backgroundColor: "#fff",
    width: WIDTH - SEPARATION,
    height: WIDTH - SEPARATION,
    borderRadius: (WIDTH - SEPARATION) / 2
  },
  inner: {
    alignItems: "center",
    paddingBottom: 8
  },
  amount: {
    fontFamily: "Montserrat-Bold",
    fontSize: 22
  },
  concept: {
    fontFamily: "Montserrat-Bold"
  },
  units: {
    fontFamily: "Montserrat-Regular",
    color: "#777"
  }
});
