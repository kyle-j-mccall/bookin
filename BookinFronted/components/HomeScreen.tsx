import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Playfair: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.titleText}>Bookin'</Text>

        <Text style={styles.subtext}>Your virtual bookshelf.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create Account" color="#31304d" />
        <Button title="Sign In" color="#31304d" />
        <Button
          title="Shelves"
          color="#31304d"
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        />
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
    fontFamily: "Playfair",
  },
  topHalf: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",

    paddingTop: "10%",
  },
  subtext: {
    fontSize: 32,
    fontFamily: "Playfair",
  },
  buttonContainer: {
    justifyContent: "center",
    fontFamily: "Playfair",

    flex: 1,
  },
});
