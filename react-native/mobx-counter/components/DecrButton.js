import React from "react";
import { Button } from "react-native";
import { inject } from "mobx-react";

const IncrButton = ({ counter }) => {
  return <Button title="decrement" onPress={() => counter.decrement()} />;
};

export default inject("counter")(IncrButton);
