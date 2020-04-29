import React from "react";
import { Button } from "react-native";
import { inject } from "mobx-react";

const IncrButton = ({ counter }) => {
  return <Button title="increment" onPress={() => counter.increment()} />;
};

export default inject("counter")(IncrButton);
