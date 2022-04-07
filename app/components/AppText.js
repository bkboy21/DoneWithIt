import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}


const styles = StyleSheet.create({
  text: {
    color: "red",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      },
      android: {
        fontSize: 20,
        fontFamily: "Avenir"
      }
    })
  },
});

export default AppText;
