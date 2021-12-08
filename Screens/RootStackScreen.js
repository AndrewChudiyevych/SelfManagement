import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './SignIn';
import SignUp from './SignUp';
import MainPage from './MainPage';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Main" component={MainPage}/>
        <RootStack.Screen name="SignIn" component={SignIn}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
    </RootStack.Navigator>
);

export default RootStackScreen;