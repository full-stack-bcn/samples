import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import commonStyles from "../common-styles";

const HomeScreen = () => {
  return (
    <View style={[commonStyles.page, { backgroundColor: "#fff" }]}>
      <Text>Home</Text>
    </View>
  );
};

HomeScreen.Icon = ({ color }) => (
  <FontAwesome name="home" size={24} color={color} />
);

export default HomeScreen;
