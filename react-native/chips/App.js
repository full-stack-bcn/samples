import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Chip = ({ first, children }) => {
  const { center, chip } = styles;
  return (
    <View style={[chip, center, { marginLeft: first ? 0 : 5 }]}>
      {children}
    </View>
  );
};

export default function App() {
  const { page, center, chips, chip } = styles;
  const tags = ["jazz", "hip-hop", "rock", "classical"];
  return (
    <View style={[page, center]}>
      <View style={[chips, center]}>
        {tags.map((tag, i) => (
          <Chip key={i} first={i === 0}>
            <Text>{tag}</Text>
          </Chip>
        ))}
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
    backgroundColor: "#fff"
  },
  chips: {
    flexDirection: "row"
  },
  chip: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    backgroundColor: "#eca",
    borderRadius: 35
  }
});
