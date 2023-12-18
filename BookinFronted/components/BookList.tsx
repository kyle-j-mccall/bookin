import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import BookPreview from "./BookPreview";

export default function BookList() {
  return (
    <View style={styles.listContainer}>
      <BookPreview />
      <BookPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row", // Display items horizontally
    flexWrap: "wrap",
    paddingHorizontal: 10,
    width: 400,
    backgroundColor: "#31304D",
    alignItems: "center",
    paddingVertical: 32,
    justifyContent: "center",
  },
});
