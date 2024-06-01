import React from "react";
import { Text, StyleSheet } from "react-native";

const TestScreen1 = () => {
  return <Text style={styles.text}>TestScreen 1</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default TestScreen1;
