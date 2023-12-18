import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import GOT from "../assets/got.jpg";
import { useFonts } from "expo-font";

export default function BookPreview() {
  const [fontsLoaded] = useFonts({
    Playfair: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/got.jpg")}
          resizeMethod={"resize"}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.bookTitle}>A Game Of Thrones</Text>
        <Text style={styles.bookInfo}>George R. R. Martin</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },

  image: {
    width: 130,
    height: 200,
  },
  infoContainer: {
    flex: 1,
  },
  bookInfo: {
    fontSize: 16,
    color: "#F0ECE5",
    fontFamily: "Playfair",
    textAlign: "center",
  },
  bookTitle: {
    fontSize: 20,
    color: "#F0ECE5",
    fontFamily: "Playfair",
    textAlign: "center",
  },
});
