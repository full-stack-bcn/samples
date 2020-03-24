import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import spade from "./assets/spade-small.png";
import spadeBig from "./assets/spade-big.png";

const CardCorner = ({ corner }) => {
  const margin = 12;
  let transform = [];
  let position = { position: "absolute" };

  if (corner === "bottom-right") {
    position.right = margin * 1.4;
    position.bottom = margin;
    transform = [
      {
        rotateX: "180deg"
      }
    ];
  } else if (corner === "top-left") {
    position.left = margin * 1.4;
    position.top = margin;
  }
  return (
    <View style={[styles.corner, position, { transform: transform }]}>
      <Text style={styles.cornerText}>A</Text>
      <Image source={spade} style={styles.spadeSmall} />
    </View>
  );
};

const PokerCard = props => {
  const { card, center, shadow } = styles;
  return (
    <View style={[card, shadow, center]}>
      <CardCorner corner="top-left" />
      <Image source={spadeBig} style={styles.spadeBig} />
      <CardCorner corner="bottom-right" />
    </View>
  );
};

export default function App() {
  const { page, center } = styles;
  return (
    <View style={[page, center]}>
      <PokerCard />
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
  card: {
    // Real cards are 63.5mm x 88.9mm
    width: 635 / 2,
    height: 889 / 2,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  shadow: {
    // This is for Android
    elevation: 5,
    // This is for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 3.84
  },
  spadeBig: {
    width: 635 / 4,
    height: 889 / 4,
    resizeMode: "contain"
  },
  corner: {
    position: "absolute",
    alignItems: "center"
  },
  cornerText: {
    fontSize: 40
  },
  spadeSmall: {
    width: 25,
    height: 32,
    resizeMode: "contain"
  }
});
