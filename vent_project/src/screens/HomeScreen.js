import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'; //required for rneui
import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView } from "react-native";
import { Header, Icon } from '@rneui/themed'; //Wasn't covered in class but rneui just helps with ui
import Drawer from "../components/Drawer";
import { useNavigation } from '@react-navigation/native';
//import { Navigation} from '@react-navigation/native';
//import LinearGradient from 'react-native-linear-gradient'; //allows for use of gradients https://www.npmjs.com/package/react-native-linear-gradient

const HomeScreen = (props) => {

  //const navigation = useNavigation(); //Get navigation to make the drawer usable.

  return (
    //the rneui header required the app to be wrapped in SafeAreaProvider
    <SafeAreaProvider> 
    <View>   
       <Header
    backgroundColor = 'black'

    leftComponent={ <TouchableOpacity><Icon name='menu' color='white' onPress={() => alert('drawer in progress')} /></TouchableOpacity>}
    centerComponent={ <Text style={styles.header} onPress={() => alert('Header text pressed')}>Vent App</Text>}
    //{{ text: 'Vent App', style: { color: 'white' } }}
    rightComponent={ <Icon name= 'settings' color= 'white' onPress={() => alert('Settings button pressed')}/>}
    />
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
    
    <View style={{
        flexDirection: 'column',
        flexGrow: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'center'
        }}>
      <Text>Vent App Footer</Text>
      </View>
    </SafeAreaProvider>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  header: {
    color: 'white'
  },
});

export default HomeScreen;
