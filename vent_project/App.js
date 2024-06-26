import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TestScreen1 from './src/screens/TestScreen1';
import TestScreen2 from './src/screens/TestScreen2';
import TestScreen3 from './src/screens/TestScreen3';
import Drawer from './src/components/Drawer';
import LoginScreen from "./src/screens/LoginScreen"


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'App' }}
        />
        <Stack.Screen
          name="Test1"
          component={TestScreen1}
          options={{ title: 'Test Screen 1' }}
        />
        <Stack.Screen
          name="Test2"
          component={TestScreen2}
          options={{ title: 'Test Screen 2' }}
        />
        <Stack.Screen
          name="Test3"
          component={TestScreen3}
          options={{ title: 'Test Screen 3' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options = {{title: 'Login Screen'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;