import { observer, inject } from "mobx-react";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Counter = ({ counter }) => {
  return <Text style={styles.text}>{counter.count}</Text>;
};

export default inject("counter")(observer(Counter));

const styles = StyleSheet.create({
  text: {
    fontSize: 65,
  },
});
