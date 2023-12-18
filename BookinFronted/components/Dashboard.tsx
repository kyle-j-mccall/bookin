import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BookList from "./BookList";
import { useFonts } from "expo-font";

export default function Dashboard({ navigation, route }) {
  const [searchedBook, setSearchedBook] = useState("");
  const [fontsLoaded] = useFonts({
    Playfair: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Bookin'</Text>
          </View>
          <View style={styles.inputContainer}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#31304D",
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#31304D",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 8, // Adjusted padding for better spacing
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
  inputContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
  },
  previewList: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});
