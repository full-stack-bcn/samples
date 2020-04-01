import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserScreen, HomeScreen, SettingsScreen } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen
          name="left"
          component={UserScreen}
          options={{ tabBarIcon: UserScreen.Icon }}
        />
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{ tabBarIcon: HomeScreen.Icon }}
        />
        <Tab.Screen
          name="right"
          component={SettingsScreen}
          options={{ tabBarIcon: SettingsScreen.Icon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
