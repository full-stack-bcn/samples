import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Svg, { Circle, Path, SvgUri } from "react-native-svg";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View height={50} />
      <Text style={styles.text}>Hand-written SVG</Text>
      <Svg style={styles.svg} height="250" width="300" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="#55f"
          strokeWidth="5"
          fill="#ff5"
        />
      </Svg>

      <Text style={styles.text}>Loaded SVG from Network</Text>
      <SvgUri
        style={styles.svg}
        width="300"
        height="300"
        uri="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />

      <Text style={styles.text}>
        Copy-pasted from drawing program into
        https://react-svgr.com/playground/
        and then copied into React Native code
      </Text>
      <Svg
        style={styles.svg}
        viewBox="0 0 43.827 60.974"
        height={200}
        width={200}
      >
        <Path
          d="M30.136 0A30.136 30.487 0 000 30.487a30.136 30.487 0 0030.136 30.487 30.136 30.487 0 0013.69-3.329 26.892 27.205 0 01-1.445.04A26.892 27.205 0 0115.489 30.48 26.892 27.205 0 0142.381 3.275a26.892 27.205 0 011.416.037A30.136 30.487 0 0030.136 0z"
          fill="black"
        />
      </Svg>

      <View height={50} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  svg: {
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 10,
    marginBottom: 40,
  },
  text: {
    fontWeight: 'bold',
    textAlign: "center",
  },
});
