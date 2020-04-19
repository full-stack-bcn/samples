import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

const NUM_COLUMNS = 3;
const WIDTH = Dimensions.get("screen").width;
const SIDE = Math.floor(WIDTH / NUM_COLUMNS);


const Photo = ({ id }) => {
  const uri = `https://picsum.photos/id/${id}/${SIDE}/${SIDE}`;
  return (
    <Image
      style={styles.photo}
      source={{ uri }}
      defaultSource={require('../assets/photo.png')}
    />
  );
};

const Gallery = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
      });
  }, []);

  if (photos == null) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <FlatList
      data={photos}
      numColumns={NUM_COLUMNS}
      renderItem={({ item }) => <Photo {...item} />}
      keyExtractor={(photo) => photo.id}
    />
  );
};

export default Gallery;

const styles = StyleSheet.create({
  photo: {
    width: SIDE,
    height: SIDE,
    borderWidth: 1,
  },
});
