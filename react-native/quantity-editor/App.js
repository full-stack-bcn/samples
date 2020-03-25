import React from "react";
import { StyleSheet, View } from "react-native";
import QuantityEdit from "./components/QuantityEdit";

export default function App() {
  const showNewValue = newValue => {
    console.log(`Value updated: ${newValue}`);
  };

  return (
    <View style={styles.page}>
      <QuantityEdit onChange={showNewValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
