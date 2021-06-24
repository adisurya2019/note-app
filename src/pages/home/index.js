import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { signOut } from '../../controller/loginController'

export default function home({navigation}) {
    function signedOut(navigation) {
        navigation.navigate("Login")
    }
    return (
        <View style={styles.background}>
            <View >
                <Text style={styles.teks}>CATATAN</Text>
            </View>
            <View style={{ marginTop: 530 }}>
                <TouchableOpacity onPress={() => navigation.navigate("ADD")}>
                    <View style={styles.luar}>
                        <Text style={styles.dalam}>
                            +
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },
    teks: {
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 100,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    luar: {
        padding: 15,
        borderRadius: 60,
        fontWeight: 'bold',
        backgroundColor: 'black',
        marginHorizontal: 170
    },
    dalam: {
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11
    }
});

