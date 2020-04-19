import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClippedPhoto from './components/ClippedPhoto';

export default function App() {
  return (
    <View style={styles.container}>
      <ClippedPhoto source="https://i.picsum.photos/id/10/200/200.jpg" height={150} width={150} />
      <ClippedPhoto source="https://i.picsum.photos/id/20/200/200.jpg" height={150} width={150} />
      <ClippedPhoto source="https://i.picsum.photos/id/30/200/200.jpg" height={150} width={150} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
