import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const QuantityEdit = () => {
  const [quantity, setQuantity] = useState(0);

  const incr = () => setQuantity(quantity + 1);
  const decr = () => setQuantity(quantity > 0 ? quantity - 1 : quantity);

  const {
    outer,
    center,
    box,
    right,
    left,
    button,
    buttonText,
    number
  } = styles;

  return (
    // Here it would be nice to have a component abstracting the buttons
    // but TouchableHighlight doesn't snow the underlayColor (RN bug?)
    <View style={outer}>
      <TouchableHighlight
        style={[center, box, button, right]}
        onPress={decr}
        underlayColor={underlayColor}
      >
        <Text style={buttonText}>&#65293;</Text>
      </TouchableHighlight>
      <View style={[center, box]}>
        <Text style={number}>{quantity}</Text>
      </View>
      <TouchableHighlight
        style={[center, box, button, left]}
        onPress={incr}
        underlayColor={underlayColor}
      >
        <Text style={buttonText}>&#65291;</Text>
      </TouchableHighlight>
    </View>
  );
};

export default QuantityEdit;

const underlayColor = "#f0f7f0";
const BORDER = {
  WIDTH: 3,
  COLOR: "#cdc",
  RADIUS: 10,
};

const styles = StyleSheet.create({
  outer: {
    borderWidth: BORDER.WIDTH,
    borderColor: BORDER.COLOR,
    borderRadius: BORDER.RADIUS,
    backgroundColor: 'white',
    flexDirection: "row"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#898"
  },
  box: {
    padding: 0,
    height: 70,
    width: 70,
  },
  button: {
    borderColor: BORDER.COLOR,
    width: 56
  },
  right: {
    borderRightWidth: BORDER.WIDTH,
    borderTopLeftRadius: BORDER.RADIUS - BORDER.WIDTH,
    borderBottomLeftRadius: BORDER.RADIUS - BORDER.WIDTH,
  },
  left: {
    borderLeftWidth: BORDER.WIDTH,
    borderTopRightRadius: BORDER.RADIUS - BORDER.WIDTH,
    borderBottomRightRadius: BORDER.RADIUS - BORDER.WIDTH,
  },
  number: {
    textAlign: "center",
    width: 48,
    fontSize: 36,
    fontWeight: "300"
  }
});
