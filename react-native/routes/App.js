/*
  First, you have to install two sets of packages:
  $ yarn add @react-navigation/native @react-navigation/stack
  $ expo install react-native-reanimated react-native-gesture-handler \
                 react-native-screens react-native-safe-area-context \
                 @react-native-community/masked-view
*/

// This import has to be at the top of the file
import "react-native-gesture-handler";

import React from "react";
import { Home, ScreenA, ScreenB } from "./screens";

// Then, put a NavigatorContainer at the root of the component hierarchy
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "./components/CustomHeader";

// And create a Stack Navigator.
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false // Do not show the header
          }}
        />
        <Stack.Screen
          name="A"
          component={ScreenA}
          options={{ title: "Screen A" }}
        />
        <Stack.Screen
          name="B"
          component={ScreenB}
          options={{ 
            title: "Screen B", 
            header: CustomHeader // Use a custom component as header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
