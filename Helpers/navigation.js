import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";


import {AddBoard, AddNote, AddToDo, MainPage, MyBoards, MyNotes, Register, SignIn, SugnUp, ToDo} from '../Screens'


const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name='MainPage' component={MainPage}></AuthStack.Screen>
        </AuthStack.Navigator>
    </NavigationContainer>
)