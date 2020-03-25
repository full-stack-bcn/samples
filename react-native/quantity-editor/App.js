import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import QuantityEdit from './components/QuantityEdit';

export default function App() {
  const [quantity, setQuantity] = useState(0);
  
  return (
    <View style={styles.page}>
      <QuantityEdit />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
