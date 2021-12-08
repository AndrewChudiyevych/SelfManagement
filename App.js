import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyNotes from './Screens/MyNotes';
import MyBoards from './Screens/MyBoards';
import ToDo from './Screens/ToDo';
import SignIn from './Screens/SignIn';
import MainPage from './Screens/MainPage';
import SignUp from './Screens/SignUp';
import { useEffect } from 'react/cjs/react.development';
import { AuthContext } from './Helpers/context';
import { DrawerContent } from './Screens/DrawerContent';
import 'react-native-gesture-handler'
 


const Drawer = createDrawerNavigator();
  

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
      signIn: () => {
          setUserToken('fghjj');
          setIsLoading(false);
      },
      signOut: () => {
          setUserToken(null);
          setIsLoading(false);
      },
      signUp: () => {
          setUserToken('fghjj');  
          setIsLoading(false);
      },
  }));


    useEffect (() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, []);

    if (isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        )
    }



  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Main" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name='Main' component={MainPage}/>
            <Drawer.Screen name='SignIn' component={SignIn}/>
            <Drawer.Screen name='SignUp' component={SignUp}/>
            <Drawer.Screen name='Notes' component={MyNotes}/>
            <Drawer.Screen name='Boards' component={MyBoards}/>
            <Drawer.Screen name='ToDo' component={ToDo}/>
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
