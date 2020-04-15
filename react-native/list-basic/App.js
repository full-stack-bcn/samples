import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, useSafeArea } from "react-native-safe-area-context";
import NumberList from "./components/NumberList";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainPage />
    </SafeAreaProvider>
  );
}

const MainPage = () => {
  // To be able to 'useSafeArea' here, there has to be an upper 'SafeAreaProvider'
  // that's why we have a MainPage component.
  const insets = useSafeArea();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <NumberList len={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
