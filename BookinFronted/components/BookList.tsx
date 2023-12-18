import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import BookPreview from "./BookPreview";

export default function BookList() {
  return (
    <View style={styles.listContainer}>
      <BookPreview />
      <BookPreview />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row", // Display items horizontally
    flexWrap: "wrap", // Allow items to wrap to the next line when needed
    paddingHorizontal: 10,
    width: 400,
    backgroundColor: "#31304D",
    alignItems: "center",
    justifyContent: "center",
  },
});
