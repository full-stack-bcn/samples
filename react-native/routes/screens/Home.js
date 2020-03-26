import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Separator } from "../components";
import { TextInput } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [value, setValue] = useState(7);

  const goToScreenA = () => {
    // To navigate to a screen we use the screen 'name'
    navigation.navigate("A");
  };
  const goToScreenB = () => {
    // To pass parameters you add them to the navigate call
    navigation.navigate("B", { value: value });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.text}>This is the home page</Text>

      <Separator height={50} />

      <Button
        style={styles.button}
        title="Go to Screen A"
        onPress={goToScreenA}
      ></Button>

      <Separator height={50} />

      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
      />
      <Button
        style={styles.button}
        title="Go to Screen B"
        onPress={goToScreenB}
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 25
  },
  textInput: {
    width: 100,
    borderWidth: 1,
    borderColor: "#bbb",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8
  }
});
