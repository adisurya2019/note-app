import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {signOut} from '../../controller/loginController'

export default function home () {
    function signedOut(navigation){
        navigation.navigate("Login")
    }
    return (
        <View style={styles.teks}>
            <Text >anda sudah login</Text>
            <View>
                <TouchableOpacity >
                    <Text>ini log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    teks: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

