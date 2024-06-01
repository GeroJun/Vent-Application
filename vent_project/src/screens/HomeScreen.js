import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => props.navigation.navigate('Test1')}
        title="Test 1"
      />
      <Button 
        onPress={() => props.navigation.navigate('Test2')}
        title="Test 2"
      />
      <Button 
        onPress={() => props.navigation.navigate('Test3')}
        title="Test 3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
