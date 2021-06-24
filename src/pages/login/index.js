import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function  Login ({navigation}) {
    return (
        <View>
            <Text>ini halaman login</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <View>
                    <Text>SignUp</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

