import "react-native-gesture-handler";

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LeftScreen from "./screens/LeftScreen";
import RightScreen from "./screens/RightScreen";

import { NavigatorContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Tab.Navigator>
        <Tab.Screen name="Left" component={LeftScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Right" component={RightScreen} />
      </Tab.Navigator>
    </NavigatorContainer>
  );
}
