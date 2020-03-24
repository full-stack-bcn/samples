import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const { page, light, red, yellow, green, last } = styles;
  return (
    <View style={page}>
      <View style={[light, red]}></View>
      <View style={[light, yellow]}></View>
      <View style={[light, green, last]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  light: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15
  },
  last: { marginBottom: 0 },
  red: { backgroundColor: "red" },
  yellow: { backgroundColor: "yellow" },
  green: { backgroundColor: "green" }
});
