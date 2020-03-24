import React from "react";
import { StyleSheet, Text, View } from "react-native";

const colors = ["red", "yellow", "#8bf"];

export default function App() {
  const { page, center, numbers, circle, text, marginLast } = styles;
  return (
    <View style={[page, center]}>
      <View style={[numbers, center]}>
        {[0, 1, 2, 3, 4, 5].map(n => {
          const last = n === 5 ? marginLast : {}
          const color = { backgroundColor: colors[n % colors.length] };
          return (
            <View key={n} style={[center, circle, color, last]}>
              <Text style={text}>{n+1}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  numbers: {
    flexDirection: "row"
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f00",
    marginRight: 5
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  marginLast: { marginRight: 0 }
});
