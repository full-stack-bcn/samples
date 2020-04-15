import React from "react";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";

const generateList = (len) => {
  let array = [];
  for (let i = 0; i < len; i++) {
    array.push({ text: `Item ${i + 1}`, id: i });
  }
  return array;
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.number}>{item.text}</Text>
  </View>
);

const Separator = () => <View style={styles.separator}></View>;

const NumberList = ({ len }) => (
  <FlatList
    data={generateList(len)}
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
