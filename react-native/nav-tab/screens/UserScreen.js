import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from "react-native";

import commonStyles from "../common-styles";

const UserScreen = () => {
  return (
    <View style={[commonStyles.page, { backgroundColor: '#acf' }]}>
      <Text>This is the User Page</Text>
    </View>
  );
};

UserScreen.Icon = ({ color }) => (
  <AntDesign name="user" size={24} color={color} />
);

export default UserScreen;
