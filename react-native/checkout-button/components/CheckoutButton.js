import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import checked from "../assets/checked.png";

const CheckoutButton = ({ nitems }) => {
  const { outer, proceed, items, image, separator, debug } = styles;
  return (
    <View style={outer}>
      <View>
        <Image source={checked} style={[image]} />
      </View>
      <View style={[separator]}></View>
      <Text style={[proceed]}>Proceed to Checkout</Text>
      <Text style={[items]}>{nitems} items</Text>
    </View>
  );
};

export default CheckoutButton;

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#f3fff3",
    borderColor: "#7f7",
    borderWidth: 2,
    borderColor: "#7c7",
    paddingLeft: 12,
    paddingRight: 18,
    paddingTop: 8,
    paddingBottom: 8
  },
  proceed: {
    marginRight: 20,
    fontWeight: 'bold'
  },
  items: {
    color: "green"
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  separator: {
    width: 2,
    height: 42,
    backgroundColor: "#cec",
    marginLeft: 12,
    marginRight: 15,
  },
  debug: {
    borderWidth: 1,
    borderColor: 'red'
  }
});
