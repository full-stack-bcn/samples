import React from "react";
import { StyleSheet, View } from "react-native";
import UserList from "./UserList";
import { useSafeArea } from "react-native-safe-area-context";

const MainPage = () => {
  const insets = useSafeArea();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <UserList />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
