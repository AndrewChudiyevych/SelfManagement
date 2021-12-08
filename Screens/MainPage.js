import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';



export default function MainPage () { 
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Welcome To Self-Managemnt</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.loginButton}>Sign Up</Text>
            </TouchableOpacity>
            <Text>If you already have account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.loginButton}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 48,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4fe8ff',
        marginBottom: 20,
    },
    loginButton: {
        width: 250,
        height: 48,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#4fe8ff'
    },

})