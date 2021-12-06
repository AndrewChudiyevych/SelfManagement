import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyNotes from './Screens/MyNotes';
import MyBoards from './Screens/MyBoards';
import ToDo from './Screens/ToDo';
import Login from './Screens/Login';
import MainPage from './Screens/MainPage';
 


const Drawer = createDrawerNavigator();
  



export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="">
      <Drawer.Screen name="MainPage" component={MainPage} />
      <Drawer.Screen name="MyNotes" component={MyNotes} />
      <Drawer.Screen name="MyBoards" component={MyBoards} />
      <Drawer.Screen name="ToDo" component={ToDo} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
