import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Install first the "@use-expo/font" package (npm install / yarn add)
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const App = () => {
  const [fontsLoaded] = useFonts({
    "oswald": require("./assets/fonts/Oswald-SemiBold.ttf"),
    "black": "https://rsms.me/inter/font-files/Inter-Black.otf?v=3.12",
  });
  console.log("fontsLoaded", fontsLoaded);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.page}>
      <Text style={styles.text1}>This text is shown with a custom font!</Text>
      <View height={50} />
      <Text style={styles.text2}>This one too!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 40,
  },
  text1: {
    fontFamily: "oswald",
    fontSize: 50,
  },
  text2: {
    fontFamily: "black",
    fontSize: 60,
  }
});
