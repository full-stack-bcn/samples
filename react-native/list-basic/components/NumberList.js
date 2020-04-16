import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const generateNumberList = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    // All data objects need a 'key' property (passed to React)
    array.push({ key: `${i}`, text: `Item ${i + 1}` });
  }
  return array;
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.number}>{item.text}</Text>
  </View>
);

const Separator = () => <View style={styles.separator}></View>;

const NumberList = ({ length }) => (
  <FlatList
    data={generateNumberList(length)}
    renderItem={renderItem}
    ItemSeparatorComponent={Separator}
  />
);

export default NumberList;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  number: {
    fontSize: 25,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
  },
});
