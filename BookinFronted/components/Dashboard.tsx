import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import BookList from "./BookList";
import { useFonts } from "expo-font";

export default function Dashboard({ navigation, route }) {
  const [searchedBook, setSearchedBook] = useState("");
  const [fontsLoaded] = useFonts({
    Playfair: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bookin'</Text>
      </View>
      <View style={styles.topHalf}>
        <TextInput
          placeholder="Search Books"
          placeholderTextColor={"#F0ECE5"}
          style={styles.input}
          onChangeText={(value) => setSearchedBook(value)}
        />
      </View>
      <View style={styles.previewList}>
        <BookList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "#31304D",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 36,
    fontFamily: "Playfair",
    color: "#F0ECE5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F0ECE5",
    borderRadius: 8,
    padding: 8,
    width: 300,
    color: "#F0ECE5",
  },
  topHalf: {
    flex: 1,
    alignItems: "center",
  },
  previewList: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});
