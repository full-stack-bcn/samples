import React, { useState, useEffect } from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  let subscription = null;

  _subscribe = () => {
    subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });
  };

  _unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      subscription = null;
    }
  };

  useEffect(() => {
    Battery.getBatteryLevelAsync().then((level) => {
      setBatteryLevel(level);
      _subscribe();
    })
    return _unsubscribe;
  });

  return (
    <View style={styles.container}>
      <Text>Current Battery Level: {Math.floor(batteryLevel * 100)}%</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})