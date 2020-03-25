import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import checked from "../assets/checked.png";

const CheckoutButton = ({ nitems, onPress }) => {
  const { row, outer, proceed, items, image, separator } = styles;
  return (
    <TouchableHighlight onPress={onPress} style={outer} underlayColor="#cfc" >
      <View style={row}>
        <View>
          <Image source={checked} style={[image]} />
        </View>
        <View style={[separator]}></View>
        <Text style={[proceed]}>Proceed to Checkout</Text>
        <Text style={[items]}>{nitems} items</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CheckoutButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
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
    fontWeight: "bold"
  },
  items: {
    color: "green"
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain"
  },
  separator: {
    width: 2,
    height: 42,
    backgroundColor: "#bdb",
    marginLeft: 12,
    marginRight: 15
  },
  debug: {
    borderWidth: 1,
    borderColor: "red"
  }
});
