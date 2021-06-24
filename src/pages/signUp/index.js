import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function SignUp ({navigation}) {
    return (
        <View>
            <Text>ini halaman signUp</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

