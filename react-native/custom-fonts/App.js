import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Oswald-SemiBold": require("./assets/fonts/Oswald-SemiBold.ttf"),
      })
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  // In the component, we have to wait until fonts are loaded to use them
  if (!fontLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );  
  }
  return (
    <View style={styles.page}>
      <Text style={styles.text}>This text is shown with a custom font!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 40,
  },
  text: {
    fontFamily: "Oswald-SemiBold",
    fontSize: 40,
  },
});
