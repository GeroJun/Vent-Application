import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

// DrawerMenu component
const Drawer = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Test1'); //Goes to test1
          navigation.closeDrawer(); //Closes drawer
        }}>
        <Text>Test1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Test2');
          navigation.closeDrawer();
        }}>
        <Text>Test2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Test3');
          navigation.closeDrawer();
        }}>
        <Text>Test3</Text>
      </TouchableOpacity>
      
    </DrawerContentScrollView>
  );
};

export default Drawer;