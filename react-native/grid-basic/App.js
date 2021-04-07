import React from "react";
import { FlatList, Text, StyleSheet, View, Dimensions } from "react-native";

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

const generateData = () => {
  const items = [];
  alphabet.forEach((c) => items.push({ key: c, letter: c, color: "purple" }));
  alphabet.forEach((c) =>
    items.push({ key: c, letter: c.toUpperCase(), color: "navy" })
  );
  return items;
};

const Letter = ({ letter, color }) => (
  <View style={[styles.letter, { backgroundColor: color }]}>
    <Text style={styles.text}>{letter}</Text>
  </View>
);

const screenWidth = Dimensions.get("window").width;
const numColumns = 5;

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        data={generateData()}
        renderItem={({ item }) => <Letter {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  letter: {
    height: (screenWidth - 2) / numColumns,
    width: (screenWidth - 2) / numColumns,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
