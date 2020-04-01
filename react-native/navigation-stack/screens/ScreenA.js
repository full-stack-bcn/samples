import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Separator } from "../components";

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>This is screen A!</Text>
      <Separator height={10} />
      <Button title="Go Back" onPress={() => navigation.goBack()} ></Button>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green"
  },
  text: {
    fontSize: 22,
    color: 'white'
  }
});
