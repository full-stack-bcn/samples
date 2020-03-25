import React from "react";
import { StyleSheet, View } from "react-native";
import CheckoutButton from "./components/CheckoutButton";

export default function App() {
  return (
    <View style={styles.page}>
      <CheckoutButton
        nitems={7}
        onPress={() => console.log("CheckoutButton pressed!")}
      />
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
