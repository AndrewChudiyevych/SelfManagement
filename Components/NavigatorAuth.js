import React from "react";
import { Text, View } from "react-native-paper";
import { StackRouter } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";

export const NavigatorAuth = () => {
    const StackAuth = createStackNavigator();

    return (
        <StackAuth.Navigator initialRouteName='Main'>
            <StackAuth.Screen name="SignUp" component={SignUp}/>
            <StackAuth.Screen name="SignIn" component={SignIn}/>
        </StackAuth.Navigator>
    )
}