import React, { useContext } from "react";
import { StyleSheet, Image, ImageBackground, Text, View } from "react-native";

const User = React.createContext({});

const UserProfile = ({ user }) => {
  return (
    <User.Provider value={user}>
      <View style={styles.page}>
        <Header />
        <Stats />
        <About />
      </View>
    </User.Provider>
  );
};

const Header = () => {
  const user = useContext(User);
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.header}
      source={{ uri: user.background }}
    >
      <Image style={styles.avatar} source={{ uri: user.avatar }} />
      <Text style={styles.name}>{user.name}</Text>
    </ImageBackground>
  );
};

const Stats = () => {
  const user = useContext(User);
  return (
    <View style={styles.stats}>
      <View style={styles.statColumn}>
        <Text style={styles.statTitle}>FOLLOWERS</Text>
        <Text style={styles.number}>{user.followers}</Text>
      </View>
      <Separator />
      <View style={styles.statColumn}>
        <Text style={styles.statTitle}>FOLLOWING</Text>
        <Text style={styles.number}>{user.following}</Text>
      </View>
    </View>
  );
};

const Separator = () => (
  <View style={{ width: 1, backgroundColor: "#00000010", margin: 10 }}></View>
);

const About = () => {
  const user = useContext(User);
  return (
    <View style={styles.about}>
      <Text style={styles.aboutTitle}>About</Text>
      <Text>{user.about}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    flex: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
    backgroundColor: "#113"
  },
  avatar: {
    resizeMode: "contain",
    borderRadius: 150,
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  stats: {
    flex: 10,
    backgroundColor: "#aef",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  statColumn: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
    marginLeft: 50,
  },
  statTitle: {
    fontSize: 12,
    color: "#0005"
  },
  number: {
    fontSize: 18,
    color: "#000b"
  },
  about: {
    flex: 45,
    backgroundColor: "white",
    padding: 24
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  }
});

export default UserProfile;
