import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import User from "./User";

const Separator = () => (
  <View
    style={{
      height: 1,
      marginLeft: 70,
      marginRight: 10,
      backgroundColor: "#eee",
    }}
  />
);

const convertUser = (jsonUser) => ({
  name: `${jsonUser.name.first} ${jsonUser.name.last}`,
  photoURL: jsonUser.picture.thumbnail,
  email: jsonUser.email,
});

const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.results.map(convertUser));
      });
  }, []);

  if (users == null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <FlatList
      data={users}
      renderItem={({ item: user }) => <User {...user} />}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default UserList;
