import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../Helpers/context';
import { useNavigation } from '@react-navigation/core';


export default function SignIn () {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //const { signIn } = React.useContext(AuthContext);

    const  signIn = async () => {
        const responce = fetch('https://api-security-manager.herokuapp.com/api/auth/sign-in', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
              },
              body: JSON.stringify({
                "email": email,
                "password": password
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err}) //.finally(() => setIsLoading(false))
            const check = await responce;
            console.log(check);
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Self-Management</Text>
            <TextInput
                onChangeText={text => setEmail(text)}
                placeholder={'Enter e-mail'}
                style={styles.input}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                placeholder={'Enter password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity
                
            >
                <Button 
                    title={'Sign In'}
                    style={styles.loginButton}
                    onPress={signIn, () => navigation.navigate('Boards')}
            />
            </TouchableOpacity>
           
            
        </SafeAreaView>
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
        flexDirection: 'row'
    },

})