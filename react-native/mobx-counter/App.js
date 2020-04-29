import { Provider } from "mobx-react";
import React from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";
import DecrButton from "./components/DecrButton";
import IncrButton from "./components/IncrButton";
import counter from "./model/counter";

import "mobx-react-lite/batchingForReactNative";

export default function App() {
  return (
    <Provider counter={counter}>
      <View style={styles.container}>
        <Counter />
        <View style={styles.row}>
          <IncrButton />
          <DecrButton />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  }
});
