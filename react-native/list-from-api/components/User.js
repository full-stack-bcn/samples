import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

const User = ({ name, photoURL, email }) => {
  return (
    <TouchableHighlight underlayColor={'#efefef'} onPress={() => {}}>
      <View style={styles.user}>
        <Image style={styles.photo} source={{ uri: photoURL }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default User;

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    padding: 10,
  },
  photo: {
    height: 48,
    width: 48,
    marginRight: 15,
    borderRadius: 25,
    backgroundColor: "pink",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "#888",
    fontSize: 12,
  },
});
