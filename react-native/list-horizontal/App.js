import React from "react";
import { StyleSheet, ScrollView, Text, FlatList, View } from "react-native";

const sequences = {
  ["Numbers from 1 to 10"]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["Prime numbers"]: [2, 3, 5, 7, 9, 11, 13],
  ["Even numbers"]: [2, 4, 6, 8, 10, 12],
  ["Odd numbers"]: [1, 3, 5, 7, 9, 11, 13],
  ["Random numbers"]: [5, 2, 9, 7, 3, 1, 0, 10],
  ["All zeros"]: [0, 0, 0, 0, 0, 0],
};

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
];

const NumberCard = ({ word, num }) => (
  <View>
    <View style={styles.numberCard}>
      <Text style={styles.cardNum}>{num}</Text>
    </View>
    <View height={5} />
    <Text>{word}</Text>
  </View>
);

const NumberList = ({ title, numbers }) => (
  <View>
    <View height={20} />
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={numbers}
      ListHeaderComponent={() => <View width={20} />}
      ListFooterComponent={() => <View width={20} />}
      renderItem={({ item }) => <NumberCard {...item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default function App() {
  return (
    <ScrollView>
      <View height={30} />
      {Object.entries(sequences).map(([title, numbers], index) => {
        return (
          <NumberList
            key={index}
            title={title}
            numbers={numbers.map((n, index) => ({
              id: `${index}`,
              word: numberWords[n],
              num: n,
            }))}
          />
        );
      })}
      <View height={30} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 20,
  },
  numberCard: {
    width: 70,
    height: 100,
    borderRadius: 5,
    backgroundColor: "#eaeaef",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  cardNum: {
    fontSize: 40,
    color: "#ccc",
  },
});
