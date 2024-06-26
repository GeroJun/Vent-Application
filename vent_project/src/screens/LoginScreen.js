import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

//const navigation = useNavigation();

const LoginScreen = (props) => {
  return <View>
    <Text style={styles.text}>Username Input:</Text>

    <TextInput style={styles.textInput}>
    </TextInput>
    <Text style={styles.text}>Password Input:</Text>
    <TextInput secureTextEntry={true} style={styles.textInput}>
    </TextInput>

    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
    <Text style={styles.login} onPress={() => props.navigation.navigate('Home')}>Log In</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => alert('ForgotPassword In Progress')}>
    <Text style={styles.login}>Forgot Password?</Text>
    </TouchableOpacity>

    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  textInput: {
    height: 20, borderColor: 'black', borderWidth: 1, width: 200
  },
  login: {
    fontSize: 30, color: 'green'
  }
});

export default LoginScreen;