import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

import commonStyles from "../common-styles";

const SettingsScreen = () => {
  return (
    <View style={[commonStyles.page, { backgroundColor: "#f55" }]}>
      <Text>This is the Settings Page</Text>
    </View>
  );
};

SettingsScreen.Icon = ({ color }) => (
  <AntDesign name="setting" size={24} color={color} />
);

export default SettingsScreen;
