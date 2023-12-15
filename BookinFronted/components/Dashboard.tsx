import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Dashboard({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.titleText}>Dashboard</Text>

        <Text style={styles.subtext}>Shelves</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create Account" color="#31304d" />
        <Button title="Sign In" color="#31304d" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingVertical: "20%",
    flexDirection: "column",
    backgroundColor: "#F0ECE5",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 52,
  },
  topHalf: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",

    paddingTop: "10%",
  },
  subtext: {
    fontSize: 32,
  },
  buttonContainer: {
    justifyContent: "center",
    flex: 1,
  },
});
