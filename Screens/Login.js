import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';


export default function Login () {

    const [userMail, setUserMail] = useState('')
    const [password, setPassword] = useState('')

    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log('Cant save token');
        }
      }

    async function clearToken () {
        AsyncStorage.removeItem('token')
    }

    function submitHandler () {
        
        const requestOptions = {
            method: 'POST',
            headers: {

            },
            body: JSON.stringify({
                'email': userMail,
                'password': password
            }) 
        }

        fetch('', ).then((res) => {
            return res.json()
        }).then((res) => {
            if (res !== '' && res !== 'error') {
                storeToken(res).then()
                console.log("GOT TOKEN")
            }
            else {
                console.log('GOR ERROR OR EMPTY RESULT')
            }
        }).catch(function (error) {
            console.log('Get ERROR', error)
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Self-Management</Text>
            <TextInput
                defaultValue={userMail} 
                onChangeText={text => setUserMail(text)}
                placeholder={'Enter e-mail'}
                style={styles.input}
            />
            <TextInput
                defaultValue={password} 
                onChangeText={text => setPassword(text)}
                placeholder={'Enter password'}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button
                title={'Login'}
                style={styles.loginButton}
            />
            <Button
                title={'Logout'}
                style={styles.loginButton}
            />
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
        marginBottom: 50,
    },
    loginButton: {
        width: 250,
        height: 48,
    }
})