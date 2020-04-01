import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenB = ({ route }) => {
  const { value } = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.text}>This is screen B!</Text>
      <Text>(You gave me "{value}"...)</Text>
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  text: {
    fontSize: 22,
    color: "white"
  }
});
