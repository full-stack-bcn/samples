import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>This is my Custom Header</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: "#f77",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
